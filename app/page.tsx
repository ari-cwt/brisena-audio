import ContactUs from "@/components/ContactUs";
import ProvenExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import OurServices from "@/components/OurServices";
import PortfolioSection from "@/components/PortofolioSection";
// import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImpactSection />
      <OurServices />
      <ProvenExperienceSection />
      <PortfolioSection />
      {/* <TrustedBy /> */}
      <ContactUs />
    </div>
  );
}
