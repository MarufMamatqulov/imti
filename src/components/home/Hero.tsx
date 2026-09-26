"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import { SITE } from "@/data/site";
import { getLatestNews } from "@/data/news";
import { formatDate } from "@/lib/format";

const quickLinks = [
  { label: "Institut haqida", href: "/institut" },
  { label: "Faoliyat yo'nalishlari", href: "/faoliyat" },
  { label: "Nashrlar", href: "/nashrlar" },
  { label: "Hujjatlar", href: "/hujjatlar" },
  { label: "Yangiliklar", href: "/yangiliklar" },
  { label: "Aloqa", href: "/aloqa" },
];

const heroNews = getLatestNews(5);
const SLIDE_INTERVAL_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || heroNews.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroNews.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = heroNews[index];

  return (
    <section className="relative overflow-hidden bg-primary-950 text-white">
      <Image
        src="https://picsum.photos/seed/imti-hero/1600/900"
        alt="Institut faoliyatidan lavha"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-primary-950/60" />

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 py-10 sm:py-12 lg:py-14">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold tracking-wide text-primary-200 mb-5">
            {SITE.shortName}
            <span className="h-1 w-1 rounded-full bg-primary-200/50" />
            Ijtimoiy-ma&apos;naviy tadqiqotlar instituti
          </p>

          {current && (
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <Link
                    href={`/yangiliklar/${current.slug}`}
                    className="relative block aspect-[16/9] w-full overflow-hidden rounded-md border border-white/15"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      sizes="(min-width: 1024px) 620px, 100vw"
                      className="object-cover"
                    />
                  </Link>

                  <div className="mt-5 min-w-0 min-h-[120px] sm:min-h-[135px]">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-200">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {current.category} · {formatDate(current.date)}
                    </span>

                    <Link href={`/yangiliklar/${current.slug}`} className="group block">
                      <h1 className="mt-3 text-xl sm:text-2xl lg:text-[2rem] font-extrabold leading-[1.2] tracking-tight text-balance line-clamp-2 group-hover:text-primary-200 transition-colors">
                        {current.title}
                      </h1>
                    </Link>

                    <p className="mt-4 max-w-xl text-sm sm:text-base text-white/75 leading-relaxed line-clamp-2">
                      {current.excerpt}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {heroNews.length > 1 && (
            <div className="mt-2 flex items-center gap-2">
              {heroNews.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-label={`${i + 1}-yangilikni ko'rsatish`}
                  onClick={() => setIndex(i)}
                  className={clsx(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:justify-self-end lg:self-start w-full max-w-xs"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary-200 mb-3">
            Tezkor havolalar
          </p>
          <ul className="rounded-md border border-white/15 divide-y divide-white/15 overflow-hidden">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </Container>
    </section>
  );
}
