import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import MaterialsGridClient from "@/components/materials/MaterialsGridClient";

export const metadata: Metadata = {
  title: "Materiallar",
  description: "Ma'rifiy-targ'ibot tadbirlarida foydalanish uchun institut tayyorlagan taqdimotlar va materiallar.",
};

export default function MateriallarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Targ'ibot materiallari"
        description="Institut tomonidan tayyorlangan taqdimot va materiallar — ta'lim muassasalari, mahalla va boshqa tashkilotlar ma'rifiy-targ'ibot tadbirlarida erkin foydalanishi mumkin."
        crumbs={[{ label: "Materiallar" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <MaterialsGridClient />
        </Container>
      </section>
    </>
  );
}
