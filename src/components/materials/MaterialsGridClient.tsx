"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Download, FileText } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { MATERIALS, MATERIAL_CATEGORIES } from "@/data/materials";

export default function MaterialsGridClient() {
  const [active, setActive] = useState<string>("Barchasi");

  const filtered = useMemo(() => {
    if (active === "Barchasi") return MATERIALS;
    return MATERIALS.filter((m) => m.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-10">
        {MATERIAL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
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
        {filtered.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 0.06}>
            <div className="flex h-full flex-col overflow-hidden rounded-md border border-line bg-white hover:border-primary-300 transition-colors duration-300">
              <div className="relative aspect-video w-full overflow-hidden border-b border-line">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="object-cover"
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
    </div>
  );
}
