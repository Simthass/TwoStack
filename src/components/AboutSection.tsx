// File: src/components/AboutIntroSection.tsx

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
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
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
        className="max-w-4xl mx-auto flex flex-col items-center text-center"
      >

        {/* Headline */}
        <motion.h2
          variants={fadeUpVariants}
          className="mt-6 font-satoshi font-bold text-[#0a0a0a] leading-[1.1]"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em"
          }}
        >
          Most agencies sell you a website. 
          <br className="hidden md:block" />
          {" "}We sell you one less thing to manage and build a proper system.
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8 w-12 h-px"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        />

        {/* Subtext */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-8 font-inter text-black/50 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Two Stack is based in Sri Lanka. We build your website, your backend — and
          the automation layer that runs your orders, alerts, and follow-ups without you lifting
          a finger. One team, one system, and we're a message away when something needs changing.
        </motion.p>
      </motion.div>
    </section>
  );
}
