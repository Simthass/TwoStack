"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// ── Drop your 5 PNG files into public/images/ with these exact names:
// public/images/project-1.png
// public/images/project-2.png
// public/images/project-3.png
// public/images/project-4.png
// public/images/project-5.png

const CARDS = [
  { id: 1, src: "/images/project-1.png", alt: "Project 1" },
  { id: 2, src: "/images/project-2.png", alt: "Project 2" },
  { id: 3, src: "/images/project-3.png", alt: "Project 3" },
  { id: 4, src: "/images/project-4.png", alt: "Project 4" },
  { id: 5, src: "/images/project-5.png", alt: "Project 5" },
] as const;

// Duplicate for seamless loop
const DOUBLED = [...CARDS, ...CARDS];

// Exactly 3 cards visible at a time (desktop)
const DESKTOP_CARD_WIDTH = "calc((100vw - 96px) / 3)";
// Mobile: 1 card visible at a time
const MOBILE_CARD_WIDTH = "calc(100vw - 48px)";

function Card({ src, alt, cardWidth }: { src: string; alt: string; cardWidth: string }) {
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
        sizes="33vw"
        draggable={false}
      />
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
          gap: ${isMobile ? '12px' : '16px'};
          width: max-content;
          padding: 12px 0;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="marquee-wrapper"
        style={{
          width: "100%",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          perspective: "800px",
        }}
      >
        <div className="marquee-track">
          {DOUBLED.map((card, i) => (
            <Card key={`${card.id}-${i}`} src={card.src} alt={card.alt} cardWidth={cardWidth} />
          ))}
        </div>
      </div>
    </>
  );
}
