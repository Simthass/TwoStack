// File: src/components/HeroNew.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import PortfolioMarquee from "./PortfolioMarquee";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// Company logos for the trusted by section
const companies = [
  { id: 1, name: "Company 1", logo: "/images/brand1.png" },
  { id: 2, name: "Company 2", logo: "/images/brand2.png" },
  { id: 3, name: "Company 3", logo: "/images/brand3.png" },
  { id: 4, name: "Company 4", logo: "/images/brand4.png" },
];

export default function HeroNew() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = (windowHeight - rect.top) / (rect.height + windowHeight);
          setScrollProgress(Math.min(1, Math.max(0, scrolled)));
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp link
  const whatsappLink = "https://wa.me/94767732288?text=Hi%20Two%20Stack%2C%20I'd%20like%20to%20start%20building%20my%20project.";

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
    >

      {/* Main Hero Content - Center Aligned */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 pt-28 sm:pt-24 md:pt-28 pb-8">
        
        {/* Single Column - Center Aligned */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
        >

          {/* Trust Badge - With Company Images */}
          <motion.div variants={fadeUp(0.2)} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex -space-x-2">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-black overflow-hidden relative bg-white flex items-center justify-center"
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  ) : (
                    <span className="text-[10px] sm:text-xs text-black/40 font-inter">
                      {String.fromCharCode(64 + company.id)}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <span className="font-inter text-white/30 text-[10px] sm:text-xs tracking-wide">
              TRUSTED BY 10+ COMPANIES
            </span>
          </motion.div>

          {/* Main Headline - Center Aligned */}
          <motion.h1 variants={fadeUp(0.35)} className="mt-0 w-full">
            <div className="font-satoshi font-semibold text-white leading-[1.1]">
              <div className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[70px]">
                Intelligence, automation, and
              </div>
              <div className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[70px] mt-1 sm:mt-0">
                presence — built as one system.
              </div>
            </div>
          </motion.h1>

          {/* Body Copy - Center Aligned */}
          <motion.p variants={fadeUp(0.5)} className="mt-4 sm:mt-6 font-inter text-white/50 leading-relaxed max-w-2xl text-sm sm:text-base">
            Most agencies hand you a website and call it done. We build the layer that predicts what's coming, the layer that runs your operations without you, and the layer that shows up professionally everywhere your customers look — all on one foundation.
          </motion.p>

          {/* CTA Buttons - Center Aligned */}
          <motion.div variants={fadeUp(0.7)} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-white text-black font-inter font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#25D366] hover:text-white"
            >
              START BUILDING
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white font-inter font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm hover:border-white/50 transition-all duration-300"
            >
              VIEW SERVICES
            </Link>
          </motion.div>

        </motion.div>

      </div>

      {/* Portfolio Marquee - Bottom of Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
        className="relative z-10 pb-8 sm:pb-10 md:pb-12"
      >
        <PortfolioMarquee />
      </motion.div>

    </section>
  );
}
