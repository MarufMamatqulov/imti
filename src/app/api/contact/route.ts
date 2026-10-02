import { SITE } from "@/data/site";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 2000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export async function POST(req: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return Response.json(
      { error: "Murojaat tizimi hozircha sozlanmagan. Iltimos, telefon yoki email orqali bog'laning." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Noto'g'ri so'rov." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field, bots usually do.
  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const fullName = clean(body.fullName);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);

  if (!fullName || !phone || !subject || !message) {
    return Response.json({ error: "Barcha majburiy maydonlarni to'ldiring." }, { status: 400 });
  }

  const text = [
    "📩 <b>Yangi murojaat — " + escapeHtml(SITE.shortName) + " sayti</b>",
    "",
    "👤 <b>Ism familiya:</b> " + escapeHtml(fullName),
    "📞 <b>Telefon:</b> " + escapeHtml(phone),
    email ? "✉️ <b>Email:</b> " + escapeHtml(email) : null,
    "📂 <b>Mavzu:</b> " + escapeHtml(subject),
    "",
    "💬 <b>Xabar:</b>",
    escapeHtml(message),
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Telegram sendMessage failed:", res.status, detail);
      return Response.json(
        { error: "Murojaatni yuborib bo'lmadi. Birozdan so'ng qayta urinib ko'ring." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Telegram request error:", err);
    return Response.json(
      { error: "Murojaatni yuborib bo'lmadi. Birozdan so'ng qayta urinib ko'ring." },
      { status: 502 }
    );
  }
}
