"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const serviceOptions = [
    { id: "web", label: "Web Development & Web Applications" },
    { id: "ecommerce", label: "Ecommerce Development" },
    { id: "mobile", label: "Mobile Application Development" },
    { id: "erp", label: "ERP Systems Development" },
    { id: "ai", label: "AI & Workflow Automation" },
    { id: "custom", label: "Custom Software Development" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let serviceList = "";
    if (formData.services.length > 0) {
      serviceList = formData.services
        .map((id, index) => {
          const option = serviceOptions.find((s) => s.id === id);
          return option ? `${index + 1}. ${option.label}` : "";
        })
        .filter(Boolean)
        .join("%0A");
    } else {
      serviceList = "Not specified";
    }

    const message =
      `Hi%20TwoStack!%0A%0A` +
      `📋%20*New%20Project%20Enquiry*%0A%0A` +
      `👤%20*Name:*%20${encodeURIComponent(formData.name)}%0A` +
      `📧%20*Email:*%20${encodeURIComponent(formData.email)}%0A` +
      `📱%20*Phone:*%20${encodeURIComponent(formData.phone || "Not provided")}%0A%0A` +
      `🔧%20*Services:*%0A${serviceList}`;

    const whatsappLink = `https://wa.me/94767732288?text=${message}`;
    window.open(whatsappLink, "_blank");

    setFormData({ name: "", email: "", phone: "", services: [] });
    setIsSubmitting(false);
  };

  const SOCIAL_LINKS = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/twostack.lk",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/twostack.lk",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/twostack-lk",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="w-full h-16 md:h-28 bg-[#ffffff]" />

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#ffffff] pt-40 pb-16 md:pt-56 md:pb-20 px-6"
      >
        <div className="absolute inset-0 bg-[#000000] overflow-hidden [border-radius:50%_50%_0_0/100px_100px_0_0] md:[border-radius:50%_50%_0_0/260px_260px_0_0]">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vwAAACCCwTTAAAABnRSTlMAMwCFP1T6tV1zAAAAPklEQVQ4y2NgGAWjYBSMglEwCgYZmBgcHRyZGBicmNycGZgYXN0cuRkYHNxB2omJgcnDEQ4cGBgYXBjhNqMAlacK4RttNHEAAAAASUVORK5CYII=")`,
                backgroundRepeat: "repeat",
                backgroundSize: "64px 64px",
              }}
            />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-[1100px] mx-auto"
        >
          <div className="text-center mb-10 md:mb-14">
            <motion.span
              variants={fadeUpVariants}
              className="inline-block font-inter text-[13px] uppercase tracking-wider text-white/40"
            >
              Book a free consultation
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="mt-5 font-satoshi font-bold text-white leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              Let&apos;s talk about your project
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 font-inter text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Tell us what you need. Our team will get back to you with a clear
              plan and a straightforward quote.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8"
          >
            <div className="lg:col-span-3">
              <div className="bg-[#ffffff] rounded-2xl p-6 md:p-8 border border-black/10 shadow-sm h-full">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 font-inter text-sm text-black placeholder:text-black/30 outline-none focus:border-black/30 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 font-inter text-sm text-black placeholder:text-black/30 outline-none focus:border-black/30 transition-all duration-300"
                        placeholder="hello@company.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="phone"
                      className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-1.5"
                    >
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 font-inter text-sm text-black placeholder:text-black/30 outline-none focus:border-black/30 transition-all duration-300"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-3">
                      What do you need help with?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceOptions.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center gap-2.5 font-inter text-xs text-black/70 cursor-pointer hover:text-black transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="w-4 h-4 rounded border-black/20 bg-white text-black focus:ring-black focus:ring-offset-0 cursor-pointer"
                          />
                          {service.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full bg-black text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-black/85 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#ffffff] rounded-2xl p-6 md:p-8 border border-black/10 shadow-sm">
                <p className="font-inter text-black/40 text-xs uppercase tracking-wider mb-4">
                  Contact details
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-inter text-black/40 text-xs mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:twostacklk@gmail.com"
                      className="font-inter text-black/80 hover:text-black transition-colors text-sm font-medium"
                    >
                      twostacklk@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="font-inter text-black/40 text-xs mb-1">
                      Phone / WhatsApp
                    </p>
                    <a
                      href="https://wa.me/94767732288"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-black/80 hover:text-black transition-colors text-sm font-medium"
                    >
                      +94 76 773 2288
                    </a>
                  </div>

                  <div>
                    <p className="font-inter text-black/40 text-xs mb-1">
                      Physical Location
                    </p>
                    <p className="font-inter text-black/80 text-sm">
                      Colombo, Western Province, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#ffffff] rounded-2xl p-6 md:p-8 border border-black/10 shadow-sm">
                <p className="font-inter text-black/40 text-xs uppercase tracking-wider mb-4">
                  Follow us
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition-all duration-300 shadow-sm"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
