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
          className="flex flex-col items-center gap-4"
        >
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