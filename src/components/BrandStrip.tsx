"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const BRANDS = [
  {
    id: 1,
    name: "Faux Fur Boa",
    logo: "/images/brand1.png",
  },
  {
    id: 2,
    name: "ISports Cricket",
    logo: "/images/brand2.png",
  },
  { id: 3, name: "The Great Outdoors", logo: "/images/brand3.png" },
  {
    id: 4,
    name: "AmazonShopLK",
    logo: "/images/brand4.png",
  },
  { id: 5, name: "TwoStack client", logo: "/images/brand5.png" },
  { id: 6, name: "TwoStack client", logo: "/images/brand6.png" },
];

const getInitialBrands = () => BRANDS.slice(0, 4);

const shuffleArray = (array: typeof BRANDS) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomUniqueBrands = () => shuffleArray(BRANDS).slice(0, 4);

export default function BrandStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [brands, setBrands] = useState(getInitialBrands);
  const [isMounted, setIsMounted] = useState(false);
  const [, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    setBrands(BRANDS.slice(0, 4));
  }, []);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    const interval = setInterval(() => {
      if (isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      setIsTransitioning(true);

      const newBrands = getRandomUniqueBrands();
      setBrands(newBrands);

      setTimeout(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, isMounted]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fdfdfe] overflow-hidden py-4 md:py-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center pb-4 md:pb-5"
      >
        <h2 className="font-inter text-black/55 text-sm md:text-base font-medium tracking-wide">
          Trusted by growing brands
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/15">
        {[0, 1, 2, 3].map((boxIndex) => {
          const brand = brands[boxIndex];

          return (
            <div
              key={boxIndex}
              className="relative px-4 py-4 md:px-6 md:py-5 border-r border-b border-black/15 bg-white/20 hover:bg-white/40 transition-all duration-500 overflow-hidden h-[80px] md:h-[100px] flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {brand && (
                    <motion.div
                      key={`${boxIndex}-${brand.id}`}
                      className="absolute z-10 flex items-center justify-center"
                      initial={{ y: 40, opacity: 0, scale: 0.6 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -40, opacity: 0, scale: 0.6 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: boxIndex * 0.08,
                      }}
                    >
                      <div className="relative w-20 h-8 md:w-28 md:h-10">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain brightness-0 grayscale"
                          sizes="(max-width: 768px) 80px, 112px"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
