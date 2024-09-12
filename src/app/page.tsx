import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Upcoming from "@/components/Upcoming";

export default function Home() {
  return (
    <>
      {/* <h1 className="text-center min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">HELLLO</h1> */}
      <HeroSection />
      <FeatureSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <Upcoming />
    </>
  );
}
