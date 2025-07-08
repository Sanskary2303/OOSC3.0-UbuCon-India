import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventsSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import CtaSection from "@/components/home/CtaSection";
export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SponsorsSection />
      <CtaSection />
    </PageWrapper>
  );
}
