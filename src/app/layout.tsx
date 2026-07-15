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
  "Two Stack is an AI-native software development studio building high-performance web apps, mobile apps, and intelligent automation systems. Partner with a Sri Lanka-based team engineering products for startups and businesses worldwide.";

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
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
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
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Two Stack — AI-Native Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.jpg"],
    // creator: "@yourhandle",
  },

  // Fill these in once you register with each console
  verification: {
    google: "your-google-search-console-verification-code",
    // yandex: "your-yandex-code",
    // other: { "msvalidate.01": "your-bing-code" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="bg-[#fdfefd] antialiased">
        {/* Organization structured data — helps Google show rich results / knowledge panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Two Stack",
              url: SITE_URL,
              image: `${SITE_URL}/images/og-image.jpg`,
              description: DESCRIPTION,
              areaServed: "Worldwide",
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
              },
              sameAs: [
                // "https://www.linkedin.com/company/two-stack",
                // "https://twitter.com/yourhandle",
                // "https://github.com/your-org",
              ],
              serviceType: [
                "Web Development",
                "Mobile App Development",
                "AI Product Development",
                "Automation Systems",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
