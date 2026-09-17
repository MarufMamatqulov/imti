import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { PUBLICATIONS } from "@/data/publications";

export default function PublicationsSection() {
  const items = PUBLICATIONS.slice(0, 5);

  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Elektron kutubxona"
            title="So'nggi ilmiy nashrlar"
            className="max-w-xl"
          />
          <Button href="/nashrlar" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
            Barcha nashrlar
          </Button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 scrollbar-hide">
          {items.map((pub, i) => (
            <Reveal key={pub.slug} delay={i * 0.06} className="shrink-0 w-44 sm:w-auto">
              <Link href="/nashrlar" className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(10,31,77,0.12)] border border-slate-100 group-hover:-translate-y-1.5 transition-transform duration-300">
                  <Image
                    src={pub.cover}
                    alt={pub.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[11px] font-semibold text-white/90">
                    <FileText className="h-3 w-3" /> {pub.type}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-primary-950 leading-snug line-clamp-2 group-hover:text-primary-700 transition-colors">
                  {pub.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{pub.author} · {pub.year}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
