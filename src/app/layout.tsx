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
});

const SITE_URL = "https://twostack.lk";
const SITE_NAME = "Two Stack";
const TITLE =
  "Two Stack | AI-Native Web, Mobile & Automation Development Studio in Sri Lanka";
const DESCRIPTION =
  "Two Stack is an AI-native development studio in Sri Lanka building web apps, mobile apps, and automation systems for startups and businesses worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,

  keywords: [
    "AI development studio",
    "AI-native software development",
    "web development Sri Lanka",
    "mobile app development Sri Lanka",
    "custom software development agency",
    "SaaS development company",
    "AI automation solutions",
    "Next.js development agency",
    "React development company",
    "software development Colombo",
    "startup MVP development",
    "AI product development",
    "full stack development agency",
    "AI automation Sri Lanka",
    "WhatsApp AI chatbot Sri Lanka",
    "e-commerce development Sri Lanka",
  ],

  authors: [{ name: "Two Stack", url: SITE_URL }],
  creator: "Two Stack",
  publisher: "Two Stack",

  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Canonical + language alternates
  alternates: {
    canonical: SITE_URL,
  },

  // Crawler directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Category helps some rich-result classifiers
  category: "technology",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

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
        alt: "Two Stack — AI-Native Development Studio in Sri Lanka",
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
    // TODO: Add your Twitter handle once created, e.g.:
    // creator: "@twostack",
  },

  // TODO: Paste your Google Search Console verification code below.
  // 1. Go to https://search.google.com/search-console
  // 2. Add property → URL prefix → https://twostack.lk
  // 3. Choose "HTML tag" verification method
  // 4. Copy ONLY the content="..." value and paste it below
  verification: {
    google: "TODO_PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE",
    // yandex: "your-yandex-code",
    // other: { "msvalidate.01": "your-bing-code" },
  },
};

/* ------------------------------------------------------------------ */
/*  Structured Data – JSON-LD                                          */
/* ------------------------------------------------------------------ */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Two Stack",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: DESCRIPTION,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  telephone: "+94767732288",
  email: "twostacklk@gmail.com",
  sameAs: [
    // TODO: Add your social media URLs here as you create them, e.g.:
    // "https://www.linkedin.com/company/two-stack",
    // "https://twitter.com/twostack",
    // "https://github.com/two-stack",
    // "https://www.facebook.com/twostack",
    // "https://www.instagram.com/twostack",
  ],
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "AI Product Development",
    "Automation Systems",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  // Note: SearchAction is omitted because there is no internal search feature.
  // If you add site search in the future, uncomment and configure this:
  // potentialAction: {
  //   "@type": "SearchAction",
  //   target: {
  //     "@type": "EntryPoint",
  //     urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
  //   },
  //   "query-input": "required name=search_term_string",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="bg-[#fdfefd] antialiased">
        {/* Organization structured data — ProfessionalService schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
