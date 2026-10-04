"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "What we build", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
] as const;

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

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
    "https://wa.me/94767732288?text=Hi%20TwoStack%2C%20I%27d%20like%20to%20chat%20about%20my%20project.";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{
          opacity: 1,
          y: isVisible ? 0 : -80,
        }}
        transition={{
          duration: 0.6,
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
          aria-label="Chat on WhatsApp"
          className="md:hidden flex items-center justify-center bg-[#25D366] text-white p-3 rounded-full flex-shrink-0 justify-self-end shadow-sm"
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon size={20} />
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
          className="hidden md:flex items-center gap-2.5 bg-white text-black hover:bg-[#25D366] hover:text-white font-inter text-[14px] font-medium px-7 py-3 rounded-full transition-all duration-300 flex-shrink-0 shadow-sm hover:shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <WhatsAppIcon size={17} />
          Chat on WhatsApp
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
              className="mt-14 inline-flex items-center gap-2.5 bg-[#25D366] text-white font-inter font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#20bd5a] transition-all duration-300"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
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
