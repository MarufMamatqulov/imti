import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "@/components/ui/Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative bg-primary-950 text-white py-14 sm:py-20">
      <Container className="relative">
        <nav className="flex items-center flex-wrap gap-1.5 text-xs text-white/50 mb-5">
          <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="h-3.5 w-3.5" /> Bosh sahifa
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className="block text-xs font-bold uppercase tracking-widest text-primary-200 mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">{description}</p>
        )}
      </Container>
    </section>
  );
}
