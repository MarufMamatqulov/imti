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
            <div className="rounded-md bg-primary-950 text-white px-8 py-5 text-center">
              <p className="text-xs uppercase tracking-wider text-primary-200 font-bold">Rahbariyat</p>
              <p className="text-lg font-bold mt-1">Institut direktori</p>
            </div>
            <div className="h-8 w-px bg-slate-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
            {STRUCTURE.map((unit, i) => (
              <Reveal key={unit.name} delay={(i % 3) * 0.08}>
                <div className="h-full bg-white p-7 hover:bg-primary-50/40 transition-colors duration-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-50 text-primary-700">
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
