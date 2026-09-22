"use client";

import React from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white text-[#101820] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px]">
        {/* Left Column - Full Bleed Filled Left Side (No margin/padding around left edge) */}
        <div className="relative lg:col-span-6 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/contact/c1.png"
              alt="Get In Touch"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0F2628]/45" />
          </div>

          {/* Top Left Aligned Header Content */}
          <ScrollReveal direction="left" className="relative z-10 max-w-xl w-full">
            <div className="space-y-3">
              <span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Have a business requirement? Let&apos;s discuss.
              </h2>
            </div>
          </ScrollReveal>

          {/* Bottom Left Aligned Description Content */}
          <ScrollReveal direction="up" className="relative z-10 max-w-xl w-full pt-12">
            <p className="text-base text-[#E6F3F4]/90 leading-relaxed font-medium">
              Tell us what you need and explore how Nissan Business Solutions can support your enterprise with business registration, tax compliance, IP protection, quality certifications, or legal advisory.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column - Clean Consultation Form */}
        <div className="lg:col-span-6 bg-white p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
          <ScrollReveal direction="right" delay={150}>
            <div className="max-w-xl w-full">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#101820] mb-2">Schedule a Consultation</h3>
              <p className="text-[14px] text-[#43515A] mb-8">Fill in your details and our expert team will reach out to you shortly.</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-[14px] font-medium text-[#101820] mb-1.5">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#101820] mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="text"
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#101820] mb-1.5">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors">
                    <option>Business Registration</option>
                    <option>Tax & Government Registrations</option>
                    <option>Intellectual Property / Trademark</option>
                    <option>Certifications (ISO/ISI)</option>
                    <option>Accounting & Financial Services</option>
                    <option>Licensing & Compliance</option>
                    <option>Training & EDP Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#101820] mb-1.5">Brief Requirement</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business requirement..."
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  icon={
                    <svg className="w-4 h-4 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  }
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
