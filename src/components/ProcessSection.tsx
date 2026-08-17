"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    meta: "Phase 1: Systems Audit",
    title: "Infrastructure Mapping",
    description:
      "We dissect your technical processes—analyzing database friction, tracking API drops, and isolating routine overhead operations that waste engineering resources.",
  },
  {
    number: "02",
    meta: "Phase 2: Custom Engineering",
    title: "Production Stack Build",
    description:
      "We architect your digital platform, custom Next.js web application engines, API nodes, and localized workflow networks utilizing precise serverless design architectures.",
  },
  {
    number: "03",
    meta: "Phase 3: Lifecycle Management",
    title: "Deployment & Optimization",
    description:
      "We launch your environment under structural safety controls. We constantly execute performance audits, refine data loops, and coordinate continuous integration updates.",
  },
];

export default function ProcessSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.35"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="w-full bg-[#fdfdfe] border-t border-[#0a0a0a]/10 py-24 lg:py-32 px-6 lg:px-[35px]">
      <div className="mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2
            className="font-satoshi font-bold text-[#0a0a0a] leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Engineering Timeline & Execution Pipeline
          </h2>
          <p className="mt-4 font-inter text-[#0a0a0a]/50 text-base lg:text-lg">
            Deterministic execution phases. Transparent milestones. Highly
            available architecture delivery.
          </p>
        </div>

        <div ref={railRef} className="relative pl-6 lg:pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#0a0a0a]/10" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-px bg-[#0a0a0a]"
          />

          <div className="flex flex-col">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={
                  index === 0
                    ? "pb-14 lg:pb-20"
                    : index === STEPS.length - 1
                      ? "pt-14 lg:pt-20"
                      : "py-14 lg:py-20"
                }
              >
                <div className="flex items-center gap-2 font-inter text-[13px]">
                  <span className="text-[#0a0a0a] font-medium">
                    {step.number}
                  </span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
