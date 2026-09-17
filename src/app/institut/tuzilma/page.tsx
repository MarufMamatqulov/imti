import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import PageHeader from "@/components/PageHeader";
import { STRUCTURE } from "@/data/structure";

export const metadata: Metadata = {
  title: "Tuzilma",
  description: "Institutning ichki tuzilmasi, bo'lim va markazlari.",
};

export default function TuzilmaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institut haqida"
        title="Tashkiliy tuzilma"
        description="Institut quyidagi bo'lim va markazlar orqali o'z faoliyatini samarali tashkil etadi."
        crumbs={[{ label: "Institut haqida", href: "/institut" }, { label: "Tuzilma" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-14 flex flex-col items-center">
            <div className="rounded-2xl bg-primary-950 text-white px-8 py-5 text-center shadow-xl">
              <p className="text-xs uppercase tracking-wider text-accent-300 font-bold">Rahbariyat</p>
              <p className="text-lg font-bold mt-1">Institut direktori</p>
            </div>
            <div className="h-8 w-px bg-slate-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRUCTURE.map((unit, i) => (
              <Reveal key={unit.name} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_2px_4px_rgba(16,24,40,0.04)] hover:shadow-[0_20px_48px_rgba(10,31,77,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon name={unit.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-primary-950 leading-snug">{unit.name}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{unit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
