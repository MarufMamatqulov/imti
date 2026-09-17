import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import GalleryGridClient from "@/components/gallery/GalleryGridClient";

export const metadata: Metadata = {
  title: "Galereya",
  description: "Institut tadbirlari va faoliyatidan foto lavhalar.",
};

export default function GalereyaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Foto galereya"
        description="Institut tomonidan tashkil etilgan tadbirlar, anjumanlar va forumlardan foto lavhalar."
        crumbs={[{ label: "Galereya" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <GalleryGridClient />
        </Container>
      </section>
    </>
  );
}
