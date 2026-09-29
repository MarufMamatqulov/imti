"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { ALL_MATERIALS, MATERIAL_CATEGORIES } from "@/data/materials";

const PAGE_SIZE = 9;

function paginationRange(current: number, total: number): (number | "...")[] {
  const items: (number | "...")[] = [];
  const add = (v: number | "...") => items[items.length - 1] !== v && items.push(v);
  add(1);
  if (current - 1 > 2) add("...");
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) add(p);
  if (current + 1 < total - 1) add("...");
  if (total > 1) add(total);
  return items;
}

export default function MaterialsGridClient() {
  const [active, setActive] = useState<string>("Barchasi");
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (active === "Barchasi") return ALL_MATERIALS;
    return ALL_MATERIALS.filter((m) => m.category === active);
  }, [active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const selectCategory = (cat: string) => {
    setActive(cat);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div ref={topRef} className="flex flex-wrap gap-2.5 mb-10 scroll-mt-28">
        {MATERIAL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => selectCategory(cat)}
            className={clsx(
              "rounded-sm px-4 py-2 text-sm font-semibold transition-colors border",
              active === cat
                ? "bg-primary-900 text-white border-primary-900"
                : "bg-white text-slate-600 border-line hover:border-primary-300 hover:text-primary-700"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paged.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 0.06}>
            <div className="flex h-full flex-col overflow-hidden rounded-md border border-line bg-white hover:border-primary-300 transition-colors duration-300">
              <div
                className={clsx(
                  "relative w-full overflow-hidden border-b border-line",
                  item.coverAspect === "portrait" ? "aspect-[3/4] bg-slate-50" : "aspect-video"
                )}
              >
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className={item.coverAspect === "portrait" ? "object-contain p-2" : "object-cover"}
                />
                <span className="absolute left-3 top-3 rounded bg-primary-950/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-bold text-primary-950 leading-snug">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed flex-1">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                  {item.files.map((file) => (
                    <a
                      key={file.path}
                      href={file.path}
                      download
                      className="inline-flex items-center gap-1.5 rounded-sm border border-primary-100 bg-primary-50 px-3 py-1.5 text-xs font-bold text-primary-700 hover:bg-primary-100 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" /> {file.label}
                      <span className="text-primary-400 font-normal">
                        ({file.fileType} · {file.fileSize})
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="flex items-center justify-center gap-2 py-16 text-center text-slate-500">
          <FileText className="h-4 w-4" /> Ushbu bo&apos;limda hozircha material mavjud emas.
        </p>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-1.5">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label="Oldingi sahifa"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-slate-600 hover:border-primary-300 hover:text-primary-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {paginationRange(page, totalPages).map((p, i) =>
            p === "..." ? (
              <span key={`ellipsis-${i}`} className="px-2 text-sm text-slate-400">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p)}
                aria-current={p === page ? "page" : undefined}
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-sm border text-sm font-semibold transition-colors",
                  p === page
                    ? "bg-primary-900 text-white border-primary-900"
                    : "bg-white text-slate-600 border-line hover:border-primary-300 hover:text-primary-700"
                )}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Keyingi sahifa"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-slate-600 hover:border-primary-300 hover:text-primary-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
