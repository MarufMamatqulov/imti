import { ArrowRight, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 px-8 py-14 sm:px-16 sm:py-16 text-center text-white">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-balance max-w-2xl mx-auto">
                Tadqiqot natijalari, e&apos;lonlar va tadbirlardan birinchi bo&apos;lib xabardor bo&apos;ling
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">
                Institut faoliyati, yangi nashrlar va ma&apos;rifiy tadbirlar haqidagi so&apos;nggi
                ma&apos;lumotlarni olish uchun biz bilan bog&apos;laning yoki ijtimoiy tarmoqlarimizga obuna bo&apos;ling.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/aloqa" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Murojaat qoldirish
                </Button>
                <Button href="https://t.me/imti_uz" variant="outline-light" size="lg" icon={<Send className="h-4 w-4" />}>
                  Telegram kanal
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
