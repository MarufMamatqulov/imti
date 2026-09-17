import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/PageHeader";
import NewsListClient from "@/components/news/NewsListClient";

export const metadata: Metadata = {
  title: "Yangiliklar",
  description: "Institut faoliyati va tadbirlariga oid so'nggi yangiliklar.",
};

export default function YangiliklarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Yangiliklar"
        title="Institut hayotidan yangiliklar"
        description="Ilmiy anjumanlar, xalqaro hamkorlik va ma'rifiy tadbirlarga oid so'nggi ma'lumotlar bilan tanishing."
        crumbs={[{ label: "Yangiliklar" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <NewsListClient />
        </Container>
      </section>
    </>
  );
}
