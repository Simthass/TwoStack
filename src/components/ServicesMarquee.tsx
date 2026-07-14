// File: src/components/ServicesMarquee.tsx

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Presence Layer",
    subtitle: "A website that actually turns visitors into customers — not just something that looks nice.",
    color: "#C9683B"
  },
  {
    id: "02",
    title: "Automation Layer",
    subtitle: "Payment reminders, order replies, and alerts handled automatically, even outside office hours.",
    color: "#2E9E7C"
  },
  {
    id: "03",
    title: "Intelligence Layer",
    subtitle: "Spotting slow-paying customers, low stock, or a slipping trend before it becomes a real problem.",
    color: "#6A5FCF"
  }
] as const;

const createMarqueeItems = (title: string, color: string) => {
  const items: { type: "text" | "dot"; content?: string; color?: string }[] = [];
  for (let i = 0; i < 8; i++) {
    items.push({ type: "text", content: title });
    items.push({ type: "dot", color });
  }
  return items;
};

export default function ServicesMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = (windowHeight - rect.top) / (rect.height + windowHeight);
          setScrollProgress(Math.min(1, Math.max(0, scrolled)));
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIXED: Removed duplicate 'as const'
  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }  // Only one 'as const'
    }
  };

  // ✅ FIXED: Removed duplicate 'as const' from ease and added proper typing
  const rowVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.1 + i * 0.1, 
        ease: "easeOut" as const  // Only one 'as const'
      }
    })
  };

  // Responsive font sizes
  const ghostFontSize = isMobile ? "36px" : "90px";
  const marqueeFontSize = isMobile ? "36px" : "90px";
  const headlineFontSize = isMobile ? "28px" : "34px";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white border-t border-[#0a0a0a]/10 overflow-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">

        {/* Headline */}
        <motion.div
          variants={headlineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center"
        >
          <h2
            className="font-satoshi font-bold text-black leading-tight"
            style={{ fontSize: headlineFontSize, letterSpacing: "-0.02em" }}
          >
            One system, three layers,
            <br />
            built to work together
          </h2>
        </motion.div>

        {/* Service Rows with Dividers */}
        <div className="w-full flex flex-col gap-0">

          <div className="w-full border-t border-black/20 mb-4 sm:mb-6 md:mb-8" />

          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const marqueeItems = createMarqueeItems(service.title, service.color);

            return (
              <div key={service.id}>
                <motion.div
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative group"
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  onClick={() => isMobile && setHoveredIndex(isHovered ? null : index)}
                >
                  <div className="relative overflow-hidden py-2 sm:py-3 md:py-5">

                    {/* Ghost state */}
                    <motion.div
                      className="flex flex-col items-center justify-center gap-1 sm:gap-2"
                      animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -20 : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" as const }}  // ✅ Fixed
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
                        <span className="font-mono text-[10px] sm:text-sm text-black/30">[{service.id}]</span>
                        <span
                          className="font-satoshi font-bold text-black/20 whitespace-normal text-center"
                          style={{ 
                            fontSize: ghostFontSize, 
                            letterSpacing: "-0.02em", 
                            lineHeight: "1.1" 
                          }}
                        >
                          {service.title}
                        </span>
                      </div>
                      <span className="font-inter text-black/60 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed px-2 sm:px-4">
                        {service.subtitle}
                      </span>
                    </motion.div>

                    {/* Hover marquee state */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                      transition={{ duration: 0.4, ease: "easeOut" as const }}  // ✅ Fixed
                    >
                      <div className="relative w-full overflow-hidden">
                        <motion.div
                          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{
                            duration: isMobile ? 10 + index * 2 : 15 + index * 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear" as const  // ✅ Fixed - only one 'as const'
                          }}
                          style={{ width: "fit-content" }}
                        >
                          {marqueeItems.map((item, idx) =>
                            item.type === "text" ? (
                              <span
                                key={idx}
                                className="font-satoshi font-bold text-black/90 whitespace-nowrap text-center flex-shrink-0"
                                style={{ 
                                  fontSize: marqueeFontSize, 
                                  letterSpacing: "-0.02em", 
                                  lineHeight: "1.1" 
                                }}
                              >
                                {item.content}
                              </span>
                            ) : (
                              <span
                                key={idx}
                                className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full flex-shrink-0"
                                style={{ background: item.color }}
                              />
                            )
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                  </div>
                </motion.div>

                {index < SERVICES.length - 1 && (
                  <div className="w-full border-t border-black/20 my-2 sm:my-3 md:my-5" />
                )}
              </div>
            );
          })}

          <div className="w-full border-t border-black/20 mt-4 sm:mt-6 md:mt-8" />

        </div>
      </div>

    </section>
  );
}