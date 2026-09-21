"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import NewsCard from "@/components/NewsCard";
import Reveal from "@/components/ui/Reveal";
import { NEWS, NEWS_CATEGORIES } from "@/data/news";

export default function NewsListClient() {
  const [active, setActive] = useState<string>("Barchasi");

  const filtered = useMemo(() => {
    const sorted = [...NEWS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (active === "Barchasi") return sorted;
    return sorted.filter((n) => n.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-10">
        {NEWS_CATEGORIES.map((cat) => (
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

      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 py-16">Ushbu bo&apos;limda hozircha yangiliklar mavjud emas.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
