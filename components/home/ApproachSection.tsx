import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ApproachSection() {
  const approaches = [
    {
      title: "Professional expertise",
      icon: (
        <svg className="w-6 h-6 text-[#5FAAAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Personalized assistance",
      icon: (
        <svg className="w-6 h-6 text-[#5FAAAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Accuracy",
      icon: (
        <svg className="w-6 h-6 text-[#5FAAAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Timely service",
      icon: (
        <svg className="w-6 h-6 text-[#5FAAAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Client support",
      icon: (
        <svg className="w-6 h-6 text-[#5FAAAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="approach" className="relative bg-white border-b border-[#D9E0E3] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[550px]">
        {/* Left Image - Full Size Bleed */}
        <div className="lg:col-span-6 relative order-2 lg:order-1 min-h-[380px] lg:min-h-[550px]">
          <img
            src="/our-approach/o2.png"
            alt="Our Approach to Business Consulting"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 order-1 lg:order-2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center space-y-6">
          <ScrollReveal direction="right">
            <div className="max-w-xl space-y-6">
              <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101820]">
                Our Approach
              </h2>
              <p className="text-base text-[#43515A] leading-relaxed">
                We provide comprehensive, high-quality business consulting and advisory services designed to empower your business operations with accuracy, speed, and continuous support.
              </p>

              {/* List without boxed design */}
              <ul className="pt-2 space-y-4">
                {approaches.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-2.5 rounded-full bg-[#E6F3F4] text-[#5FAAAD] shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold text-[#101820]">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
