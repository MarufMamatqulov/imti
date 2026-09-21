"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, BadgeCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/data/site";

const quickLinks = [
  { label: "Institut haqida", href: "/institut" },
  { label: "Faoliyat yo'nalishlari", href: "/faoliyat" },
  { label: "Nashrlar", href: "/nashrlar" },
  { label: "Hujjatlar", href: "/hujjatlar" },
  { label: "Yangiliklar", href: "/yangiliklar" },
  { label: "Aloqa", href: "/aloqa" },
];

export default function Hero() {
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

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 py-16 sm:py-20 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-200"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {SITE.parentOrg} huzurida
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.08] tracking-tight text-balance"
          >
            Ijtimoiy-Ma&apos;naviy Tadqiqotlar Instituti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/institut" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Institut haqida
            </Button>
            <Button href="/nashrlar" variant="outline-light" size="lg" icon={<PlayCircle className="h-4 w-4" />}>
              Nashrlarni ko&apos;rish
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70"
          >
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-primary-300" /> {SITE.founded}-yildan buyon faoliyat
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-primary-300" /> Davlat va xalqaro miqyosda tan olingan
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex items-center gap-8 border-t border-white/15 pt-6 text-white"
          >
            <div>
              <p className="text-2xl font-extrabold">340+</p>
              <p className="text-xs text-white/60 mt-0.5">Nashr etilgan ilmiy ish</p>
            </div>
            <span className="h-8 w-px bg-white/15" />
            <div>
              <p className="text-2xl font-extrabold">45+</p>
              <p className="text-xs text-white/60 mt-0.5">Xalqaro hamkor tashkilot</p>
            </div>
          </motion.div>
        </div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:justify-self-end lg:self-center w-full max-w-xs"
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
