import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { TelegramIcon, FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/data/site";
import { NAV_ITEMS } from "@/data/nav";

const quickLinks = [
  { label: "Institut haqida", href: "/institut" },
  { label: "Rahbariyat", href: "/institut/rahbariyat" },
  { label: "Faoliyat yo'nalishlari", href: "/faoliyat" },
  { label: "Ilmiy faoliyat", href: "/ilmiy-faoliyat" },
  { label: "Nashrlar", href: "/nashrlar" },
  { label: "Hujjatlar", href: "/hujjatlar" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-navy text-white/70">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                <Image src="/logo-mark-white.png" alt={`${SITE.shortName} logotipi`} fill sizes="56px" className="object-contain" />
              </span>
              <span className="text-white font-extrabold text-lg tracking-tight">{SITE.shortName}</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">{SITE.description}</p>
            <div className="flex items-center gap-3 mt-5">
              <a href={SITE.socials.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white hover:text-footer-navy transition-colors">
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white hover:text-footer-navy transition-colors">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white hover:text-footer-navy transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white hover:text-footer-navy transition-colors">
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a href={SITE.socials.x} target="_blank" rel="noreferrer" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white hover:text-footer-navy transition-colors">
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-primary-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Bo&apos;limlar</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.filter((n) => n.href !== "/").map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-primary-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Aloqa ma&apos;lumotlari</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-300 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-300 shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-300 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary-300 shrink-0" />
                <span>{SITE.workHours}</span>
              </li>
            </ul>
            <Link
              href="/aloqa"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-primary-200"
            >
              Murojaat qoldirish <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {SITE.shortName}. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-center sm:text-right">{SITE.parentOrg} tarkibida</p>
        </div>
      </Container>
    </footer>
  );
}
