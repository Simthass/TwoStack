// File: src/components/services/SystemLayers.tsx

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const layers = [
  {
    code: "01",
    name: "Presence",
    tagline: "Where people find you and act.",
    description:
      "The front end of the business - built to convert, not just to exist. Fast, on-brand, and built to plug straight into the automation and intelligence layers behind it.",
    items: [
      {
        k: "Marketing website",
        v: "A site built to turn visitors into enquiries, not just look good.",
      },
      {
        k: "E-commerce storefront",
        v: "Product catalogue, cart, checkout and order flow, connected to WhatsApp for order updates.",
      },
      {
        k: "Client or customer portal",
        v: "A logged-in space where customers track orders, bookings or account status themselves.",
      },
      {
        k: "Internal tools",
        v: "Admin dashboards and staff-facing apps built around how your team actually works.",
      },
    ],
  },
  {
    code: "02",
    name: "Automation",
    tagline: "The work that used to sit with a person.",
    description:
      "Every enquiry answered, every lead qualified, every order tracked - without someone on your team doing it by hand at 11pm.",
    items: [
      {
        k: "WhatsApp AI assistant",
        v: "Answers enquiries in your tone, in seconds, day and night. Books meetings, hands over to a person when it matters.",
      },
      {
        k: "Order and workflow tracking",
        v: "Every order, booking or request moves through defined stages automatically, with the right person notified at each one.",
      },
      {
        k: "Reminders and follow-ups",
        v: "Payment due dates, abandoned enquiries, appointment reminders - sent without anyone having to remember.",
      },
      {
        k: "System-to-system sync",
        v: "Your website, CRM, payments and calendar talk to each other, so nothing gets re-typed twice.",
      },
    ],
  },
  {
    code: "03",
    name: "Intelligence",
    tagline: "What's actually happening, at a glance.",
    description:
      "The layer that turns everything the first two are doing into a clear picture - so decisions stop being guesses.",
    items: [
      {
        k: "Dashboards",
        v: "Sales, enquiries, stock or bookings, in one screen your team actually opens each morning.",
      },
      {
        k: "Forecasting",
        v: "Demand, cash flow or stock projections, built from your own historical data.",
      },
      {
        k: "Automated reporting",
        v: "The weekly or monthly report that used to take an afternoon, generated on its own.",
      },
      {
        k: "Decision flags",
        v: "The system tells you what needs attention - a slow-moving order, an unusual pattern - before you have to go looking.",
      },
    ],
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function SystemLayers() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="system"
      className="w-full bg-[#ffffff] border-t border-[#000000]/10 py-20 lg:py-28 px-6 lg:px-[35px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 lg:mb-16"
        >
          <div className="font-inter text-[13px] tracking-wider text-[#000000]/40 mb-3">
            - What you get
          </div>
          <h2
            className="font-satoshi font-bold text-[#000000] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Three layers. Built as one system, not three vendors.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-14"
        >
          {layers.map((layer, i) => (
            <motion.div
              key={layer.code}
              variants={fadeUpVariants}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 pt-10 border-t border-[#000000]/10"
            >
              <div>
                <div className="font-inter text-xs text-[#000000]/40 mb-2">
                  {layer.code}
                </div>
                <h3 className="font-satoshi font-bold text-[#000000] text-2xl mb-2">
                  {layer.name}
                </h3>
                <p className="font-inter text-sm text-[#000000]/40 mb-3">
                  {layer.tagline}
                </p>
                <p className="font-inter text-[15px] leading-relaxed text-[#000000]/60">
                  {layer.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {layer.items.map((item) => (
                  <div key={item.k}>
                    <h4 className="font-satoshi font-semibold text-[#000000] text-base mb-1.5">
                      {item.k}
                    </h4>
                    <p className="font-inter text-[14px] leading-relaxed text-[#000000]/60">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
