import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Faoliyat yo'nalishlari"
            title="Institut qanday sohalarda tadqiqot olib boradi"
            className="max-w-xl"
          />
          <Button href="/faoliyat" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
            Barcha yo&apos;nalishlar
          </Button>
        </div>
        <ServicesGrid compact />
      </Container>
    </section>
  );
}
