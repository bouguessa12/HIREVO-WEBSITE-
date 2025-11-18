import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SoftwareIntegrations from "@/components/SoftwareIntegrations";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <FeaturesGrid />
      <SoftwareIntegrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
