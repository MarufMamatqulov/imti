import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { LEADERSHIP } from "@/data/leadership";

export default function LeadershipMessage() {
  const director = LEADERSHIP[0];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="rounded-md border border-line bg-primary-950 text-white">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 p-8 sm:p-12">
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="relative h-24 w-24 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-md border border-white/15">
                  <Image
                    src={director.photo}
                    alt={director.position}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{director.fullName}</p>
                  <p className="text-sm text-primary-300 mt-1">{director.position}</p>
                </div>
              </div>
              <div>
                <Quote className="h-9 w-9 text-primary-300/80 mb-4" />
                <p className="text-lg sm:text-xl leading-relaxed text-white/85 text-balance">
                  Bizning maqsadimiz — jamiyatimizda ma&apos;naviy-ma&apos;rifiy muhitni ilmiy asosda
                  chuqur o&apos;rganish, milliy g&apos;oyamizni yanada mustahkamlash va har bir fuqaroda,
                  ayniqsa yoshlarda mustaqil fikrlash, vatanparvarlik tuyg&apos;usini
                  shakllantirishga xizmat qiluvchi amaliy tadqiqotlar olib borishdir.
                </p>
                <Button href="/institut/rahbariyat" variant="outline-light" size="sm" className="mt-6">
                  Rahbariyat bilan tanishish
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
