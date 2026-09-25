import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import PublicationsListClient from "@/components/publications/PublicationsListClient";

export const metadata: Metadata = {
  title: "Nashrlar",
  description: "Institut xodimlarining OAVda chop etilgan maqolalari, ilmiy jurnal maqolalari va ommabop nashrlari.",
};

export default function NashrlarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Elektron kutubxona"
        title="Nashrlar"
        description="Institut xodimlari va tadqiqotchilarining ommaviy axborot vositalarida chop etilgan maqolalari, ilmiy jurnal nashrlari va ommabop risolalari bilan tanishing."
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
