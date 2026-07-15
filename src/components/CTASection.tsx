// File: src/components/CTASection.tsx

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  // ✅ FIXED: Using 'as const' to lock the type
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  // OR with custom easing:
  // const fadeUpVariants = {
  //   hidden: { opacity: 0, y: 24 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: "easeOut" as const as const }
  //   }
  // };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const serviceOptions = [
    { id: "presence", label: "Presence Layer (Website, App)" },
    { id: "automation", label: "Automation Layer (WhatsApp AI, Workflows)" },
    { id: "intelligence", label: "Intelligence Layer (Dashboards, Analytics)" },
    { id: "full", label: "Full System (All Three Layers)" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let serviceList = '';
    if (formData.services.length > 0) {
      serviceList = formData.services.map((id, index) => {
        const option = serviceOptions.find(s => s.id === id);
        return option ? `${index + 1}. ${option.label}` : '';
      }).filter(Boolean).join('%0A');
    } else {
      serviceList = 'Not specified';
    }

    const message = 
      `Hi Two Stack!%0A%0A` +
      `📋 *New Project Enquiry*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📱 *Phone:* ${formData.phone || 'Not provided'}%0A%0A` +
      `🔧 *Services interested in:*%0A${serviceList}`;

    const whatsappLink = `https://wa.me/947732288?text=${message}`;

    window.open(whatsappLink, '_blank');

    setFormData({ name: "", email: "", phone: "", services: [] });
    setIsSubmitting(false);
  };

  const whatsappLink = "https://wa.me/94767732288?text=Hi%20Two%20Stack%2C%20I'd%20like%20to%20start%20a%20project.";

  // Social Links - Using img tags to avoid Next.js Image warnings
  const SOCIAL_LINKS = [
    { name: "Facebook", href: "#", icon: "/images/social/facebook.png" },
    { name: "Instagram", href: "#", icon: "/images/social/instagram.png" },
    { name: "LinkedIn", href: "#", icon: "/images/social/linkedin.png" },
    { name: "Behance", href: "#", icon: "/images/social/behance.png" },
    { name: "Dribbble", href: "#", icon: "/images/social/dribbble.png" },
  ];

  return (
    <>
      <div className="w-full h-16 md:h-28 bg-[#fdfdfe]" />

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#fdfdfe] pt-40 pb-16 md:pt-56 md:pb-20 px-6"
      >
        <div
          className="absolute inset-0 bg-[#060606] overflow-hidden [border-radius:50%_50%_0_0/100px_100px_0_0] md:[border-radius:50%_50%_0_0/260px_260px_0_0]"
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vwAAACCCwTTAAAABnRSTlMAMwCFP1T6tV1zAAAAPklEQVQ4y2NgGAWjYBSMglEwCgYZmBgcHRyZGBicmNycGZgYXN0cuRkYHNxB2omJgcnDEQ4cGBgYXBjhNqMAlacK4RttNHEAAAAASUVORK5CYII=")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '64px 64px',
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
              Let's work together
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="mt-5 font-satoshi font-bold text-white leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              Got an idea worth
              <br />
              building properly?
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 font-inter text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
            >
              Tell us what you're trying to solve. We'll tell you exactly how we'd build it —
              no jargon, no fluff.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
          >
            <div className="lg:col-span-3">
              <div className="bg-[#fbfcfc] rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm h-full">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 font-inter text-sm text-black placeholder:text-gray-400 outline-none focus:border-black/30 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 font-inter text-sm text-black placeholder:text-gray-400 outline-none focus:border-black/30 transition-all duration-300"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 font-inter text-sm text-black placeholder:text-gray-400 outline-none focus:border-black/30 transition-all duration-300"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="font-inter text-black/60 text-xs uppercase tracking-wider block mb-3">
                      What are you interested in?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceOptions.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center gap-2.5 font-inter text-sm text-black/70 cursor-pointer hover:text-black transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="w-4 h-4 rounded border-gray-300 bg-white text-[#25D366] focus:ring-[#25D366] focus:ring-offset-0 cursor-pointer"
                          />
                          {service.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-[#25D366] text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-[#1DA851] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                  </motion.button>

                  <p className="mt-3 font-inter text-black/40 text-xs text-center">
                    Our team replies quickly!
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#fbfcfc] rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm">
                <p className="font-inter text-black/40 text-xs uppercase tracking-wider mb-4">
                  Contact
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-inter text-black/40 text-xs mb-1">Email</p>
                    <a href="mailto:hello@twostack.com" className="font-inter text-black/80 hover:text-black transition-colors text-sm">
                      twostacklk@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-inter text-black/40 text-xs mb-1">WhatsApp</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-inter text-black/80 hover:text-black transition-colors text-sm">
                      +94 76 773 2288
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-inter text-black/40 text-xs mb-1">Location</p>
                    <p className="font-inter text-black/80 text-sm">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#fbfcfc] rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm">
                <p className="font-inter text-black/40 text-xs uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-black/30 hover:bg-gray-50 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
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
