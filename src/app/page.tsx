// File: app/page.tsx

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Grain from "@/components/Grain";
import BrandStrip from "@/components/BrandStrip"; 
import AboutSection from "@/components/AboutSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://twostack.lk",
  },
};

/* ------------------------------------------------------------------ */
/*  FAQPage JSON-LD — generated from the shared faq-data.ts           */
/* ------------------------------------------------------------------ */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Grain />
      <main className="relative min-h-screen bg-[#F2F0EB]">
        <Nav />
        <Hero />
        <BrandStrip />
        <AboutSection /> 
        <ServicesMarquee />
        
        {/* What You Get Section */}
        <section id="what-you-get">
          <WhatYouGetSection />
        </section>
        
        <FAQSection />
        
        {/* Process Section */}
        <section id="process">
          <ProcessSection />
        </section>
        
        {/* Contact/CTA Section */}
        <section id="contact">
          <CTASection />
        </section>
        
        <Footer />
      </main>

      {/* FAQPage structured data — mirrors on-page FAQ content exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
