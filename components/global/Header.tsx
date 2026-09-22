"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const servicesList = [
  { title: "Business Registration", id: "business-registration" },
  { title: "Tax & Government Registrations", id: "tax-registrations" },
  { title: "Intellectual Property", id: "intellectual-property" },
  { title: "Certifications", id: "certifications" },
  { title: "Accounting & Financial Services", id: "accounting-financial" },
  { title: "Licensing & Compliance", id: "licensing-compliance" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md py-4 text-[#101820] border-b border-[#D9E0E3] shadow-xs"
        : "bg-gradient-to-b from-[#0F2628]/80 via-[#0F2628]/40 to-transparent py-6 text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src="/logo/logo.png"
            alt="Nissan Business Solutions Logo"
            width={140}
            height={36}
            style={{ width: "auto" }}
            className={`h-10 md:h-10 w-auto object-contain transition-all ${scrolled ? "brightness-100 invert-0" : "brightness-0 invert"
              }`}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex items-center space-x-8 text-[15px] font-medium transition-colors ${scrolled ? "text-[#43515A]" : "text-[#E6F3F4]"
            }`}
        >
          <a
            href="#"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-white"
              }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-white"
              }`}
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div className="relative group py-1">
            <a
              href="#services"
              className={`flex items-center gap-1 transition-colors ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-white"
                }`}
            >
              <span>Services</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-70 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-72 z-50">
              <div className="bg-white rounded-xl shadow-xl border border-[#D9E0E3] p-2 overflow-hidden text-[#101820]">
                {servicesList.map((service, index) => (
                  <a
                    key={index}
                    href="#services"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors hover:bg-[#E6F3F4]/60 hover:text-[#0F2628] group/item"
                  >
                    <span>{service.title}</span>
                    <svg
                      className="w-4 h-4 text-[#5FAAAD] opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#why-us"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-white"
              }`}
          >
            Why Choose Us
          </a>
          <a
            href="#ecosystem"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-white"
              }`}
          >
            Resources
          </a>
          <a
            href="#contact"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-white"
              }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button href="#contact" variant="primary" size="sm">
            Get a Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 focus:outline-none transition-colors ${scrolled ? "text-[#101820]" : "text-white"
            }`}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 flex flex-col space-y-3 animate-in slide-in-from-top duration-200 ${scrolled
            ? "bg-white text-[#101820] border-[#D9E0E3]"
            : "bg-[#0F2628] text-white border-[#18393D]"
            }`}
        >
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            About Us
          </a>

          {/* Mobile Services Accordion */}
          <div>
            <div className="flex items-center justify-between py-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium hover:text-[#5FAAAD]"
              >
                Services
              </a>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-1 focus:outline-none"
                aria-label="Toggle services list"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="pl-4 pt-1 pb-2 space-y-2 border-l-2 border-[#5FAAAD]/30 ml-1 mt-1">
                {servicesList.map((service, index) => (
                  <a
                    key={index}
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[14px] opacity-85 hover:opacity-100 hover:text-[#5FAAAD] py-1"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Why Choose Us
          </a>
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Resources / Blog
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Contact Us
          </a>
          <div className="pt-2">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

