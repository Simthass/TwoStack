"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "What we build", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Contact us", href: "/contact" },
] as const;

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();

    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <li>
      <Link
        href={href}
        className="font-inter text-[13px] font-medium tracking-[0.06em] text-white/60 hover:text-white transition-colors duration-300 relative inline-block py-1 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform duration-300 ease-in-out ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transformOrigin: "left" }}
        />
      </Link>
    </li>
  );
}

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollUpTimer, setScrollUpTimer] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (scrollUpTimer) {
          clearTimeout(scrollUpTimer);
          setScrollUpTimer(null);
        }
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        if (scrollUpTimer) {
          clearTimeout(scrollUpTimer);
          setScrollUpTimer(null);
        }
        const timer = setTimeout(() => {
          setIsVisible(true);
          setScrollUpTimer(null);
        }, 500);
        setScrollUpTimer(timer);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollUpTimer) clearTimeout(scrollUpTimer);
    };
  }, [lastScrollY, scrollUpTimer]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const whatsappLink =
    "https://wa.me/94767732288?text=Hi%20TwoStack%2C%20I%27d%20like%20to%20book%20a%20call%20to%20discuss%20my%20project.";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: isVisible ? 0 : -80,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut" as const,
        }}
        className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 md:px-10 py-4 grid grid-cols-3 items-center md:flex md:justify-between z-50 bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-1 justify-self-start z-50"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0 justify-self-center md:justify-self-auto whitespace-nowrap"
          aria-label="TwoStack"
        >
          <Image
            src="/images/logo.png"
            alt="TwoStack logo"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
            className="object-contain brightness-0 invert flex-shrink-0"
          />
          <span className="font-satoshi font-bold text-[11px] sm:text-[13px] tracking-[0.14em] uppercase text-white select-none whitespace-nowrap">
            TwoStack
          </span>
        </Link>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-1.5 bg-white text-black font-inter text-[10px] sm:text-[11px] font-medium px-2.5 sm:px-3.5 py-1.5 rounded-full flex-shrink-0 justify-self-end whitespace-nowrap"
          whileTap={{ scale: 0.95 }}
        >
          Call
        </motion.a>

        <ul
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          role="list"
        >
          {LINKS.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} />
          ))}
        </ul>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2.5 bg-white text-black hover:bg-white/85 hover:text-black font-inter text-[14px] font-medium px-7 py-3 rounded-full transition-all duration-300 flex-shrink-0 shadow-sm hover:shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a call
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-colors duration-300"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="fixed inset-0 z-40 bg-[#000000] md:hidden flex flex-col items-center justify-center px-6"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <ul className="flex flex-col items-center gap-10" role="list">
              {LINKS.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="font-satoshi text-3xl font-medium text-white/70 hover:text-white transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-14 inline-flex items-center gap-2.5 bg-white text-black font-inter font-medium text-sm px-8 py-3.5 rounded-full hover:bg-white/85 transition-all duration-300"
            >
              Message on WhatsApp
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex items-center gap-6 text-white/30 text-xs font-inter"
            >
              <a
                href="mailto:twostacklk@gmail.com"
                className="hover:text-white/60 transition"
              >
                twostacklk@gmail.com
              </a>
              <span className="w-px h-4 bg-white/10" />
              <span>Colombo · Sri Lanka</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
