// File: app/page.tsx

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
    </>
  );
}
