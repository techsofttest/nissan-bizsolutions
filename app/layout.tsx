import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nissan Business Solutions | Business Consultancy & Professional Services",
  description: "Nissan Business Solutions is a professional business consultancy firm in Kottayam, Kerala, providing business registration, compliance, intellectual property, certification, accounting, licensing and professional training support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F3FBFB] text-[#101820] selection:bg-[#5FAAAD] selection:text-white">
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

