import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ApproachSection from "@/components/home/ApproachSection";
import TrustMarquee from "@/components/home/TrustMarquee";
import VisionSection from "@/components/home/VisionSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F3FBFB] text-[#101820] font-sans antialiased selection:bg-[#0A6F8F] selection:text-white overflow-x-hidden">
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <AboutSection />
        <WhyUsSection />
        <ApproachSection />
        <TrustMarquee />
        <VisionSection />
        <ContactSection />
      </main>
    </div>
  );
}
