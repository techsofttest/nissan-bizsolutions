import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustMarquee() {
  const logoList = [
    "1. lulu 1.png",
    "2. English Logo Eastern 1.png",
    "3. orkla_india_logo 1.png",
    "4. Mather 1.png",
    "5. Mohanlal 1.png",
    "6. Mayil Logo 1.png",
    "7. Parvin 1.png",
    "8. Moolans 1.png",
    "9. ZIQITZA - LOGO 1.png",
    "10. ANNS 1.png",
    "11. iD fresh logo-02 1.png",
    "12. HOME BASICS 1.png",
    "13. VISESH 1.png",
    "14. W ZWEE 1.png",
    "15. WEXCO 1.png",
    "16. NANMA MALL - 16.0 LOGO 8X8 1.png",
    "17. Varkeys Logo JPEG (1) 1.png",
    "18. P And N 1.png",
    "19. creative minds 1.png",
    "20. Kana Plus Logo 1.png",
    "21. jaya coffee 1.png",
    "22. NISHA UNIFORM 1.png",
    "23. V Gold kathukuthu kalyanam logo -final 1.png",
    "24. NATUREPURE 1.png",
    "25. Indian chamber of .commerce 1.png",
    "26. abhimaan 1.png",
    "28. LE BRIQUE LOGO 1.png",
    "29. King Rice 1.png",
    "30. logo (2) Fabtech 1.png",
    "31. Logo- Melwa 1.png",
    "32. chavara 27. matrimony 1.png",
    "33. Edanad Industrial Estate Logo 1.png",
    "34. Essenli Logo Final 1.png",
    "35. MUrgency Full Logo Unit without Tagline High Resolution 1.png",
    "36. Showcasing keralam- Logo Final 1.png",
    "37. Sports Inc Logo Final 1.png",
    "38. Yavi Logo Final 1.png",
    "39. Kerala Premier league 1.png",
    "40. KETTLE TEA LOUNGE- LOGO 1.png",
    "41. Veejay Footwear - Logo - English (1) 1.png",
    "42. Zivanza LOGO (8x8 cm) 1.png",
    "43. MMC IVF LOGO-01 (8x8 cm) 1.png",
    "44. Tolido 1.png",
    "45. Zafaari New logo (8x8 cm) 1.png",
    "46. ZALARA LOGO 1.png",
    "47. ZtartUp.com Logo (8x8 cm) 1.png",
    "48. MIRTA 1.png",
    "49.Updated Logo Airport Assist- (8x8 cm) 1.png",
    "50.Suntree-horizontal-black logo (8x8 cm) 1.png",
    "51. EXCEL DENTZ 1.png",
    "52. Famwel_Identity Final-English 1.png",
    "53. CHRISTOTHERAPY LOGO 1.png",
    "54. ABS logo_final 1.png",
    "55. CORTIGIANI LOGO 1.png",
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
          {[...logoList, ...logoList].map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 px-4 group"
            >
              <img
                src={`/clt/${encodeURIComponent(logo)}`}
                alt="Client Partner Logo"
                className="h-18 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
