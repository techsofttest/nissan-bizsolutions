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
          <div className="text-left max-w-2xl space-y-3 mb-20">
            <span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">
              OUR VISION & MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Building towards a broader professional-services ecosystem.
            </h2>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4 items-start">
          {/* Vision */}
          <ScrollReveal direction="up" delay={150}>
            <div className="relative space-y-3 bg-[#0F2628]/90 backdrop-blur-sm p-6 md:p-8 rounded-sm h-full overflow-hidden group">
              {/* Animated Wave SVG Background */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50 150 C 100 80, 200 220, 450 120"
                    stroke="#5FAAAD"
                    strokeWidth="3"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 180 C 120 240, 250 90, 450 200"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 100 C 150 200, 280 60, 450 160"
                    stroke="#5FAAAD"
                    strokeWidth="1.5"
                    opacity="0.6"
                    className="animate-wave-line"
                  />
                </svg>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl sm:text-4xl font-semibold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-base text-[#E6F3F4] leading-relaxed">
                  Our long term vision is to converge our operations into a Law House Model which is more common or known version of our business in major countries. We are looking forward to incrementally extend our operations to other major cities in India, thereby creating opportunity for entrepreneurs to leverage from the diverse services we engage in. We also have a thought process to venture into global and overseas services.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission (Shifted UPWARD like a step) */}
          <ScrollReveal direction="up" delay={300} className="md:-mt-12 lg:-mt-16 ">
            <div className="relative space-y-3 bg-[#0F2628]/90 backdrop-blur-sm p-6 md:p-8 rounded-sm h-full overflow-hidden group">
              {/* Animated Wave SVG Background */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50 120 C 150 220, 250 80, 450 180"
                    stroke="#5FAAAD"
                    strokeWidth="3"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 200 C 100 90, 280 230, 450 110"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 160 C 120 70, 220 240, 450 130"
                    stroke="#5FAAAD"
                    strokeWidth="1.5"
                    opacity="0.6"
                    className="animate-wave-line"
                  />
                </svg>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl sm:text-4xl font-semibold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-base text-[#E6F3F4] leading-relaxed">
                  Our primary objective is to offer one stop solution to any matters related to business and industry. We collaborate with best in class professionals in every business aspect we deal with, which enables us to comprehensively cater to any complex scenario. Proactiveness, Speed and Effectiveness are our focus. Today we have grown with 500+ clients within India and overseas
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
