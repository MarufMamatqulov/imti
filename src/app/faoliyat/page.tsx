import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Faoliyat yo'nalishlari",
  description: "Institutning asosiy faoliyat va tadqiqot yo'nalishlari.",
};

export default function FaoliyatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Faoliyat"
        title="Faoliyat yo'nalishlarimiz"
        description="Institut jamiyatdagi ma'naviy-ma'rifiy muhitni mustahkamlash maqsadida quyidagi asosiy yo'nalishlarda faoliyat yuritadi."
        crumbs={[{ label: "Faoliyat yo'nalishlari" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ServicesGrid />
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
