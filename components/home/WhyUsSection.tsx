"use client";

import React, { useState, useEffect, useRef } from "react";

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whyChooseUsFeatures = [
    {
      title: "In-house Chartered Accountant",
      description: "Direct access to senior Chartered Accountant leadership within the organization ensuring strict financial integrity and tax strategy.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "In-house Company Secretary",
      description: "Dedicated secretarial guidance to maintain seamless board filings, legal documentation, and company law compliance.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "In-house Advocate",
      description: "In-house legal counsel to draft agreements, resolve commercial issues, and safeguard corporate interests.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 6l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6z" />
        </svg>
      )
    },
    {
      title: "Trademark Attorney Network",
      description: "Specialized attorney tie-ups to manage trademark filings, objection hearings, and intellectual property litigation.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F3FBFB] px-6 md:px-12 overflow-hidden">
      <div
        ref={sectionRef}
        className={`relative mx-auto text-white overflow-hidden transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) ${isVisible
          ? "w-full max-w-7xl rounded-md md:rounded-md py-20 px-6 md:px-12 scale-100 opacity-100"
          : "w-[85%] max-w-3xl rounded-md py-12 px-6 scale-90 opacity-50"
          }`}
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home-hero/b2.png"
            alt="Why Choose Nissan Business Solutions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030B0B] via-[#0F2628]/90 to-[#0F2628]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-28">
            <span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">
              WHY NISSAN BUSINESS SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Professional expertise, brought together under one roof.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsFeatures.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                <div className="flex items-center justify-center text-white mb-3 [&>svg]:w-14 [&>svg]:h-14 [&>svg]:text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:[&>svg]:text-[#5FAAAD]">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight pt-1 group-hover:text-[#E6F3F4] transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-[14px] text-[#E6F3F4]/90 leading-relaxed pt-1">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
