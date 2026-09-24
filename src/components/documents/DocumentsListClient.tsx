"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { FileText, FileSpreadsheet, Download, Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { DOCUMENTS, DOCUMENT_CATEGORIES } from "@/data/documents";
import { formatDate } from "@/lib/format";

export default function DocumentsListClient() {
  const [active, setActive] = useState<string>("Barchasi");

  const filtered = useMemo(() => {
    if (active === "Barchasi") return DOCUMENTS;
    return DOCUMENTS.filter((d) => d.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-10">
        {DOCUMENT_CATEGORIES.map((cat) => (
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

      <div className="rounded-md border border-line bg-white overflow-hidden divide-y divide-line">
        {filtered.map((doc, i) => (
          <Reveal key={doc.title} delay={Math.min(i, 6) * 0.04}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-l-[3px] border-l-primary-700 p-5 sm:p-6 hover:bg-primary-50/40 transition-colors">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                {doc.fileType === "XLSX" ? (
                  <FileSpreadsheet className="h-5 w-5" />
                ) : (
                  <FileText className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-primary-950 leading-snug">{doc.title}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span>{doc.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {formatDate(doc.date)}
                  </span>
                  <span>{doc.fileType} · {doc.fileSize}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-sm border border-primary-100 bg-primary-50 px-4 py-2 text-xs font-bold text-primary-700 hover:bg-primary-100 transition-colors shrink-0">
                <Download className="h-3.5 w-3.5" /> Yuklab olish
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
