"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FileText, Download, User, Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PUBLICATIONS } from "@/data/publications";

const TYPES = ["Barchasi", "Monografiya", "Tadqiqot hisoboti", "Ilmiy-ommabop nashr", "Ilmiy jurnal"];

export default function PublicationsListClient() {
  const [active, setActive] = useState("Barchasi");

  const filtered = useMemo(() => {
    if (active === "Barchasi") return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.type === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-10">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors border",
              active === type
                ? "bg-primary-900 text-white border-primary-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-700"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((pub, i) => (
          <Reveal key={pub.slug} delay={(i % 3) * 0.06}>
            <div className="flex h-full gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_4px_rgba(16,24,40,0.04)] hover:shadow-[0_16px_40px_rgba(10,31,77,0.1)] transition-shadow duration-300">
              <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-lg shadow-md">
                <Image src={pub.cover} alt={pub.title} fill sizes="100px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-accent-600">
                  <FileText className="h-3 w-3" /> {pub.type}
                </span>
                <h3 className="mt-1.5 text-sm font-bold text-primary-950 leading-snug line-clamp-3">{pub.title}</h3>
                <p className="mt-auto pt-3 text-xs text-slate-500 flex items-center gap-1.5">
                  <User className="h-3 w-3" /> {pub.author}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <Calendar className="h-3 w-3" /> {pub.year} · {pub.pages} bet
                </p>
                <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-900">
                  <Download className="h-3.5 w-3.5" /> Yuklab olish
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
