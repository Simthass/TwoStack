// File: src/components/services/CtaFooter.tsx

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CtaFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  // Team member images - replace with your actual image paths
  const teamMembers = [
    { id: 1, name: "Simthass", image: "/images/team-1.jpg" },
    { id: 2, name: "Muaz", image: "/images/team-2.jpg" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Spacer above the section — same color as the global background */}
      <div className="w-full h-16 md:h-28 bg-[#fdfdfe]" />

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#fdfdfe] pt-40 pb-16 md:pt-56 md:pb-20 px-6 lg:px-[35px]"
      >
        {/* Semi-circle background shape */}
        <div
          className="absolute inset-0 bg-[#0a0a0a] overflow-hidden [border-radius:50%_50%_0_0/100px_100px_0_0] md:[border-radius:50%_50%_0_0/260px_260px_0_0]"
        >
          {/* Subtle grain texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vwAAACCCwTTAAAABnRSTlMAMwCFP1T6tV1zAAAAPklEQVQ4y2NgGAWjYBSMglEwCgYZmBgcHRyZGBicmNycGZgYXN0cuRkYHNxB2omJgcnDEQ4cGBgYXBjhNqMAlacK4RttNHEAAAAASUVORK5CYII=")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '64px 64px',
              }}
            />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-[1000px] mx-auto text-center"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block font-inter text-[13px] tracking-wider text-white/40"
          >
            Let's work together
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-5 font-satoshi font-bold text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
          >
            Let's see what your business
            <br />
            <span className="text-[#ffffff]">could actually run on.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 font-inter text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
          >
            30-minute call. We look at where your time actually goes — enquiries,
            orders, reports — and tell you honestly which layers would earn
            their keep first.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/94767732288"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-[#25D366] text-white font-inter font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-[#1DA851] hover:shadow-lg"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12C2 13.98 2.56 15.83 3.5 17.4L2 22L6.7 20.56C8.23 21.48 10 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" 
                  fill="white"
                />
                <path 
                  d="M16.95 15.19C16.57 15.57 15.98 15.74 15.35 15.7C14.9 15.66 14.33 15.51 13.48 15.16C12.6 14.79 12.05 14.2 11.65 13.79C11.25 13.38 10.85 12.92 10.55 12.39C10.25 11.86 10.05 11.29 9.98 10.69C9.91 10.09 10 9.49 10.21 8.94C10.42 8.39 10.79 7.94 11.23 7.58C11.67 7.22 12.12 7 12.58 7C12.91 7 13.2 7.15 13.42 7.43C13.64 7.71 13.73 8.04 13.73 8.34C13.73 8.64 13.64 9.04 13.55 9.34L13.28 10.12C13.19 10.42 13.1 10.72 13.09 11.02C13.08 11.32 13.18 11.6 13.36 11.82C13.54 12.04 13.76 12.2 14.02 12.28C14.28 12.36 14.55 12.36 14.81 12.28C15.07 12.2 15.29 12.04 15.47 11.82C15.65 11.6 15.75 11.32 15.76 11.02C15.77 10.72 15.68 10.42 15.59 10.12L15.32 9.34C15.23 9.04 15.14 8.74 15.13 8.44C15.12 8.14 15.2 7.84 15.36 7.59C15.52 7.34 15.73 7.14 16 7C16.27 6.86 16.56 6.77 16.85 6.77C17.24 6.77 17.61 6.91 17.91 7.17C18.21 7.43 18.43 7.78 18.54 8.18C18.65 8.58 18.66 8.99 18.56 9.39C18.46 9.79 18.26 10.14 17.96 10.4C17.66 10.66 17.31 10.84 16.95 10.93L16.95 15.19Z" 
                  fill="white"
                />
              </svg>
              Message on WhatsApp
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            {/* Email Button */}
            <motion.a
              href="mailto:twostacklk@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-white text-[#0a0a0a] font-inter font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M22 6L12 13L2 6" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Email us
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mt-14 flex items-center justify-center gap-6 flex-wrap"
          >
            <div className="flex -space-x-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden relative"
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/50 text-xs font-inter">
                      {String.fromCharCode(64 + member.id)}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="font-inter text-white/40 text-xs">
              Our team will get back to you quick!
            </p>
          </motion.div>

          {/* Take me back to the top button */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-all duration-300 font-inter text-sm"
            >
              <span className="group-hover:-translate-y-1 transition-transform duration-300">
                ↑
              </span>
              Take me back to the top
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
