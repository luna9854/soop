import { Header } from "@/components/layout/Header";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { SitePlanSection } from "@/components/sections/SitePlanSection";
import { FloorPlanSection } from "@/components/sections/FloorPlanSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <LocationSection />
        <RegistrationSection />
        <SitePlanSection />
        <FloorPlanSection />
        <GallerySection />
        <FooterSection />
      </main>
      <FloatingCTA />
    </>
  );
}
