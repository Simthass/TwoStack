// File: src/components/ProcessSection.tsx

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    meta: "week 1",
    title: "We look",
    description:
      "We spend a few days inside your business — the inbox, the WhatsApp, the spreadsheets — and find what's actually eating your time."
  },
  {
    number: "02",
    meta: "weeks 2–4",
    title: "We build",
    description:
      "Your website, your AI assistant, your automation. Built around how you already work, connected to the tools you already use."
  },
  {
    number: "03",
    meta: "every month after",
    title: "We run it",
    description:
      "We watch it, fix it, and improve it. One bill, one point of contact, and a real person on WhatsApp when something needs changing."
  }
];

export default function ProcessSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.35"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="w-full bg-[#fdfdfe] border-t border-[#0a0a0a]/10 py-24 lg:py-32 px-6 lg:px-[35px]">
      <div className="mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Left — sticky header */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="font-satoshi font-bold text-[#0a0a0a] leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            How it works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="mt-4 font-inter text-[#0a0a0a]/50 text-base lg:text-lg"
          >
            Fixed scope, fixed price. Live in about a month.
          </motion.p>
        </div>

        {/* Right — steps with scroll-tied progress rail */}
        <div ref={railRef} className="relative pl-6 lg:pl-8">

          {/* Track — full height, faint */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#0a0a0a]/10" />

          {/* Progress line — grows top to bottom with scroll */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-px bg-[#0a0a0a]"
          />

          <div className="flex flex-col">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as const }}
                className={
                  index === 0
                    ? "pb-14 lg:pb-20"
                    : index === STEPS.length - 1
                    ? "pt-14 lg:pt-20"
                    : "py-14 lg:py-20"
                }
              >
                <div className="flex items-center gap-2 font-inter text-[13px]">
                  <span className="text-[#0a0a0a] font-medium">{step.number}</span>
                  <span className="text-[#0a0a0a]/30">·</span>
                  <span className="text-[#0a0a0a]/40">{step.meta}</span>
                </div>

                <h3
                  className="mt-3 font-satoshi font-bold text-[#0a0a0a] leading-[1.1]"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {step.title}
                </h3>

                <p className="mt-4 font-inter text-[#0a0a0a]/60 text-[15px] lg:text-base leading-relaxed max-w-md">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
