import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/PageHeader";
import LeadershipCard from "@/components/institut/LeadershipCard";
import { LEADERSHIP } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Rahbariyat",
  description: "Institut rahbariyati, vazifalari, biografiyasi va qabul uchun aloqa ma'lumotlari.",
};

export default function RahbariyatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institut haqida"
        title="Rahbariyat"
        description="Institut faoliyatiga rahbarlik qiluvchi mansabdor shaxs bilan tanishing: vazifalari, biografiyasi va murojaat uchun aloqa ma'lumotlari."
        crumbs={[{ label: "Institut haqida", href: "/institut" }, { label: "Rahbariyat" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-5xl space-y-6">
            {LEADERSHIP.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.1}>
                <LeadershipCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
