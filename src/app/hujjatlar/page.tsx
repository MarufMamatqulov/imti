import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import DocumentsListClient from "@/components/documents/DocumentsListClient";

export const metadata: Metadata = {
  title: "Hujjatlar",
  description: "Institut faoliyatiga oid normativ-huquqiy hujjatlar, buyruqlar va hisobotlar.",
};

export default function HujjatlarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hujjatlar"
        title="Normativ-huquqiy hujjatlar"
        description="Institut faoliyatini tartibga soluvchi hujjatlar, buyruq-farmoyishlar va ochiq ma'lumotlar shu yerda joylashtirilgan."
        crumbs={[{ label: "Hujjatlar" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <DocumentsListClient />
        </Container>
      </section>
    </>
  );
}
