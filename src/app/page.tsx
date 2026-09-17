import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesSection from "@/components/home/ServicesSection";
import NewsSection from "@/components/home/NewsSection";
import LeadershipMessage from "@/components/home/LeadershipMessage";
import PublicationsSection from "@/components/home/PublicationsSection";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSnippet />
      <ServicesSection />
      <NewsSection />
      <LeadershipMessage />
      <PublicationsSection />
      <PartnersMarquee />
      <CtaSection />
    </>
  );
}
