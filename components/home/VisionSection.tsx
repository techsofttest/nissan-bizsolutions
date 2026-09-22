import React from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VisionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F2628] text-white overflow-hidden min-h-[550px] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home-hero/b3.png"
          alt="Corporate Vision & Mission"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/65" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full space-y-12">
        {/* Section Headline */}
        <ScrollReveal direction="up">
          <div className="text-left max-w-2xl space-y-3">
            <span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">
              OUR VISION & MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Building towards a broader professional-services ecosystem.
            </h2>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
          {/* Vision */}
          <ScrollReveal direction="up" delay={150}>
            <div className="space-y-3 bg-[#0F2628] p-6 md:p-8 rounded-sm h-full">
              <h3 className="text-xl sm:text-4xl font-semibold text-white">
                Our Vision
              </h3>
              <p className="text-base text-[#E6F3F4]/90 leading-relaxed">
                Our long term vision is to converge our operations into a Law House Model which is more common or known version of our business in major countries. We are looking forward to incrementally extend our operations to other major cities in India, thereby creating opportunity for entrepreneurs to leverage from the diverse services we engage in. We also have a thought process to venture into global and overseas services.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal direction="up" delay={300}>
            <div className="space-y-3 bg-[#0F2628] p-6 md:p-8 rounded-sm h-full">
              <h3 className="text-xl sm:text-4xl font-semibold text-white">
                Our Mission
              </h3>
              <p className="text-base text-[#E6F3F4]/90 leading-relaxed">
                Our primary objective is to offer one stop solution to any matters related to business and industry. We collaborate with best in class professionals in every business aspect we deal with, which enables us to comprehensively cater to any complex scenario. Proactiveness, Speed and Effectiveness are our focus. Today we have grown with 500+ clients within India and overseas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
