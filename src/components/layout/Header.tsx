"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Search,
} from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/data/nav";
import { SITE, LANGUAGES } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState("uz");
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white border-b border-line">
        <Container className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line">
              <Image src="/logo-mark.png" alt={`${SITE.shortName} logotipi`} fill sizes="64px" className="object-contain p-1.5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] sm:text-base font-extrabold uppercase text-primary-950 tracking-tight">
                {SITE.shortName}
              </span>
              <span className="hidden sm:block text-sm font-semibold text-primary-700 max-w-[280px] leading-snug">
                Ijtimoiy-ma&apos;naviy tadqiqotlar instituti
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="hidden sm:flex items-center gap-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={clsx(
                    "px-1.5 py-0.5 rounded uppercase text-xs font-semibold tracking-wide transition-colors",
                    lang === l.code ? "text-primary-700" : "text-slate-400 hover:text-primary-700"
                  )}
                >
                  {l.code}
                </button>
              ))}
            </div>
            <button
              aria-label="Qidiruv"
              className="hidden sm:flex h-9 w-9 items-center justify-center text-slate-500 hover:text-primary-700 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
            <span className="hidden sm:block h-8 w-px bg-line" />
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-2.5 group"
            >
              <Phone className="h-5 w-5 text-primary-700 shrink-0" />
              <span className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-primary-700">
                  Ishonch telefoni
                </span>
                <span className="block text-sm font-bold text-primary-950 group-hover:text-primary-700">
                  {SITE.phone}
                </span>
              </span>
            </a>
            <button
              aria-label="Menyu"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden flex h-10 w-10 items-center justify-center rounded-md border border-line text-primary-900"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <div className="hidden xl:block bg-slate-100 border-b border-line">
        <Container className="flex items-center justify-between">
          <nav className="flex min-w-0 items-center">
            {NAV_ITEMS.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <div
                  key={item.href}
                  className="relative shrink-0"
                  onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <div
                    className={clsx(
                      "flex items-center whitespace-nowrap text-[13.5px] font-semibold transition-colors",
                      active ? "bg-primary-700 text-white" : "text-primary-950 hover:bg-white"
                    )}
                  >
                    <Link href={item.href} className="py-3 pl-3.5 pr-1">
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(item.href)}
                        aria-label={`${item.label} bo'limini kengaytirish`}
                        aria-expanded={openDropdown === item.href}
                        className="py-3 pl-1 pr-3.5"
                      >
                        <ChevronDown
                          className={clsx(
                            "h-3.5 w-3.5 transition-transform",
                            openDropdown === item.href && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && (
                    <div
                      className={clsx(
                        "absolute left-0 top-full w-72 transition-all duration-150",
                        openDropdown === item.href
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      )}
                    >
                      <div className="rounded-md border border-line bg-white p-2 shadow-soft">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded px-3.5 py-2.5 hover:bg-primary-50 transition-colors"
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

          <Button href="/aloqa" size="sm" className="my-2 shrink-0">
            Murojaat qilish
          </Button>
        </Container>
      </div>

      <div
        className={clsx(
          "xl:hidden overflow-hidden bg-white border-b border-line transition-[max-height] duration-300 ease-in-out",
          mobileOpen ? "max-h-[calc(100vh-64px)] overflow-y-auto" : "max-h-0"
        )}
      >
        <Container className="py-3 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="border-b border-line last:border-0">
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
