import type { Metadata } from "next";
import { Clock, Users2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/PageHeader";
import { RESEARCH_PROJECTS, RESEARCH_AREAS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Ilmiy faoliyat",
  description: "Institutning ilmiy-tadqiqot loyihalari va tadqiqot yo'nalishlari.",
};

export default function IlmiyFaoliyatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ilmiy faoliyat"
        title="Ilmiy-tadqiqot loyihalari va yo'nalishlari"
        description="Institut ilmiy kengashi tomonidan tasdiqlangan reja asosida fundamental va amaliy tadqiqot loyihalarini amalga oshiradi."
        crumbs={[{ label: "Ilmiy faoliyat" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Tadqiqot yo'nalishlari" title="Ustuvor ilmiy yo'nalishlar" />
          <div className="mt-8 flex flex-wrap gap-3">
            {RESEARCH_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-800"
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50">
        <Container>
          <SectionHeading eyebrow="Loyihalar" title="Joriy va yakunlangan tadqiqot loyihalari" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_2px_4px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        project.status === "Davom etmoqda"
                          ? "bg-emerald-50 text-emerald-accent"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5" /> {project.period}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-primary-950 leading-snug">{project.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{project.description}</p>
                  <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary-700 border-t border-slate-100 pt-4">
                    <Users2 className="h-4 w-4" /> {project.lead}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
