import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Eye, ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/data/news";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsCard({
  item,
  featured = false,
}: {
  item: NewsItem;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/yangiliklar/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_4px_rgba(16,24,40,0.04)] hover:shadow-[0_20px_48px_rgba(10,31,77,0.12)] transition-all duration-300"
    >
      <div className={`relative w-full overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 400px, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-700">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {formatDate(item.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" /> {item.views.toLocaleString("uz-UZ")}
          </span>
        </div>
        <h3 className={`font-bold text-primary-950 leading-snug line-clamp-2 group-hover:text-primary-700 transition-colors ${featured ? "text-xl" : "text-base"}`}>
          {item.title}
        </h3>
        <p className="mt-2.5 text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">
          {item.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
          Batafsil o&apos;qish
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
