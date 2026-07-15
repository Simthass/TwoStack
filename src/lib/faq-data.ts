// File: src/lib/faq-data.ts
// Single source of truth for FAQ content — used by both the FAQSection component
// and the FAQPage JSON-LD structured data schema.

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: "Do we need to change our existing systems?",
    answer:
      "No. If you already have a system in place — whether it's a CRM, accounting software, or spreadsheets — we connect to it and pull your data across. We only rebuild what's actually holding you back, not everything for the sake of it.",
  },
  {
    id: 2,
    question: "How much does it cost in Sri Lankan Rupees (LKR)?",
    answer:
      "Pricing is quoted per project based on scope and complexity. We provide a transparent quote before any work begins, and we're flexible with payment terms for Sri Lankan businesses.",
  },
  {
    id: 3,
    question: "What exactly do you build — is it just the website or everything?",
    answer:
      "We build the complete digital ecosystem your business runs on. That includes your website (frontend, backend, CMS), automation and AI assistants, hosting and domain setup, SEO and performance optimization, security and analytics, and payment gateway integrations.",
  },
  {
    id: 4,
    question: "Will the AI understand Sinhala or Tamil or English?",
    answer:
      "Yes. Our AI systems can be trained to understand and respond in Sinhala, Tamil, and English. Whether your customers message in Sinhala on WhatsApp or email in Tamil, the AI will reply in the same language with a natural, human-like tone.",
  },
  {
    id: 5,
    question: "How long does it take to build a custom system?",
    answer:
      "Most projects take 4–12 weeks depending on complexity. We work in agile sprints, so you see progress every week and can provide feedback throughout.",
  },
  {
    id: 6,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer flexible support packages to keep your systems running smoothly. From bug fixes to feature updates, we've got you covered. Our team is based in Sri Lanka, so you'll never deal with timezone delays or overseas support queues.",
  },
  {
    id: 7,
    question: "What industries do you work with in Sri Lanka?",
    answer:
      "We work with businesses across all industries — from retail and e-commerce to logistics, healthcare, and fintech. We've built systems for Sri Lankan businesses ranging from boutique stores to large enterprises. Every industry has its own workflow, and we build around yours.",
  },
  {
    id: 8,
    question: "Can you integrate with Sri Lankan payment gateways?",
    answer:
      "Yes. We've integrated with major Sri Lankan payment gateways including Sampath Bank, Commercial Bank, Dialog, and others. Whether you need card payments, QR payments, or bank transfers, we handle it.",
  },
  {
    id: 9,
    question: "What if my team isn't tech-savvy?",
    answer:
      "That's exactly why we exist. We build systems that your team can actually use — not complicated software that requires a manual. We train your team, provide clear documentation, and we're just a WhatsApp message away if something needs changing.",
  },
  {
    id: 10,
    question: "Can you build a mobile app for my Sri Lankan business?",
    answer:
      "Yes. Whether you need an iOS app, Android app, or both, we build native and cross-platform mobile apps. From delivery apps to customer loyalty programs, we've built apps that Sri Lankans actually use.",
  },
  {
    id: 11,
    question: "Do you handle hosting and domain setup?",
    answer:
      "Yes. We handle everything — domain registration, SSL certificates, hosting setup, and ongoing maintenance. We use fast, reliable servers with local CDN coverage to ensure your site loads quickly for Sri Lankan users.",
  },
];
