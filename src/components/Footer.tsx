"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICE_LINKS, SITE } from "@/lib/site";

const COMPANY_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

const getSocialIcon = (name: string) => {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("facebook")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    );
  }
  if (lowerName.includes("instagram")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    );
  }
  if (lowerName.includes("linkedin")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  }

  // Fallback if there's a social link that doesn't match the above
  return <span className="capitalize text-xs">{name}</span>;
};

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

        <div className="flex flex-col gap-6 pt-7 font-inter text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TwoStack. All rights reserved.</p>

          {/* Updated Social Icons */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {Object.entries(SITE.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-white/40 transition-colors hover:text-white p-1"
              >
                {getSocialIcon(name)}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
