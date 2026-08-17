"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const companies = [
  { id: 1, name: "Faux Fur Boa", logo: "/images/brand1.png" },
  { id: 2, name: "ISports Cricket", logo: "/images/brand2.png" },
  { id: 3, name: "The Great Outdoors", logo: "/images/brand3.png" },
  { id: 4, name: "AmazonShopLK", logo: "/images/brand4.png" },
];

export default function HeroNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const whatsappLink =
    "https://wa.me/94767732288?text=Hi%20TwoStack%2C%20I'd%20like%20to%20start%20building%20my%20project.";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 pt-28 sm:pt-24 md:pt-28 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeUp(0.2)}
            className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="flex -space-x-2">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-black overflow-hidden relative bg-white flex items-center justify-center"
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={`${company.name} client logo`}
                      fill
                      sizes="36px"
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
            <span className="font-inter text-white/30 text-[10px] sm:text-xs tracking-wide uppercase">
              Enterprise Software Studio Sri Lanka
            </span>
          </motion.div>

          {/* Optimized, Concise SEO H1 */}
          <motion.h1
            variants={fadeUp(0.35)}
            className="mt-0 w-full font-satoshi font-semibold text-white leading-[1.1] text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]"
          >
            AI-Powered Web, Mobile & Ecommerce Development in Sri Lanka.
          </motion.h1>

          {/* Shortened, authoritative SEO paragraph */}
          <motion.p
            variants={fadeUp(0.5)}
            className="mt-6 font-inter text-white/50 leading-relaxed max-w-4xl text-sm sm:text-base md:text-lg"
          >
            TwoStack engineers custom mobile applications, high-performance web
            architectures, and
            <br className="hidden md:block" />
            intelligent e-commerce platforms. We build secure, scalable digital
            infrastructure
            <br className="hidden md:block" />
            tailored for enterprise growth.
          </motion.p>

          <motion.div
            variants={fadeUp(0.7)}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8"
          >
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
              EXPLORE SERVICES
            </Link>
          </motion.div>
        </motion.div>
      </div>

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
