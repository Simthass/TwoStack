"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CARDS = [
  {
    id: 1,
    src: "/portfolio/Faux Fur Boa/FFb 5.webp",
    alt: "Faux Fur Boa online store built by TwoStack",
    href: "/portfolio/faux-fur-boa",
  },
  {
    id: 2,
    src: "/portfolio/AmazonShopLK/ASLK 5.webp",
    alt: "AmazonShopLK Ecommerce website project built by TwoStack",
    href: "/portfolio/amazonshop-lk",
  },
  {
    id: 3,
    src: "/portfolio/iSports/iSports 5.webp",
    alt: "iSports Web application project built by TwoStack",
    href: "/portfolio/isports-cricket-store",
  },
  {
    id: 4,
    src: "/portfolio/TypeTrace/TT 1.webp",
    alt: "Mobile app project built by TwoStack",
    href: "/portfolio",
  },
  {
    id: 5,
    src: "/portfolio/TGO/TGO 1.webp",
    alt: "Business dashboard project built by TwoStack",
    href: "/portfolio",
  },
] as const;

// Duplicate for seamless loop
const DOUBLED = [...CARDS, ...CARDS];

// Exactly 3 cards visible at a time (desktop)
const DESKTOP_CARD_WIDTH = "calc((100vw - 96px) / 3)";
// Mobile: 1 card visible at a time
const MOBILE_CARD_WIDTH = "calc(100vw - 48px)";

function Card({
  src,
  alt,
  href,
  duplicate,
  cardWidth,
  isMobile,
}: {
  src: string;
  alt: string;
  href: string;
  duplicate: boolean;
  cardWidth: string;
  isMobile: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        rotateX: 2,
        boxShadow: "0 20px 48px rgba(0,0,0,0.16)",
        transition: { type: "spring", stiffness: 400, damping: 22 },
      }}
      style={{
        borderRadius: "14px",
        width: cardWidth,
        height: "260px",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        background: "#e0ddd8",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={isMobile ? "92vw" : "33vw"}
        draggable={false}
      />
      <Link href={href} aria-label={`View ${alt}`} tabIndex={duplicate ? -1 : 0} className="absolute inset-0 z-10" />
    </motion.div>
  );
}

export default function PortfolioMarquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use different card width based on screen size
  const cardWidth = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;

  // Different animation speeds
  const animationDuration = isMobile ? "20s" : "32s";

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll ${animationDuration} linear infinite;
          display: flex;
          gap: ${isMobile ? "12px" : "16px"};
          width: max-content;
          padding: 12px 0;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-wrapper:focus-within .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>

      <div
        className="marquee-wrapper"
        style={{
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          perspective: "800px",
        }}
      >
        <div className="marquee-track">
          {DOUBLED.map((card, i) => (
            <Card
              key={`${card.id}-${i}`}
              src={card.src}
              alt={card.alt}
              href={card.href}
              duplicate={i >= CARDS.length}
              cardWidth={cardWidth}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </>
  );
}
