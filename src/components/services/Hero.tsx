// File: src/components/services/Hero.tsx

"use client";

import { motion } from "framer-motion";
import SystemStack from "./SystemStack";

export default function Hero() {
  // WhatsApp link with pre-filled message
  const whatsappLink =
    "https://wa.me/94767732288?text=Hi%20TwoStack%2C%20I'd%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20my%20project.";

  return (
    <section className="w-full bg-[#000000] pt-[clamp(100px,15vw,160px)] pb-[clamp(48px,6vw,80px)] border-b border-white/10 px-6 lg:px-[35px]">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="font-inter text-[13px] tracking-wider text-white/40 mb-5"
            >
              - Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: "easeOut" as const,
              }}
              className="font-satoshi font-bold text-white leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              One system. Three layers. Everything your business runs on.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut" as const,
              }}
              className="mt-5 font-inter text-white/60 text-[15px] md:text-base leading-relaxed max-w-[54ch]"
            >
              A website gets you noticed. Automation keeps you fast.
              Intelligence keeps you sharp. Most agencies build you one of these
              and leave the rest to you. TwoStack builds all three, wired
              together, as one system.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut" as const,
              }}
              className="mt-4 font-inter text-white/60 text-[15px] md:text-base leading-relaxed max-w-[54ch]"
            >
              We work with businesses that are done running on spreadsheets,
              missed WhatsApp messages and a website nobody's touched since
              launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut" as const,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#000000] px-7 py-3.5 text-sm font-inter font-medium transition-all duration-300 hover:bg-white/85 hover:text-black hover:shadow-lg"
              >
                Book a 30-min call <span className="text-base">↗</span>
              </motion.a>
              <a
                href="#system"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-inter font-medium text-white hover:bg-white/10 transition-all duration-300"
              >
                See what we build
              </a>
            </motion.div>
          </div>

          <div>
            <div className="font-inter text-[13px] tracking-wider text-white/40 mb-3">
              - The TwoStack System
            </div>
            <SystemStack />
          </div>
        </div>
      </div>
    </section>
  );
}
