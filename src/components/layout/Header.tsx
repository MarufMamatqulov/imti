"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Search,
} from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { TelegramIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { NAV_ITEMS } from "@/data/nav";
import { SITE, LANGUAGES } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState("uz");
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden lg:block bg-primary-950 text-white/80 text-xs">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5 text-accent-400" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5 text-accent-400" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href={SITE.socials.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className="hover:text-accent-400 transition-colors">
                <TelegramIcon className="h-3.5 w-3.5" />
              </a>
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent-400 transition-colors">
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent-400 transition-colors">
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-accent-400 transition-colors">
                <YoutubeIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <span className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={clsx(
                    "px-1.5 py-0.5 rounded uppercase font-semibold tracking-wide transition-colors",
                    lang === l.code ? "text-accent-400" : "text-white/60 hover:text-white"
                  )}
                >
                  {l.code}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div
        className={clsx(
          "transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-[0_4px_24px_rgba(10,31,77,0.08)]"
            : "bg-white border-transparent"
        )}
      >
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <Image src="/logo-mark.png" alt={`${SITE.shortName} logotipi`} fill sizes="48px" className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] sm:text-base font-extrabold text-primary-950 tracking-tight">
                {SITE.shortName}
              </span>
              <span className="hidden sm:block text-[11px] text-slate-500 max-w-[220px] leading-snug">
                Ijtimoiy-Ma&apos;naviy Tadqiqotlar Instituti
              </span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-1 px-3.5 py-2.5 rounded-lg text-[13.5px] font-semibold transition-colors",
                      active ? "text-primary-700 bg-primary-50" : "text-slate-700 hover:text-primary-700 hover:bg-primary-50/60"
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>

                  {item.children && (
                    <div
                      className={clsx(
                        "absolute left-0 top-full pt-2 w-72 transition-all duration-150",
                        openDropdown === item.href
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      )}
                    >
                      <div className="rounded-2xl border border-slate-100 bg-white shadow-[0_16px_48px_rgba(10,31,77,0.14)] p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3.5 py-2.5 hover:bg-primary-50 transition-colors"
                          >
                            <span className="block text-sm font-semibold text-primary-950">{child.label}</span>
                            {child.description && (
                              <span className="block text-xs text-slate-500 mt-0.5">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Qidiruv"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-primary-700 hover:border-primary-200 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
            <Button href="/aloqa" size="sm" className="hidden sm:inline-flex">
              Murojaat qilish
            </Button>
            <button
              aria-label="Menyu"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-primary-900"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <div
        className={clsx(
          "xl:hidden overflow-hidden bg-white border-b border-slate-100 transition-[max-height] duration-300 ease-in-out",
          mobileOpen ? "max-h-[calc(100vh-64px)] overflow-y-auto" : "max-h-0"
        )}
      >
        <Container className="py-3 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="border-b border-slate-50 last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="flex-1 py-3 text-sm font-semibold text-primary-950"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === item.href ? null : item.href))
                    }
                    className="p-3 text-slate-400"
                    aria-label="Kengaytirish"
                  >
                    <ChevronDown
                      className={clsx(
                        "h-4 w-4 transition-transform",
                        openDropdown === item.href && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.href && (
                <div className="pb-3 pl-3 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button href="/aloqa" className="mt-4 w-full">
            Murojaat qilish
          </Button>
        </Container>
      </div>
    </header>
  );
}
