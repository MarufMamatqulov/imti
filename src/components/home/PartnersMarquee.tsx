import Container from "@/components/ui/Container";
import { PARTNERS } from "@/data/partners";
import { Handshake } from "lucide-react";

export default function PartnersMarquee() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-14 border-y border-slate-100 bg-white overflow-hidden">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Hamkor tashkilotlar va muassasalar
        </p>
      </Container>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-5 py-3.5 min-w-[260px]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-900 text-white">
                <Handshake className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-950 leading-tight">{partner.name}</p>
                <p className="text-[11px] text-slate-500">{partner.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
