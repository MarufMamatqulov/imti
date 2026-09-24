import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/PageHeader";
import LeadershipCard from "@/components/institut/LeadershipCard";
import { STRUCTURE_MEMBERS } from "@/data/structure";

export const metadata: Metadata = {
  title: "Tarkibiy bo'linmalar",
  description: "Institutning tarkibiy bo'linmalariga rahbarlik qiluvchi shaxslar, vazifalari va aloqa ma'lumotlari.",
};

export default function TuzilmaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institut haqida"
        title="Tarkibiy bo'linmalar"
        description="Institut tarkibiy bo'linmalariga mas'ul shaxslar bilan tanishing: vazifalari, biografiyasi va murojaat uchun aloqa ma'lumotlari."
        crumbs={[{ label: "Institut haqida", href: "/institut" }, { label: "Tarkibiy bo'linmalar" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-5xl space-y-6">
            {STRUCTURE_MEMBERS.map((member, i) => (
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
