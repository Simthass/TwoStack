"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function AboutIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white pt-16 md:pt-24 lg:pt-32 pb-0 px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <motion.h2
          variants={fadeUpVariants}
          className="mt-6 font-satoshi font-bold text-[#0a0a0a] leading-[1.1]"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Reliable websites, secure mobile apps, and local payment setups, built
          for Sri Lankan businesses.
        </motion.h2>

        <motion.div
          variants={fadeUpVariants}
          className="mt-8 w-12 h-px"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        />

        <motion.p
          variants={fadeUpVariants}
          className="mt-8 mb-8 font-inter text-black/60 text-base md:text-lg leading-relaxed max-w-3xl"
        >
          TwoStack is a software development Agency based in Colombo, Sri Lanka.
          We build websites, apps and payment systems that connect smoothly with
          each other, so your business runs faster with less manual work.
        </motion.p>
      </motion.div>
    </section>
  );
}
