import type { Metadata } from "next";
import { SERVICE_LINKS, SITE } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const canonical = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${SITE.name} — software development studio in Sri Lanka`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/logo.png`,
      },
      image: `${SITE.url}/og-image.jpg`,
      description: SITE.description,
      telephone: SITE.phoneE164,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressRegion: SITE.region,
        addressCountry: "LK",
      },
      areaServed: [
        { "@type": "Country", name: SITE.country },
        { "@type": "Place", name: "Worldwide" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE.phoneE164,
        email: SITE.email,
        areaServed: "LK",
        availableLanguage: ["English", "Tamil", "Sinhala"],
      },
      sameAs: Object.values(SITE.social),
      knowsAbout: [
        "Web Development",
        "Web Application Development",
        "Ecommerce Development",
        "Mobile Application Development",
        "Point of Sale Systems",
        "Custom Software Development",
        "Artificial Intelligence Automation",
        "Business Process Automation",
        "Software Engineering",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "TwoStack software development services",
        itemListElement: SERVICE_LINKS.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.label,
            url: `${SITE.url}${service.href}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: SITE.language,
    },
  ],
};

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${input.path}/#service`,
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: SITE.country },
      { "@type": "Place", name: "Worldwide" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Startups, SMEs and enterprises",
    },
  };
}

export function faqSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "ContactPage" | "AboutPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    "@id": `${SITE.url}${input.path}/#webpage`,
    url: `${SITE.url}${input.path}`,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language,
  };
}

export function jsonLd(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
