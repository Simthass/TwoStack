// File: src/components/services/LiveDemo.tsx

"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

type Step =
  | { type: "in"; text: string }
  | { type: "typing" }
  | { type: "out"; text: string };

const script: Step[] = [
  { type: "in", text: "Hi, do you still have slots open this week?" },
  { type: "typing" },
  {
    type: "out",
    text: "Yes - we've got Thursday 2pm or Friday 10am open. Which works better for you?",
  },
  { type: "in", text: "Friday 10am please" },
  { type: "typing" },
  {
    type: "out",
    text: "Booked for Friday 10am. I've sent a calendar invite and let the team know what you're after - see you then.",
  },
];

const STEP_DELAY = 1600;

export default function LiveDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [visible, setVisible] = useState<Step[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      if (idx < script.length) {
        setVisible((v) => [...v, script[idx]]);
        setIdx((n) => n + 1);
      } else {
        const reset = setTimeout(() => {
          setVisible([]);
          setIdx(0);
        }, 2200);
        return () => clearTimeout(reset);
      }
    }, STEP_DELAY);
    return () => clearTimeout(timer);
  }, [idx, isInView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ffffff] border-t border-[#000000]/10 py-20 lg:py-28 px-6 lg:px-[35px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <h2
            className="font-satoshi font-bold text-[#000000] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            See the automation layer answer a real enquiry.
          </h2>
          <p className="mt-4 font-inter text-[#000000]/60 text-[15px] leading-relaxed max-w-[54ch] mx-auto">
            This runs on loop below. In your build, it's trained on your own
            tone, stock or services, and calendar - with a person approving
            every reply for the first two weeks of any launch.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="max-w-[380px] mx-auto rounded-2xl border border-[#000000]/10 overflow-hidden bg-white shadow-sm"
        >
          <div className="bg-[#000000] px-4 py-3.5 flex items-center gap-3 text-white">
            <div className="w-9 h-9 rounded-full bg-white text-[#000000] flex items-center justify-center text-sm font-satoshi font-semibold">
              TS
            </div>
            <div className="flex-1">
              <div className="text-sm font-satoshi font-medium">
                TwoStack Client
              </div>
              <div className="text-[11px] opacity-80 flex items-center gap-1.5 font-inter">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                online · replies in seconds
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2.5 min-h-[420px] max-h-[420px] overflow-y-auto bg-[#ffffff]">
            {visible.map((step, i) =>
              step.type === "typing" ? (
                <div
                  key={i}
                  className="self-start bg-white border border-[#000000]/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#000000]/30 animate-bounce [animation-delay:-0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#000000]/30 animate-bounce [animation-delay:-0.1s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#000000]/30 animate-bounce" />
                </div>
              ) : step.type === "in" ? (
                <div
                  key={i}
                  className="self-start max-w-[85%] bg-white border border-[#000000]/10 rounded-2xl rounded-bl-sm px-4 py-2.5 text-[13.5px] leading-relaxed font-inter text-[#000000]"
                >
                  {step.text}
                </div>
              ) : (
                <div
                  key={i}
                  className="self-end max-w-[85%] bg-[#000000] text-white rounded-2xl rounded-br-sm px-4 py-2.5 text-[13.5px] leading-relaxed font-inter"
                >
                  {step.text}
                </div>
              ),
            )}
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-2.5 border-t border-[#000000]/10 bg-white">
            <div className="flex-1 rounded-full border border-[#000000]/10 px-4 py-2 text-xs font-inter text-[#000000]/40">
              Message
            </div>
            <div className="w-8 h-8 rounded-full bg-[#000000] text-white flex items-center justify-center text-[11px]">
              ▶
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
