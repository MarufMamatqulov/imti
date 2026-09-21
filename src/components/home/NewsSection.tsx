import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Eye } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/NewsCard";
import { getLatestNews } from "@/data/news";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsSection() {
  const [featured, ...rest] = getLatestNews(5);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Yangiliklar"
            title="Institut hayotidan so'nggi yangiliklar"
            className="max-w-xl"
          />
          <Button href="/yangiliklar" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
            Barcha yangiliklar
          </Button>
        </div>

        <Reveal>
          <Link
            href={`/yangiliklar/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-md border border-line bg-white hover:border-primary-300 transition-colors duration-300 mb-6"
          >
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded bg-primary-950/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" /> {featured.views.toLocaleString("uz-UZ")}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary-950 leading-snug group-hover:text-primary-700 transition-colors">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] text-slate-500 leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
                Batafsil o&apos;qish
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.slice(0, 4).map((item, i) => (
            <Reveal key={item.slug} delay={0.08 * (i + 1)}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
