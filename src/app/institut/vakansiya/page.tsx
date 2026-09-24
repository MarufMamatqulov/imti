import type { Metadata } from "next";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/PageHeader";
import { VACANCIES } from "@/data/vacancies";
import { SITE } from "@/data/site";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Vakansiyalar",
  description: "Institutdagi bo'sh ish o'rinlari va ularga qo'yiladigan talablar.",
};

export default function VakansiyaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institut haqida"
        title="Bo'sh ish o'rinlari"
        description="Institut jamoasiga qo'shilishni istagan malakali mutaxassislarni quyidagi bo'sh lavozimlarga hujjat topshirishga taklif qilamiz."
        crumbs={[{ label: "Institut haqida", href: "/institut" }, { label: "Vakansiyalar" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {VACANCIES.map((vacancy, i) => (
              <Reveal key={vacancy.slug} delay={i * 0.06}>
                <div className="rounded-md border border-line border-l-[3px] border-l-primary-700 bg-white p-7 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary-950">{vacancy.title}</h3>
                      <p className="text-sm text-primary-700 font-medium mt-1">{vacancy.department}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary-50 text-primary-700 px-3.5 py-1.5 text-xs font-bold w-max">
                      <Briefcase className="h-3.5 w-3.5" /> {vacancy.type}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {vacancy.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-primary-700 shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-line pt-5">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4 text-primary-700" />
                      Hujjat topshirish muddati: <strong className="text-primary-950">{formatDate(vacancy.deadline)}</strong>
                    </span>
                    <Button href="/aloqa" size="sm">
                      Ariza topshirish
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-md bg-primary-50 border border-primary-100 p-6 text-sm text-primary-900 text-center">
              Qo&apos;shimcha savollar bo&apos;yicha{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold underline underline-offset-2">
                {SITE.email}
              </a>{" "}
              manziliga murojaat qiling yoki{" "}
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-semibold underline underline-offset-2">
                {SITE.phone}
              </a>{" "}
              raqamiga qo&apos;ng&apos;iroq qiling.
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
