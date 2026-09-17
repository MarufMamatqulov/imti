"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, BadgeCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-500/10 blur-3xl" />

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center py-16 sm:py-20 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {SITE.parentOrg} huzurida
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-balance"
          >
            Ijtimoiy-Ma&apos;naviy{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              Tadqiqotlar
            </span>{" "}
            Instituti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-accent-400" /> {SITE.founded}-yildan buyon faoliyat
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-accent-400" /> Davlat va xalqaro miqyosda tan olingan
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="https://picsum.photos/seed/imti-hero/900/1100"
              alt="Institut faoliyatidan lavha"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 sm:-left-10 w-56 rounded-2xl bg-white/95 backdrop-blur p-4 shadow-2xl text-primary-950">
            <p className="text-3xl font-extrabold text-primary-800">340+</p>
            <p className="text-xs text-slate-500 mt-1">Nashr etilgan ilmiy tadqiqot va monografiyalar</p>
          </div>

          <div className="absolute -top-6 -right-4 sm:-right-8 rounded-2xl bg-accent-400 p-4 shadow-2xl text-primary-950 max-w-[10rem]">
            <p className="text-2xl font-extrabold">45+</p>
            <p className="text-xs font-medium mt-1">Xalqaro hamkor tashkilot</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
