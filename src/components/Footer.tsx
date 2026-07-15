// File: src/components/Footer.tsx

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // ✅ FIXED: Added 'as const' to ease array
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={sectionRef} className="relative w-full bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-8 md:py-10">
        
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-6"
        >
          {/* NAP (Name, Address, Phone) — crawlable text for SEO and GEO */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
            <span className="font-inter text-white/30 text-xs">
              Two Stack — AI-Native Development Studio
            </span>
            <span className="hidden sm:inline w-px h-3 bg-white/10" />
            <span className="font-inter text-white/30 text-xs">
              Colombo, Sri Lanka
            </span>
            <span className="hidden sm:inline w-px h-3 bg-white/10" />
            <a
              href="mailto:twostacklk@gmail.com"
              className="font-inter text-white/30 text-xs hover:text-white/50 transition-colors"
            >
              twostacklk@gmail.com
            </a>
            <span className="hidden sm:inline w-px h-3 bg-white/10" />
            <a
              href="https://wa.me/94767732288"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-white/30 text-xs hover:text-white/50 transition-colors"
            >
              +94 76 773 2288
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-inter text-white/30 text-sm hover:text-white/60 transition-colors"
          >
            <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            Back to top
          </button>

          {/* Copyright */}
          <p className="font-inter text-white/20 text-xs">
            © {new Date().getFullYear()} Two Stack. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}