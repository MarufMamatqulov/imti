"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Phone, Mail, Globe2, MapPin, CalendarClock, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { TelegramIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import type { LeadershipMember } from "@/data/leadership";
import { SITE } from "@/data/site";

function initialsOf(fullName: string) {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function LeadershipCard({ member }: { member: LeadershipMember }) {
  const [tab, setTab] = useState<"duties" | "bio">("duties");

  return (
    <div className="rounded-md border border-line bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_240px] gap-8">
        <div className="flex justify-center md:block md:pt-1">
          <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-primary-50">
            {member.photo ? (
              <Image src={member.photo} alt={member.fullName} fill sizes="128px" className="object-cover" />
            ) : (
              <span className="text-2xl font-extrabold text-primary-700">{initialsOf(member.fullName)}</span>
            )}
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-xl font-extrabold text-primary-950">{member.fullName}</p>
          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{member.position}</p>

          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={() => setTab("duties")}
              className={clsx(
                "rounded-sm px-4 py-2 text-sm font-semibold transition-colors",
                tab === "duties"
                  ? "bg-primary-700 text-white"
                  : "border border-line text-primary-700 hover:bg-primary-50"
              )}
            >
              Vazifalari
            </button>
            <button
              onClick={() => setTab("bio")}
              className={clsx(
                "rounded-sm px-4 py-2 text-sm font-semibold transition-colors",
                tab === "bio"
                  ? "bg-primary-700 text-white"
                  : "border border-line text-primary-700 hover:bg-primary-50"
              )}
            >
              Biografiya
            </button>
          </div>

          <div className="mt-5 text-left">
            {tab === "duties" ? (
              <ul className="space-y-2.5">
                {member.duties.map((duty) => (
                  <li key={duty} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                    {duty}
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <p className="text-sm text-slate-600 leading-relaxed">{member.bioIntro}</p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-700">Mehnat faoliyati</p>
                  <div className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5">
                    {member.workHistory.map((row) => (
                      <Fragment key={row.period}>
                        <span className="text-sm font-semibold text-primary-950 whitespace-nowrap">
                          {row.period}
                        </span>
                        <span className="text-sm text-slate-600 leading-relaxed">{row.role}</span>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3.5 text-sm border-t md:border-t-0 md:border-l border-line pt-6 md:pt-0 md:pl-8">
          <a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2.5 font-semibold text-primary-950 hover:text-primary-700"
          >
            <Phone className="h-4 w-4 text-primary-600 shrink-0" /> {member.phone}
          </a>
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2.5 text-slate-600 italic hover:text-primary-700"
          >
            <Mail className="h-4 w-4 text-primary-600 shrink-0" /> {member.email}
          </a>
          <div className="flex items-center gap-2">
            <a
              href={SITE.socials.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
            >
              <TelegramIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
            >
              <YoutubeIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <a
            href={member.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 text-slate-600 italic hover:text-primary-700"
          >
            <Globe2 className="h-4 w-4 text-primary-600 shrink-0" /> {member.website.replace(/^https?:\/\//, "")}
          </a>
          <div className="flex items-start gap-2.5 text-slate-600 italic">
            <MapPin className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" /> {SITE.address}
          </div>
          <div className="flex items-center gap-2.5 text-slate-600 italic">
            <CalendarClock className="h-4 w-4 text-primary-600 shrink-0" /> {member.receptionDay}
          </div>
        </div>
      </div>
    </div>
  );
}
