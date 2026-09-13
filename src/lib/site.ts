export const SITE = {
  name: "TwoStack",
  url: "https://twostack.lk",
  locale: "en_LK",
  language: "en-LK",
  email: "twostacklk@gmail.com",
  phoneDisplay: "+94 76 773 2288",
  phoneE164: "+94767732288",
  whatsapp: "https://wa.me/94767732288",
  location: "Colombo, Sri Lanka",
  region: "Western Province",
  country: "Sri Lanka",
  description:
    "TwoStack is a software development Agency in Colombo, Sri Lanka building high-performance web applications, ecommerce systems, mobile apps, POS platforms, custom software and AI automation.",
  social: {
    linkedin: "https://www.linkedin.com/company/twostack-lk",
    facebook: "https://www.facebook.com/twostack.lk",
    instagram: "https://www.instagram.com/twostack.lk",
  },
} as const;

export const SERVICE_LINKS = [
  {
    label: "Web Development",
    href: "/services/web-development",
    short: "High-performance websites and web applications.",
  },
  {
    label: "Ecommerce Development",
    href: "/services/ecommerce-development",
    short: "Custom ecommerce storefronts, operations and payments.",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-development",
    short: "iOS and Android applications connected to real business systems.",
  },
  {
    label: "POS System Development",
    href: "/services/pos-system-development",
    short: "Retail POS, stock, billing and branch operations.",
  },
  {
    label: "AI Automation",
    href: "/services/ai-automation",
    short: "AI assistants and workflow automation connected to business data.",
  },
  {
    label: "Custom Software Development",
    href: "/services/custom-software-development",
    short: "Purpose-built portals, dashboards and operational software.",
  },
] as const;

export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "What we build", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact us", href: "/contact" },
] as const;
