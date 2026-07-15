import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/services/Hero";
import SystemLayers from "@/components/services/SystemLayers";
import LiveDemo from "@/components/services/LiveDemo";
import Process from "@/components/services/Process";
import CtaFooter from "@/components/services/CtaFooter";

const SITE_URL = "https://twostack.lk";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI automation, and business intelligence — built as one connected system by Two Stack in Sri Lanka.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Services | Two Stack",
    description:
      "Web development, mobile apps, AI automation, and business intelligence — built as one connected system by Two Stack in Sri Lanka.",
    url: `${SITE_URL}/services`,
    siteName: "Two Stack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Two Stack Services — Presence, Automation & Intelligence Layers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  Structured Data — Service schemas + BreadcrumbList                  */
/* ------------------------------------------------------------------ */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development (Presence Layer)",
    description:
      "Marketing websites, e-commerce storefronts, client portals, and internal tools — built to convert visitors into customers, not just to exist.",
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Two Stack",
    },
    areaServed: "Worldwide",
    serviceType: "Web Development",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation (Automation Layer)",
    description:
      "WhatsApp AI assistants, order and workflow tracking, automated reminders and follow-ups, and system-to-system sync — handling the work that used to sit with a person.",
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Two Stack",
    },
    areaServed: "Worldwide",
    serviceType: "AI Automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Intelligence (Intelligence Layer)",
    description:
      "Dashboards, forecasting, automated reporting, and decision flags — turning raw business data into a clear picture for faster, smarter decisions.",
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Two Stack",
    },
    areaServed: "Worldwide",
    serviceType: "Business Intelligence",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SystemLayers />
        <LiveDemo />
        <Process />
        <CtaFooter />
      </main>

      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Service structured data — one per core offering */}
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
