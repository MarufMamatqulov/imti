import Image from "next/image";
import type { Metadata } from "next";
import { Phone, Mail, CalendarClock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/PageHeader";
import { LEADERSHIP } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Rahbariyat",
  description: "Institut rahbariyati, qabul kunlari va aloqa ma'lumotlari.",
};

export default function RahbariyatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institut haqida"
        title="Rahbariyat"
        description="Institut faoliyatiga rahbarlik qiluvchi mansabdor shaxslar bilan tanishing va murojaat uchun qabul kunlaridan foydalaning."
        crumbs={[{ label: "Institut haqida", href: "/institut" }, { label: "Rahbariyat" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-[0_2px_4px_rgba(16,24,40,0.04)] hover:shadow-[0_20px_48px_rgba(10,31,77,0.12)] transition-shadow duration-300">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={member.photo}
                      alt={member.position}
                      fill
                      sizes="(min-width: 1024px) 360px, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-white font-bold text-lg leading-tight">{member.fullName}</p>
                      <p className="text-accent-300 text-sm font-medium mt-0.5">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                    <div className="mt-5 space-y-2.5 text-sm text-slate-500 border-t border-slate-100 pt-4">
                      <p className="flex items-center gap-2.5">
                        <CalendarClock className="h-4 w-4 text-primary-600 shrink-0" />
                        {member.receptionDay}
                      </p>
                      <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-primary-700">
                        <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                        {member.phone}
                      </a>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 hover:text-primary-700">
                        <Mail className="h-4 w-4 text-primary-600 shrink-0" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
