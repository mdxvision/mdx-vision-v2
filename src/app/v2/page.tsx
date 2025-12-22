import HeroFuturistic from "@/components/futuristic/HeroFuturistic";
import VideoShowcase from "@/components/futuristic/VideoShowcase";
import FeaturesFuturistic from "@/components/futuristic/FeaturesFuturistic";
import HardwarePartners from "@/components/futuristic/HardwarePartners";
import TrustSection from "@/components/futuristic/TrustSection";
import CTASection from "@/components/futuristic/CTASection";

export default function FuturisticHome() {
  return (
    <>
      <HeroFuturistic />
      <VideoShowcase />
      <FeaturesFuturistic />
      <HardwarePartners />
      <TrustSection />
      <CTASection />
    </>
  );
}
