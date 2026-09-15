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
    "https://wa.me/94767732288?text=Hi%20TwoStack%2C%20I%27d%20like%20to%20chat%20about%20my%20project.";

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
          className="md:hidden flex items-center gap-1.5 bg-[#25D366] text-white font-inter text-[11px] sm:text-[12px] font-semibold px-3.5 sm:px-4 py-2.5 rounded-full flex-shrink-0 justify-self-end whitespace-nowrap shadow-sm"
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 13.98 2.56 15.83 3.5 17.4L2 22L6.7 20.56C8.23 21.48 10 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M16.95 15.19C16.57 15.57 15.98 15.74 15.35 15.7C14.9 15.66 14.33 15.51 13.48 15.16C12.6 14.79 12.05 14.2 11.65 13.79C11.25 13.38 10.85 12.92 10.55 12.39C10.25 11.86 10.05 11.29 9.98 10.69C9.91 10.09 10 9.49 10.21 8.94C10.42 8.39 10.79 7.94 11.23 7.58C11.67 7.22 12.12 7 12.58 7C12.91 7 13.2 7.15 13.42 7.43C13.64 7.71 13.73 8.04 13.73 8.34C13.73 8.64 13.64 9.04 13.55 9.34L13.28 10.12C13.19 10.42 13.1 10.72 13.09 11.02C13.08 11.32 13.18 11.6 13.36 11.82C13.54 12.04 13.76 12.2 14.02 12.28C14.28 12.36 14.55 12.36 14.81 12.28C15.07 12.2 15.29 12.04 15.47 11.82C15.65 11.6 15.75 11.32 15.76 11.02C15.77 10.72 15.68 10.42 15.59 10.12L15.32 9.34C15.23 9.04 15.14 8.74 15.13 8.44C15.12 8.14 15.2 7.84 15.36 7.59C15.52 7.34 15.73 7.14 16 7C16.27 6.86 16.56 6.77 16.85 6.77C17.24 6.77 17.61 6.91 17.91 7.17C18.21 7.43 18.43 7.78 18.54 8.18C18.65 8.58 18.66 8.99 18.56 9.39C18.46 9.79 18.26 10.14 17.96 10.4C17.66 10.66 17.31 10.84 16.95 10.93L16.95 15.19Z"
              fill="currentColor"
            />
          </svg>
          WhatsApp
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
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 13.98 2.56 15.83 3.5 17.4L2 22L6.7 20.56C8.23 21.48 10 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M16.95 15.19C16.57 15.57 15.98 15.74 15.35 15.7C14.9 15.66 14.33 15.51 13.48 15.16C12.6 14.79 12.05 14.2 11.65 13.79C11.25 13.38 10.85 12.92 10.55 12.39C10.25 11.86 10.05 11.29 9.98 10.69C9.91 10.09 10 9.49 10.21 8.94C10.42 8.39 10.79 7.94 11.23 7.58C11.67 7.22 12.12 7 12.58 7C12.91 7 13.2 7.15 13.42 7.43C13.64 7.71 13.73 8.04 13.73 8.34C13.73 8.64 13.64 9.04 13.55 9.34L13.28 10.12C13.19 10.42 13.1 10.72 13.09 11.02C13.08 11.32 13.18 11.6 13.36 11.82C13.54 12.04 13.76 12.2 14.02 12.28C14.28 12.36 14.55 12.36 14.81 12.28C15.07 12.2 15.29 12.04 15.47 11.82C15.65 11.6 15.75 11.32 15.76 11.02C15.77 10.72 15.68 10.42 15.59 10.12L15.32 9.34C15.23 9.04 15.14 8.74 15.13 8.44C15.12 8.14 15.2 7.84 15.36 7.59C15.52 7.34 15.73 7.14 16 7C16.27 6.86 16.56 6.77 16.85 6.77C17.24 6.77 17.61 6.91 17.91 7.17C18.21 7.43 18.43 7.78 18.54 8.18C18.65 8.58 18.66 8.99 18.56 9.39C18.46 9.79 18.26 10.14 17.96 10.4C17.66 10.66 17.31 10.84 16.95 10.93L16.95 15.19Z"
              fill="currentColor"
            />
          </svg>
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
