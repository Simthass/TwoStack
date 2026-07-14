// File: src/components/FAQSection.tsx

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Custom Chevron Down Icon (no external dependency)
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

const FAQS = [
  {
    id: 1,
    question: "Do we need to change our existing systems?",
    answer: "No. If you already have a system in place — whether it's a CRM, accounting software, or spreadsheets — we connect to it and pull your data across. We only rebuild what's actually holding you back, not everything for the sake of it."
  },
  {
    id: 2,
    question: "How much does it cost in Sri Lankan Rupees (LKR)?",
    answer: "Every project is unique. We provide a transparent quote before any work begins, and we're flexible with payment terms for Sri Lankan businesses."
  },
  {
    id: 3,
    question: "What exactly do you build — is it just the website or everything?",
    answer: "We build the complete digital ecosystem your business runs on. Here's what that means:\n\n• Website (frontend, backend, CMS)\n• Automation & AI assistants\n• Hosting & domain setup\n• SEO & performance optimization\n• Security & analytics\n• Payment gateway integrations"
  },
  {
    id: 4,
    question: "Will the AI understand Sinhala or Tamil or English?",
    answer: "Yes. Our AI systems can be trained to understand and respond in Sinhala, Tamil, and English. Whether your customers message in Sinhala on WhatsApp or email in Tamil, the AI will reply in the same language with a natural, human-like tone."
  },
  {
    id: 5,
    question: "How long does it take to build a custom system?",
    answer: "Most projects take 4-12 weeks depending on complexity. We work in agile sprints, so you see progress every week and can provide feedback throughout."
  },
  {
    id: 6,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes. We offer flexible support packages to keep your systems running smoothly. From bug fixes to feature updates, we've got you covered. Our team is based in Sri Lanka, so you'll never deal with timezone delays or overseas support queues."
  },
  {
    id: 7,
    question: "What industries do you work with in Sri Lanka?",
    answer: "We work with businesses across all industries — from retail and e-commerce to logistics, healthcare, and fintech. We've built systems for Sri Lankan businesses ranging from boutique stores to large enterprises. Every industry has its own workflow, and we build around yours."
  },
  {
    id: 8,
    question: "Can you integrate with Sri Lankan payment gateways?",
    answer: "Absolutely. We've integrated with all major Sri Lankan payment gateways including Sampath Bank, Commercial Bank, Dialog, and others. Whether you need card payments, QR payments, or bank transfers, we've got you covered."
  },
  {
    id: 9,
    question: "What if my team isn't tech-savvy?",
    answer: "That's exactly why we exist. We build systems that your team can actually use — not complicated software that requires a manual. We train your team, provide clear documentation, and we're just a WhatsApp message away if something needs changing."
  },
  {
    id: 10,
    question: "Can you build a mobile app for my Sri Lankan business?",
    answer: "Yes. Whether you need an iOS app, Android app, or both, we build native and cross-platform mobile apps. From delivery apps to customer loyalty programs, we've built apps that Sri Lankans actually use."
  },
  {
    id: 11,
    question: "Do you handle hosting and domain setup?",
    answer: "Yes. We handle everything — domain registration, SSL certificates, hosting setup, and ongoing maintenance. We use fast, reliable servers with local CDN coverage to ensure your site loads quickly for Sri Lankan users."
  }
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ FIXED: Added 'as const' to ease array
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  // Helper function to render answer with line breaks
  const renderAnswer = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white border-t border-[#0a0a0a]/10 overflow-hidden py-16 md:py-24"
    >
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-black/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        
        {/* Header - Centered */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
            Questions you're probably thinking.
          </h2>
        </motion.div>

        {/* FAQ List - Centered with dividers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                variants={fadeUpVariants}
                className="group"
              >
                {/* Divider - Full width */}
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
                      animate={{ 
                        rotate: isOpen ? 180 : 0 
                      }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.16, 1, 0.3, 1] as const  // ✅ FIXED: Added 'as const'
                      }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDownIcon className="w-5 h-5 text-black/40" />
                    </motion.div>
                  </div>
                  
                  {/* Answer */}
                  <motion.div
                    initial={{ 
                      height: 0, 
                      opacity: 0,
                      marginTop: 0
                    }}
                    animate={{ 
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 12 : 0
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.16, 1, 0.3, 1] as const  // ✅ FIXED: Added 'as const'
                    }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter text-black/60 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>

                {/* Final divider after last item */}
                {index === FAQS.length - 1 && (
                  <div className="w-full h-px bg-black/10" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}