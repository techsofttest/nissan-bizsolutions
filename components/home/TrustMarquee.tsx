import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustMarquee() {
  const logoList = [
    "clt1.png",
    "clt9.png",
    "clt3.png",
    "clt4.png",
    "clt5.png",
    "clt6.png",
    "clt7.png",
    "clt8.png",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <ScrollReveal direction="up">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4 mb-12">
          <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
            TRUSTED PARTNER
          </span>
          <h2 className="text-2xl sm:text-5xl font-semibold tracking-tight text-[#101820]">
            Trusted by 500+ businesses <br />across diverse sectors.
          </h2>
          <p className="text-[15px] text-[#43515A]">
            Serving enterprises within India and overseas with unwavering professional standard.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative w-full overflow-hidden mt-24">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">
          {[...logoList, ...logoList, ...logoList].map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 px-4 group"
            >
              <img
                src={`/clients/${logo}`}
                alt="Client Partner Logo"
                className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
