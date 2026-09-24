import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Eye, ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/data/news";
import { formatDate, formatNumber } from "@/lib/format";

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
      className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white hover:border-primary-300 transition-colors duration-300"
    >
      <div className={`relative w-full overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 400px, 90vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded bg-primary-950/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {formatDate(item.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" /> {formatNumber(item.views)}
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
