import HeroFuturistic from "@/components/futuristic/HeroFuturistic";
import FeaturesFuturistic from "@/components/futuristic/FeaturesFuturistic";
import HardwarePartners from "@/components/futuristic/HardwarePartners";
import TrustSection from "@/components/futuristic/TrustSection";
import AboutSection from "@/components/futuristic/AboutSection";
import CTASection from "@/components/futuristic/CTASection";

export default function FuturisticHome() {
  return (
    <>
      <HeroFuturistic />
      <FeaturesFuturistic />
      <HardwarePartners />
      <TrustSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
