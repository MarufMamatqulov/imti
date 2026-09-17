import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import PublicationsListClient from "@/components/publications/PublicationsListClient";

export const metadata: Metadata = {
  title: "Nashrlar",
  description: "Institut tomonidan chop etilgan monografiya, tadqiqot hisobotlari va ilmiy jurnallar.",
};

export default function NashrlarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Elektron kutubxona"
        title="Ilmiy nashrlar"
        description="Institut olimlari va tadqiqotchilari tomonidan tayyorlangan monografiya, tadqiqot hisobotlari va ilmiy jurnal sonlari bilan tanishing."
        crumbs={[{ label: "Nashrlar" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <PublicationsListClient />
        </Container>
      </section>
    </>
  );
}
