import Link from "next/link";
import { Home, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-white min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <Container className="relative text-center py-20">
        <p className="text-7xl sm:text-8xl font-extrabold text-accent-400/90">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-balance">
          Kechirasiz, siz izlagan sahifa topilmadi
        </h1>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          Sahifa manzili o&apos;zgargan yoki mavjud emas bo&apos;lishi mumkin. Bosh sahifaga qayting
          yoki kerakli bo&apos;limni qidiring.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg" icon={<Home className="h-4 w-4" />}>
            Bosh sahifaga qaytish
          </Button>
          <Button href="/yangiliklar" variant="outline-light" size="lg" icon={<Search className="h-4 w-4" />}>
            Yangiliklarni ko&apos;rish
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
          <Link href="/institut" className="hover:text-white transition-colors">Institut haqida</Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Link href="/faoliyat" className="hover:text-white transition-colors">Faoliyat yo&apos;nalishlari</Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <Link href="/aloqa" className="hover:text-white transition-colors">Aloqa</Link>
        </div>
      </Container>
    </section>
  );
}
