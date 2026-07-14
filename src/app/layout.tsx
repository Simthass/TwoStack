// File: app/layout.tsx

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

export const metadata: Metadata = {
  metadataBase: new URL("https://twostack.lk"),
  title: "Two Stack — AI-Native Development Studio",
  description: "We build the web, mobile, and AI products your competitors wish they had.",
  keywords: "AI development, web development, mobile apps, automation, Sri Lanka, software development",
  authors: [{ name: "Two Stack" }],
  
  // Favicon Configuration - Updated paths to look in /images/
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Open Graph for WhatsApp, Facebook, LinkedIn previews
  openGraph: {
    title: "Two Stack — AI-Native Development Studio",
    description: "We build the web, mobile, and AI products your competitors wish they had.",
    url: "https://twostack.lk",
    siteName: "Two Stack",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Two Stack - AI-Native Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card for Twitter previews
  twitter: {
    card: "summary_large_image",
    title: "Two Stack — AI-Native Development Studio",
    description: "We build the web, mobile, and AI products your competitors wish they had.",
    images: ["/images/og-image.jpg"],
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
        {children}
      </body>
    </html>
  );
}
