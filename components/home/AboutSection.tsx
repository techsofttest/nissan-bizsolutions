import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Headline Column */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left">
              <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
                ABOUT OUR FIRM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-[#101820] leading-snug mt-2">
                A professional partner for your entire business journey.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-4 text-base text-[#43515A] leading-relaxed pt-2">
                <p>
                  Nissan Business Solutions Private Limited is a professional business consultancy firm based in Kottayam, Kerala established in the year 1990. We offer state of the art solution to plan, establish and seamlessly run any business or industrial firm encompassing every feasible customer requirement. We associate with best in class professionals in every business aspect we deal with, which enables us to comprehensively cater to any business case ensuring maximu customer satisfaction. Our clients embraces us for the extreme commitment to keep the timelines and the relentless support we extend. Today we have grown with 500+ clients within India and overseas
                </p>
              </div>

              <div className="pt-4">
                <Button
                  href="#why-us"
                  variant="tertiary"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                >
                  Know about us
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image Box */}
          <div className="lg:col-span-6 h-full flex">
            <ScrollReveal direction="right" delay={200} className="w-full">
              <div className="relative w-full h-[400px] sm:h-[620px] rounded-sm overflow-hidden group">
                <img
                  src="/about/about.png"
                  alt="Nissan Business Solutions Team Consulting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Bottom Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
                  <h3 className="text-lg font-semibold text-white tracking-tight">Delivering proactive, swift, and effective business consultancy across India and overseas.</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
