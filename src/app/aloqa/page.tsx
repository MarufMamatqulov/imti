import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Aloqa",
  description: "Institut manzili, telefon raqamlari va murojaat shakli.",
};

const infoCards = [
  { icon: MapPin, label: "Manzil", value: SITE.address },
  { icon: Phone, label: "Telefon", value: `${SITE.phone} / ${SITE.phoneSecondary}` },
  { icon: Mail, label: "Elektron pochta", value: SITE.email },
  { icon: Clock, label: "Ish vaqti", value: SITE.workHours },
];

export default function AloqaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aloqa"
        title="Biz bilan bog'laning"
        description="Savol, taklif yoki hamkorlik masalalari bo'yicha quyidagi shakl orqali yoki ko'rsatilgan aloqa vositalari yordamida murojaat qilishingiz mumkin."
        crumbs={[{ label: "Aloqa" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {infoCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_4px_rgba(16,24,40,0.04)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">{card.label}</p>
                  <p className="mt-1.5 text-sm font-semibold text-primary-950 leading-relaxed">{card.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <Reveal>
              <div className="rounded-3xl border border-slate-100 bg-white p-7 sm:p-10 shadow-[0_2px_4px_rgba(16,24,40,0.04)]">
                <h2 className="text-xl font-extrabold text-primary-950 mb-1">Murojaat shakli</h2>
                <p className="text-sm text-slate-500 mb-7">
                  Quyidagi shaklni to&apos;ldiring — belgilangan muddatda javob beramiz.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_2px_4px_rgba(16,24,40,0.04)]">
                <iframe
                  src={SITE.mapEmbedSrc}
                  title="Institut manzili xaritada"
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
