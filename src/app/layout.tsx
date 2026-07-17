import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
  // Mitigates Cumulative Layout Shift (CLS) when loading custom typography
  adjustFontFallback: "Arial",
});

const SITE_URL = "https://twostack.lk";
const SITE_NAME = "TwoStack";

const TITLE =
  "TwoStack | AI-Native Web, E-commerce & Mobile App Development Sri Lanka";
const DESCRIPTION =
  "TwoStack is a high-performance software agency in Sri Lanka building production-grade AI-powered web applications, custom e-commerce stores, and native mobile apps.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,

  keywords: [
    "TwoStack",
    "twostack.lk",
    "AI powered web development in Sri Lanka",
    "web development in Sri Lanka",
    "Ecommerce development in Sri Lanka",
    "Mobile application development in Sri Lanka",
    "software development agency Colombo",
    "AI automation Sri Lanka",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // Fixes indexing fragmentation by enforcing a strict canonical root
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "/en-US",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TwoStack Studio — Enterprise Systems Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "WBML3VdMKMqT7xf5PFjv3Lz6caUTmoHiCbjHjgCHwJo",
  },
};

/* ------------------------------------------------------------------ */
/*  Structured Data – JSON-LD (Updated for TwoStack & Local SEO)      */
/* ------------------------------------------------------------------ */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: DESCRIPTION,
  priceRange: "$$$",
  telephone: "+94767732288",
  email: "twostacklk@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Colombo",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.9271",
    longitude: "79.8612",
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Country", name: "Worldwide" },
  ],
  // Entity cross-linking for Google Knowledge Graph
  sameAs: [
    "https://www.linkedin.com/company/twostacklk",
    "https://github.com/twostacklk",
    "https://www.facebook.com/twostacklk",
    "https://www.instagram.com/twostacklk",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="bg-[#fdfefd] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
