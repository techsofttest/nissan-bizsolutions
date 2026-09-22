import React from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesSection() {
  const servicesList = [
    {
      title: "Accounting, Taxation & Business Financial Services",
      description: "Comprehensive financial accounting, audit, tax returns, and software solutions for your enterprise.",
      items: [
        "Preparing financial accounts, periodical returns, Internal auditing and Finalization of accounts",
        "GST, KML, KGST & CST registrations, APPEAL, Revision etc.",
        "Training Programs: Practical Training in Accounting (Manual & Computerized), Online EDP training, Sales Executives training",
        "PAN and TAN applications",
        "Tally Software Services, Customizations, Upgrade etc."
      ],
      image: "/service/Accounting & Financial Services.png"
    },
    {
      title: "Business Registrations, Licences & Statutory Compliance",
      description: "End-to-end statutory registrations, government departmental approvals, and corporate compliance.",
      items: [
        "Registration of Partnership firms, Reconstitution, Dissolution etc",
        "Registration of LLP, Private Limited, Public Limited companies, OPC, Societies, Trusts etc.",
        "Udyam registration",
        "NOC from various Departments/Boards like Pollution Control Board, Factories and Boilers, Fire Force, DMO, Labour Department etc.",
        "Licenses from Local Bodies",
        "RERA Registration",
        "KSWIFT Certification",
        "DARPAN Registration",
        "Drug License",
        "Explosive License",
        "FSSAI License, Registrations, Amendments and Renewals",
        "I E Code Certification",
        "Halal Certification",
        "NCLT Proceedings, Take Over and Merger, Amalgamation, Documentation"
      ],
      image: "/service/Business Registration.png"
    },
    {
      title: "Intellectual Property, Quality & Specialized Registrations",
      description: "Protecting brand assets, quality certifications, and commodity board registrations.",
      items: [
        "Trademark Registration (India and Abroad), Trademark status checking, Opposition, Rectification, Legal Notices and Replies.",
        "Patent Registration, Copyright certification",
        "Quality Certification for products from Bureau of Indian Standards and for Firms ISO certifications",
        "Registration with commodity boards, Export promotion council etc.",
        "APEDA Registration",
        "MPEDA Registration",
        "Mining and Geology"
      ],
      image: "/service/Intellectual Property.png"
    },
    {
      title: "Business Consultancy, Projects, Licensing & Growth Support",
      description: "Project reporting, management consultancy, market studies, and business rehabilitation.",
      items: [
        "Preparation of Feasible Project Reports for Business, Industrial Units and Service enterprises",
        "Preparation of loan application and liaising with Financial Institutions",
        "Preparing plan and estimate of industrial and commercial buildings",
        "Systematize Business with relevant background study and market survey",
        "Management and legal consultancy",
        "Assistance in Marketing and Sales Promotion activities",
        "Market survey and Feasibility studies",
        "Entrepreneur Support schemes",
        "Sick Units Rehabilitation Programme"
      ],
      image: "/service/Licensing & Compliance.png"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F3FBFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-28">
            <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
              OUR CORE SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-[#101820]">
              Solutions built around your business needs.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div
                className="relative bg-white rounded-sm overflow-hidden group transition-all duration-500 hover:bg-[#0F2628] h-[520px] shadow-sm hover:shadow-xl"
              >
                {/* Image Container: Pushed UPWARD off screen on hover */}
                <div className="absolute top-0 inset-x-0 h-[260px] w-full overflow-hidden transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Bottom Content Panel: Slides UPWARD to take over the entire card area on hover */}
                <div className="absolute bottom-0 inset-x-0 h-[260px] group-hover:h-full p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-in-out bg-white group-hover:bg-[#0F2628] z-10 overflow-hidden">
                  <div className="space-y-3 flex-1 flex flex-col min-h-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#101820] group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#43515A] group-hover:text-[#E6F3F4]/90 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Sub-categories list: revealed as the panel expands upward */}
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[280px] transition-all duration-500 ease-in-out overflow-y-auto pt-0 group-hover:pt-4 border-t border-transparent group-hover:border-[#18393D] pr-2 custom-scrollbar">
                      <ul className="space-y-2.5">
                        {service.items.map((item, i) => (
                          <li key={i} className="text-[13.5px] text-[#E6F3F4] flex items-start gap-2.5 leading-snug">
                            <svg className="w-4 h-4 text-[#5FAAAD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 group-hover:border-[#18393D] transition-colors duration-300 shrink-0">
                    <Button
                      href="#contact"
                      variant="tertiary"
                      size="sm"
                      className="group-hover:text-white"
                      icon={
                        <svg className="w-4 h-4 text-[#5FAAAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      }
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
