import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Target, Eye, HeartHandshake, Landmark } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/home/CtaSection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Institut haqida",
  description: SITE.description,
};

const values = [
  {
    icon: Target,
    title: "Missiyamiz",
    text: "Jamiyatdagi ma'naviy-ma'rifiy muhitni ilmiy asosda tadqiq etish va amaliy tavsiyalar ishlab chiqish.",
  },
  {
    icon: Eye,
    title: "Vazifamiz",
    text: "Milliy g'oya va umuminsoniy qadriyatlarni ilmiy tadqiqotlar orqali mustahkamlash va targ'ib qilish.",
  },
  {
    icon: HeartHandshake,
    title: "Qadriyatlarimiz",
    text: "Halollik, ilmiylik, mas'uliyat va millatga sadoqat — faoliyatimizning asosiy tamoyillari.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Institut tashkil etildi",
    text: "Respublika Ma'naviyat va Ma'rifat Markazi huzurida Ijtimoiy-Ma'naviy Tadqiqotlar Instituti faoliyatini boshladi.",
  },
  {
    year: "2021",
    title: "Ilmiy jurnal ta'sis etildi",
    text: "\"Ijtimoiy-ma'naviy tadqiqotlar\" ilmiy jurnalining birinchi soni chop etildi.",
  },
  {
    year: "2023",
    title: "Xalqaro hamkorlik kengaydi",
    text: "Bir qator xorijiy ilmiy-tadqiqot markazlari bilan hamkorlik memorandumlari imzolandi.",
  },
  {
    year: "2026",
    title: "Raqamli tahlil markazi ochildi",
    text: "Ijtimoiy tarmoqlardagi kayfiyatni tahlil qiluvchi raqamli monitoring bo'limi tashkil etildi.",
  },
];

const links = [
  { title: "Rahbariyat", href: "/institut/rahbariyat", text: "Institut rahbariyati va qabul kunlari", icon: Landmark },
  { title: "Tuzilma", href: "/institut/tuzilma", text: "Bo'lim va markazlar tuzilmasi", icon: Target },
  { title: "Vakansiyalar", href: "/institut/vakansiya", text: "Bo'sh ish o'rinlari va talablar", icon: HeartHandshake },
];

export default function InstitutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institut haqida"
        title="Ma'naviyat sohasidagi ilmiy tadqiqotlarning yetakchi markazi"
        description={SITE.description}
        crumbs={[{ label: "Institut haqida" }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Kim biz"
              title={`${SITE.shortName} nima bilan shug'ullanadi?`}
              description="Institut O'zbekistonda ma'naviy-ma'rifiy sohadagi ilmiy tadqiqotlarni muvofiqlashtiruvchi, jamiyat hayotidagi dolzarb ijtimoiy-g'oyaviy jarayonlarni tahlil qiluvchi va davlat siyosatini ilmiy asoslar bilan ta'minlovchi muassasadir."
            />
            <p className="mt-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              {SITE.parentOrg} tarkibida faoliyat yurituvchi institut respublikaning barcha
              hududlarini qamrab oluvchi tadqiqot tarmog&apos;iga ega bo&apos;lib, ilmiy xodimlar,
              sotsiologlar va ekspertlardan iborat malakali jamoaga tayanadi.
            </p>
            <Button href="/faoliyat" variant="secondary" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              Faoliyat yo&apos;nalishlari
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(10,31,77,0.15)]">
              <Image
                src="https://picsum.photos/seed/imti-institute-building/1000/760"
                alt="Institut binosi"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Yo'l-yo'riqlarimiz"
            title="Missiya, vazifa va qadriyatlar"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-[0_2px_4px_rgba(16,24,40,0.04)]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary-950">{value.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Tarixi" title="Institut rivojlanish bosqichlari" align="center" className="mx-auto" />
          <div className="mt-14 relative max-w-3xl mx-auto">
            <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                      i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                    }`}
                  >
                    <div className="absolute left-0 sm:left-1/2 top-1 h-8 w-8 -translate-x-1/2 rounded-full bg-accent-400 text-primary-950 flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white shadow-md">
                      {item.year.slice(2)}
                    </div>
                    <div className="pl-12 sm:pl-0 sm:w-1/2" />
                    <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 1 ? "sm:pr-10" : "sm:pl-10"}`}>
                      <span className="text-sm font-bold text-accent-600">{item.year}</span>
                      <h3 className="text-lg font-bold text-primary-950 mt-1">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {links.map((link, i) => (
              <Reveal key={link.href} delay={i * 0.1}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_2px_4px_rgba(16,24,40,0.04)] hover:shadow-[0_20px_48px_rgba(10,31,77,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary-950">{link.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{link.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
                    Batafsil <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
