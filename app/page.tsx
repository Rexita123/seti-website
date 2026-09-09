import Hero from "@/components/home/Hero";
import Company from "@/components/home/Company";
import ServicesSection from "@/components/home/ServicesSection";
import TechSection from "@/components/home/TechSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FinalCta from "@/components/home/FinalCta";

export default function InicioPage() {
  return (
    <>
      <Hero />
      <Company />
      <ServicesSection />
      <TechSection />
      <WhyUsSection />
      <FinalCta />
    </>
  );
}
