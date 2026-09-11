"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FAQS } from "@/lib/faq-data";

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white border-t border-[#0a0a0a]/10 overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-black/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="group">
                <div className="w-full h-px bg-black/10" />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-5 md:py-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-satoshi font-semibold text-black text-base md:text-lg leading-tight">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDownIcon className="w-5 h-5 text-black/40" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 12 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter text-black/60 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>

                {index === FAQS.length - 1 && (
                  <div className="w-full h-px bg-black/10" />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
