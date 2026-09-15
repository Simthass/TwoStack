"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Web & Ecommerce Development",
    subtitle:
      "Fast, modern websites and online stores, connected to Sri Lankan bank payments and built to turn visitors into customers.",
  },
  {
    id: "02",
    title: "AI Automation",
    subtitle:
      "AI assistants that reply to customers in Sinhala, Tamil or English on WhatsApp, plus automated order updates and reminders.",
  },
  {
    id: "03",
    title: "Mobile App Development",
    subtitle:
      "iOS and Android apps that connect smoothly with your website and backend, so everything stays in sync.",
  },
  {
    id: "04",
    title: "ERP Systems Development",
    subtitle:
      "POS, inventory, finance, HR and other ERP modules connected in one system, syncing in real time across your entire business.",
  },
  {
    id: "05",
    title: "Cusotm Software Development",
    subtitle:
      "We turn your ideas into easy-to-use digital tools, built from the ground up exactly the way you need them.",
  },
] as const;

type MarqueeItem = { type: "text"; content: string } | { type: "dot" };

const createMarqueeItems = (title: string): MarqueeItem[] => {
  const items: MarqueeItem[] = [];

  for (let i = 0; i < 8; i++) {
    items.push({ type: "text", content: title });
    items.push({ type: "dot" });
  }

  return items;
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function ServicesMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const ghostFontSize = isMobile ? "28px" : "64px";
  const marqueeFontSize = isMobile ? "28px" : "64px";
  const headlineFontSize = isMobile ? "28px" : "38px";

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-black/10 bg-white pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12">
        <motion.div
          variants={headlineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-6 w-full text-center sm:mb-8 md:mb-12 lg:mb-16"
        >
          <h2
            className="font-satoshi font-bold leading-tight text-black"
            style={{ fontSize: headlineFontSize, letterSpacing: "-0.02em" }}
          >
            What we build
          </h2>
        </motion.div>

        <div className="flex w-full flex-col gap-0">
          <div className="mb-4 w-full border-t border-black/20 sm:mb-6 md:mb-8" />

          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const marqueeItems = createMarqueeItems(service.title);

            return (
              <div key={service.id}>
                <motion.div
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="group relative"
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  onClick={() =>
                    isMobile && setHoveredIndex(isHovered ? null : index)
                  }
                >
                  <div className="relative overflow-hidden py-2 sm:py-3 md:py-5">
                    <motion.div
                      className="flex flex-col items-center justify-center gap-1 sm:gap-2"
                      animate={{
                        opacity: isHovered ? 0 : 1,
                        y: isHovered ? -20 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
                        <span className="font-mono text-[10px] text-black/30 sm:text-sm">
                          [{service.id}]
                        </span>

                        <span
                          className="whitespace-normal text-center font-satoshi font-bold text-black/80"
                          style={{
                            fontSize: ghostFontSize,
                            letterSpacing: "-0.02em",
                            lineHeight: "1.1",
                          }}
                        >
                          {service.title}
                        </span>
                      </div>

                      <span className="mt-2 max-w-2xl px-2 text-center font-inter text-xs leading-relaxed text-black/60 sm:px-4 sm:text-sm md:text-base">
                        {service.subtitle}
                      </span>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="relative w-full overflow-hidden">
                        <motion.div
                          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{
                            duration: isMobile
                              ? 10 + index * 2
                              : 15 + index * 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                          }}
                          style={{ width: "fit-content" }}
                        >
                          {marqueeItems.map((item, idx) =>
                            item.type === "text" ? (
                              <span
                                key={idx}
                                className="flex-shrink-0 whitespace-nowrap text-center font-satoshi font-bold text-black/90"
                                style={{
                                  fontSize: marqueeFontSize,
                                  letterSpacing: "-0.02em",
                                  lineHeight: "1.1",
                                }}
                              >
                                {item.content}
                              </span>
                            ) : (
                              <span
                                key={idx}
                                aria-hidden="true"
                                className="h-2 w-2 flex-shrink-0 rounded-full bg-black sm:h-3 sm:w-3 md:h-4 md:w-4"
                              />
                            ),
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {index < SERVICES.length - 1 && (
                  <div className="my-2 w-full border-t border-black/20 sm:my-3 md:my-5" />
                )}
              </div>
            );
          })}

          <div className="mt-4 w-full border-t border-black/20 sm:mt-6 md:mt-8" />
        </div>
      </div>
    </section>
  );
}
