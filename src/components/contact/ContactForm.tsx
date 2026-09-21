"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("sent");
      e.currentTarget.reset();
    }, 900);
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
      <div>
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Ism va familiya *</label>
        <input
          required
          type="text"
          placeholder="Ismingizni kiriting"
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Telefon raqam *</label>
        <input
          required
          type="tel"
          placeholder="+998 90 123 45 67"
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Elektron pochta</label>
        <input
          type="email"
          placeholder="email@example.com"
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-primary-950 mb-1.5">Murojaat mavzusi *</label>
        <select
          required
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
          rows={5}
          placeholder="Murojaatingiz mazmunini batafsil yozing..."
          className="w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none"
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
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
