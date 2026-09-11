import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { jsonLd, organizationGraph } from "@/lib/seo";
import { SITE } from "@/lib/site";

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
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "TwoStack | Web, Ecommerce, Mobile App & AI Development Sri Lanka",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Software Development",
  manifest: "/site.webmanifest",
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    title: "TwoStack | Software Development Studio in Sri Lanka",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TwoStack software development studio in Colombo, Sri Lanka",
      },
    ],
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TwoStack | Software Development Studio in Sri Lanka",
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "WBML3VdMKMqT7xf5PFjv3Lz6caUTmoHiCbjHjgCHwJo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SITE.language}
      className={`${inter.variable} ${satoshi.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#ffffff] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationGraph) }}
        />
        {children}
      </body>
    </html>
  );
}
