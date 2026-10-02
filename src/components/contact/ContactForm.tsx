"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          phone: data.get("phone"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error || "Murojaatni yuborib bo'lmadi. Birozdan so'ng qayta urinib ko'ring.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("Internet aloqasini tekshirib, qayta urinib ko'ring.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-14 px-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-5">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="text-lg font-bold text-primary-950">Murojaatingiz qabul qilindi</h3>
        <p className="mt-2 text-sm text-slate-500 max-w-sm">
          Tez orada mutaxassislarimiz siz bilan bog&apos;lanadi. E&apos;tiboringiz uchun rahmat!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary-700 hover:text-primary-900"
        >
          Yana murojaat qoldirish
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* Honeypot: hidden from real users via CSS, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Veb-sayt</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Ism va familiya *</label>
        <input
          required
          name="fullName"
          type="text"
          placeholder="Ismingizni kiriting"
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Telefon raqam *</label>
        <input
          required
          name="phone"
          type="tel"
          placeholder="+998 90 123 45 67"
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Elektron pochta</label>
        <input
          name="email"
          type="email"
          placeholder="email@example.com"
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Murojaat mavzusi *</label>
        <select
          required
          name="subject"
          defaultValue=""
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 text-slate-600"
        >
          <option value="" disabled>
            Mavzuni tanlang
          </option>
          <option>Ilmiy hamkorlik</option>
          <option>Ariza / vakansiya</option>
          <option>Taklif va shikoyat</option>
          <option>Matbuot xizmati uchun so&apos;rov</option>
          <option>Boshqa</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Xabar matni *</label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Murojaatingiz mazmunini batafsil yozing..."
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none"
        />
      </div>

      {status === "error" && (
        <div className="sm:col-span-2 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          {errorMessage}
        </div>
      )}

      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "loading"}
          icon={
            status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )
          }
        >
          {status === "loading" ? "Yuborilmoqda..." : "Murojaatni yuborish"}
        </Button>
      </div>
    </form>
  );
}
