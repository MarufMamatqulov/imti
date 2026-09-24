import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, Eye, ArrowLeft, Share2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/NewsCard";
import { TelegramIcon, FacebookIcon, XIcon } from "@/components/ui/SocialIcons";
import { NEWS, getNewsBySlug, getRelatedNews } from "@/data/news";
import { SITE } from "@/data/site";
import { formatDate, formatNumber } from "@/lib/format";

export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: [item.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const related = getRelatedNews(slug, 3);

  return (
    <>
      <section className="bg-primary-950 text-white py-14 sm:py-16">
        <Container>
          <Link href="/yangiliklar" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Barcha yangiliklar
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-primary-200 mb-4">
            {item.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance max-w-3xl">
            {item.title}
          </h1>
          <div className="mt-6 flex items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {formatDate(item.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" /> {formatNumber(item.views)} ko&apos;rildi
            </span>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <article>
            <Reveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-line mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div className="prose-none space-y-5">
              {item.content.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                <Share2 className="h-4 w-4" /> Ulashish:
              </span>
              <a
                href={`https://t.me/share/url?url=${SITE.domain}/yangiliklar/${item.slug}&text=${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-slate-600 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-colors"
                aria-label="Telegramda ulashish"
              >
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${SITE.domain}/yangiliklar/${item.slug}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-slate-600 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-colors"
                aria-label="Facebookda ulashish"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://x.com/intent/tweet?url=${SITE.domain}/yangiliklar/${item.slug}&text=${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-slate-600 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-colors"
                aria-label="X'da ulashish"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-md border border-line bg-slate-50 p-6">
              <h3 className="font-bold text-primary-950 mb-4">O&apos;xshash yangiliklar</h3>
              <div className="space-y-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/yangiliklar/${rel.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-sm">
                      <Image src={rel.image} alt={rel.title} fill sizes="80px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-950 leading-snug line-clamp-2 group-hover:text-primary-700 transition-colors">
                        {rel.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{formatDate(rel.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <Container>
            <h3 className="text-xl font-extrabold text-primary-950 mb-8">Boshqa yangiliklar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <NewsCard key={rel.slug} item={rel} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
