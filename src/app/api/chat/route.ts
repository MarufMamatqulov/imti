import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const MAX_HISTORY = 16;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_OUTPUT_TOKENS = 700;

function buildSystemPrompt(): string {
  const servicesList = SERVICES.map((s) => `- ${s.title}: ${s.description}`).join("\n");

  return `Sen ${SITE.shortName} (${SITE.fullNameUz}) muassasasining rasmiy veb-saytidagi sun'iy intellekt yordamchisisan.

Muassasa haqida ma'lumot:
- Tashkil topgan yili: ${SITE.founded}
- Qarashli tashkilot: ${SITE.parentOrg}
- Shior: "${SITE.tagline}"
- Tavsif: ${SITE.description}
- Manzil: ${SITE.address}
- Telefon: ${SITE.phone}
- Email: ${SITE.email}
- Ish vaqti: ${SITE.workHours}

Institut xizmatlari:
${servicesList}

Yo'l-yo'riq:
- Foydalanuvchi qaysi tilda yozsa (o'zbek, rus yoki ingliz), o'sha tilda javob ber. Til aniq bo'lmasa, o'zbek tilida javob ber.
- Muloqot ohangi: do'stona, hurmatli, aniq va lo'nda. Keraksiz uzun javoblardan qoch.
- Institut faoliyati, xizmatlari, tadqiqotlari, murojaat tartibi haqidagi savollarga yuqoridagi ma'lumotlar asosida javob ber.
- Institutga aloqasi bo'lmagan umumiy savollarga (masalan, umumiy bilim, tushuntirish, hisob-kitob va shu kabilar) ham yordam ber — sen keng qamrovli zamonaviy AI yordamchisisan, faqat institut mavzusi bilan cheklanma.
- Aniq shaxsiy ma'lumot yoki real vaqtdagi ma'lumot (masalan, aniq hujjat holati) so'ralsa va bu ma'lumot senda bo'lmasa, foydalanuvchini yuqoridagi telefon yoki email orqali bog'lanishga yo'llat.
- Hech qachon mavjud bo'lmagan faktlarni to'qib chiqarma.`;
}

function sseLinesToTextStream(upstream: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.getReader();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line.startsWith("data:")) continue;

            const data = line.slice(5).trim();
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const delta: string | undefined = parsed.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // Ignore malformed SSE fragments (e.g. split across chunks)
            }
          }
        }
      } catch (err) {
        controller.error(err);
        return;
      }

      controller.close();
    },
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "AI yordamchi hali sozlanmagan: OPENAI_API_KEY muhit o'zgaruvchisi topilmadi." },
      { status: 500 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Noto'g'ri so'rov formati." }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const history = incoming
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (history.length === 0) {
    return Response.json({ error: "Xabar matni bo'sh bo'lishi mumkin emas." }, { status: 400 });
  }

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      temperature: 0.6,
      max_tokens: MAX_OUTPUT_TOKENS,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...history],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const errorText = await upstream.text().catch(() => "");
    console.error("OpenAI chat completion error:", upstream.status, errorText);
    return Response.json(
      { error: "AI yordamchidan javob olishda xatolik yuz berdi. Birozdan so'ng qayta urinib ko'ring." },
      { status: 502 }
    );
  }

  return new Response(sseLinesToTextStream(upstream.body), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store",
    },
  });
}
