"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/data/gallery";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryGridClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));

  const active = activeIndex !== null ? GALLERY[activeIndex] : null;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
        {GALLERY.map((item, i) => (
          <Reveal key={item.title} delay={(i % 6) * 0.05} className="break-inside-avoid">
            <button
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-slate-100 shadow-[0_2px_4px_rgba(16,24,40,0.04)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={i % 3 === 0 ? 1000 : 600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <p className="text-white font-semibold text-sm leading-snug">{item.title}</p>
                <p className="text-white/70 text-xs mt-1">{formatDate(item.date)}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-950/90 backdrop-blur-sm p-4 sm:p-10"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Yopish"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Oldingi"
            className="absolute left-3 sm:left-8 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Keyingi"
            className="absolute right-3 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image src={active.image} alt={active.title} fill sizes="800px" className="object-cover" />
            </div>
            <div className="bg-primary-950 p-5">
              <p className="text-white font-semibold">{active.title}</p>
              <p className="text-white/50 text-sm mt-1">{formatDate(active.date)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
