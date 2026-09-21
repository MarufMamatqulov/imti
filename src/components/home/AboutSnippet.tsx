import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";

const points = [
  "Jamiyatdagi ma'naviy-ma'rifiy jarayonlarni ilmiy asosda tadqiq etish",
  "Milliy g'oya va umuminsoniy qadriyatlarni targ'ib qiluvchi loyihalar",
  "Davlat organlari uchun ilmiy-tahliliy xulosa va tavsiyalar tayyorlash",
  "Yosh tadqiqotchilar salohiyatini oshirishga ko'maklashish",
];

export default function AboutSnippet() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line">
              <Image
                src="https://picsum.photos/seed/imti-about/1000/760"
                alt="Institut ilmiy kengashi majlisi"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 sm:-right-10 w-52 rounded-md bg-primary-950 text-white p-5">
              <p className="text-xs uppercase tracking-wider text-primary-300 font-bold">Tashkil etilgan</p>
              <p className="text-2xl font-extrabold mt-1">{SITE.founded}-yil</p>
              <p className="text-xs text-white/60 mt-1">Respublika miqyosida faoliyat yuritadi</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Institut haqida"
            title="Ma'naviyat sohasidagi ilmiy tadqiqotlarning yetakchi markazi"
            description="Institut Respublika Ma'naviyat va Ma'rifat Markazi tarkibida faoliyat yuritib, jamiyatdagi ma'naviy-ma'rifiy muhitni tadqiq etish, ilmiy xulosalar chiqarish va amaliy tavsiyalar ishlab chiqish orqali milliy g'oyani mustahkamlashga xizmat qiladi."
          />
          <ul className="mt-7 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary-700 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <Button href="/institut" variant="secondary" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
            Batafsil ma&apos;lumot
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
