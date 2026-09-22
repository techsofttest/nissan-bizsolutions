import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F2628] text-white pt-16 pb-12 border-t border-[#18393D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#18393D]">
          {/* Col 1 */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <Image
                src="/logo/logo.png"
                alt="Nissan Business Solutions Logo"
                width={180}
                height={48}
                style={{ width: "auto" }}
                className="h-10 md:h-12 object-contain brightness-0 invert"
              />
            </a>
            <p className="text-[14px] text-[#E6F3F4]/80 leading-relaxed max-w-sm">
              Nissan Business Solutions Private Limited is a professional business consultancy firm based in Kottayam, Kerala, established in 1990.
            </p>
            <p className="text-[14px] text-[#E6F3F4]/60">
              Location: Kottayam, Kerala, India
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-semibold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-[14px] text-[#E6F3F4]/80">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-semibold text-white tracking-wider uppercase">Business Services</h4>
            <ul className="space-y-2 text-[14px] text-[#E6F3F4]/80">
              <li><a href="#services" className="hover:text-white transition-colors">Business Registration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tax Registrations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Intellectual Property</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">ISO / ISI Certifications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Accounting & Financials</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Licensing & Compliance</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-semibold text-white tracking-wider uppercase">Ecosystem</h4>
            <ul className="space-y-2 text-[14px] text-[#E6F3F4]/80">
              <li><a href="#ecosystem" className="hover:text-white transition-colors">School of Accounts</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Practical Training</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Placement Assistance</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Online EDP Training</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[14px] text-[#E6F3F4]/60 gap-4">
          <p>© {new Date().getFullYear()} Nissan Business Solutions Pvt Ltd. All rights reserved.</p>
          <p>Professional Business Consultancy • Kottayam, Kerala</p>
        </div>
      </div>
    </footer>
  );
}
