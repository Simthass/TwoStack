"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICE_LINKS, SITE } from "@/lib/site";

const COMPANY_LINKS = [
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <footer
      ref={sectionRef}
      className="relative w-full border-t border-white/10 bg-[#000000] text-white"
    >
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-[1300px] px-6 py-12 md:px-12 md:py-16"
      >
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-satoshi text-sm font-bold uppercase tracking-[0.14em]"
              aria-label="TwoStack home"
            >
              TwoStack
            </Link>
            <p className="mt-4 max-w-md font-inter text-sm leading-6 text-white/45">
              AI-powered web, ecommerce, mobile, POS, automation and custom
              software engineering from Colombo, Sri Lanka.
            </p>
            <p className="mt-5 font-inter text-xs uppercase tracking-[0.14em] text-white/25">
              Colombo · Sri Lanka · Worldwide
            </p>
          </div>

          <nav aria-label="Services" className="md:col-span-4">
            <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/30">
              Services
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
              {SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-inter text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-3">
            <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/30">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-inter text-sm text-white/55 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-white/55 transition-colors hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-7 font-inter text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TwoStack. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {Object.entries(SITE.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize transition-colors hover:text-white/60"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
