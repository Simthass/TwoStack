// File: src/components/services/Process.tsx

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Audit",
    body: "We sit inside how your business actually runs for a week — where enquiries go, what gets typed twice, what a manager checks every morning by hand.",
  },
  {
    n: "02",
    title: "Build",
    body: "We build the three layers that matter for your business first, not all of them for the sake of it. Most builds run 4–6 weeks from kickoff.",
  },
  {
    n: "03",
    title: "Launch",
    body: "A person reviews every automated reply and every report for the first two weeks. Nothing goes fully unsupervised on day one.",
  },
  {
    n: "04",
    title: "Improve",
    body: "Once it's stable, we keep watching it monthly — fixing what's off, and telling you honestly what's worth building next.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: progressRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      id="how" 
      className="w-full bg-[#fdfdfe] border-t border-[#0a0a0a]/10 py-20 lg:py-28 px-6 lg:px-[35px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <h2 className="font-satoshi font-bold text-[#0a0a0a] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            One process, whichever layers you need.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative pl-8 max-w-2xl mx-auto"
          ref={progressRef}
        >
          {/* Track — full height, faint */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#0a0a0a]/10" />
          
          {/* Progress line — grows top to bottom with scroll */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[#0a0a0a]"
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUpVariants}
                className="relative"
              >
                <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-[#fdfdfe] ring-1 ring-[#0a0a0a]/10 z-10" />
                <div className="font-inter text-xs text-[#0a0a0a]/40 mb-1">
                  {step.n}
                </div>
                <h3 className="font-satoshi font-semibold text-[#0a0a0a] text-xl mb-2">
                  {step.title}
                </h3>
                <p className="font-inter text-[15px] leading-relaxed text-[#0a0a0a]/60 max-w-[56ch]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
