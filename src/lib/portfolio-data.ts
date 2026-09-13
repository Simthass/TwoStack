export type CaseStudy = {
  slug: string;
  name: string;
  eyebrow: string;
  metadataTitle: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: readonly { src: string; alt: string }[];
  tags: readonly string[];
  stack: readonly string[];
  about: string;
  challenge: string;
  approach: string;
  delivered: string;
  keyFeatures: readonly string[];
  reviewNote: string;
  githubUrl?: string;
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "faux-fur-boa": {
    slug: "faux-fur-boa",
    name: "Faux Fur Boa",
    eyebrow: "Ecommerce Development / Wholesale",
    metadataTitle: "Faux Fur Boa - Wholesale Ecommerce Platform",
    shortDescription:
      "A full-stack MERN wholesale platform for a professional-grade fur, button and fabric accessories business, built for bulk ordering, tiered pricing and real-time inventory control.",
    description:
      "Case study: Faux Fur Boa is a wholesale ecommerce platform built by TwoStack on the MERN stack, with tier-based bulk pricing, an admin control panel and role-based access for a fur and fabric accessories business.",
    heroImage: "/fauxfurboa.webp",
    heroImageAlt:
      "Faux Fur Boa wholesale ecommerce website shown on desktop, tablet and mobile",
    gallery: [
      {
        src: "/portfolio/Faux Fur Boa/FFB 1.webp",
        alt: "Faux Fur Boa - desktop storefront view",
      },
      {
        src: "/portfolio/Faux Fur Boa/FFB 2.webp",
        alt: "Faux Fur Boa - tablet catalogue view",
      },
      {
        src: "/portfolio/Faux Fur Boa/FFB 3.webp",
        alt: "Faux Fur Boa - mobile storefront view",
      },
      {
        src: "/portfolio/Faux Fur Boa/FFB 4.webp",
        alt: "Faux Fur Boa - full platform showcase",
      },
    ],
    tags: ["Wholesale", "B2B & B2C", "MERN Stack"],
    stack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Cloudinary",
    ],
    about:
      "Faux Fur Boa is a wholesale platform built for a business dealing in professional-grade fur materials, buttons and cloth accessories. It's a full-stack MERN application designed to serve both bulk B2B buyers and individual B2C customers from the same catalogue, with tier-based pricing, a full admin control panel, and the operational tooling a wholesale business actually runs on.",
    challenge:
      "A wholesale fur and fabric business needs more than a standard online shop template. Pricing has to change with quantity, the catalogue spans multiple categories - fur materials, buttons, accessories, toys - and staff need to manage products, orders and customers without touching the database directly. On top of that, the store has to serve two different buyer types at once: bulk wholesale accounts and regular retail customers, each with different expectations at checkout.",
    approach:
      "We built the storefront in React with Vite and Redux Toolkit for state management, and Tailwind CSS for a fast, responsive interface across categories, filtering and product detail pages. Bulk ordering is handled through a quantity-based pricing tier engine, so unit prices adjust automatically as order volume increases. The backend runs on Node.js, Express and MongoDB with Mongoose, secured with JWT authentication, bcrypt password hashing and role-based access control across Super Admin, Manager and Staff accounts. Cloudinary handles product imagery, and checkout supports both Stripe and PayPal, with a guest checkout option for customers who don't want to create an account.",
    delivered:
      "The delivered platform pairs a customer-facing storefront - catalogue browsing, bulk pricing, cart, wishlist and multi-step checkout - with a full admin control panel covering dashboard analytics, product and order management, bulk CSV/Excel product uploads, customer tier management and activity logging. Security was treated as a first-class requirement throughout: rate limiting, XSS and CSRF protection, input sanitisation and HTTPS enforcement sit underneath the day-to-day admin and shopping experience.",
    keyFeatures: [
      "Multi-category product catalogue with advanced filtering and search",
      "Quantity-based bulk pricing tiers for wholesale buyers",
      "Smart shopping cart with auto-save and wishlist",
      "Multi-step checkout with Stripe and PayPal, plus guest checkout",
      "JWT-based authentication with bcrypt password hashing",
      "Role-based access control (Super Admin, Manager, Staff)",
      "Admin dashboard with real-time sales and inventory analytics",
      "Bulk product upload via CSV/Excel",
      "Order processing, fulfilment and return/refund handling",
      "Customer database with tier management and purchase history",
      "Activity logging and audit trails for admin actions",
      "Rate limiting, XSS/CSRF protection and input sanitisation",
      "Responsive design across mobile, tablet and desktop",
      "Cloudinary-powered product image handling",
    ],
    reviewNote:
      "When assessing Faux Fur Boa, consider how the tiered pricing engine, catalogue structure and admin control system respond to the operational demands of a wholesale fur and fabric business. This page documents delivered functionality and implementation decisions; it does not claim revenue, traffic or conversion results the client has not provided and verified. Ask us for the relevant technical detail if you're planning a project with similar bulk-ordering or B2B/B2C requirements.",
    githubUrl: "https://github.com/Simthass/faux-fur-boa-Ecommerce",
  },
  "amazonshop-lk": {
    slug: "amazonshop-lk",
    name: "AmazonShop.lk",
    eyebrow: "Ecommerce Development / Retail",
    metadataTitle: "AmazonShop.lk - Mobile & Electronics Retail Platform",
    shortDescription:
      "An ecommerce platform for a Colombo-based mobile phone, accessories and desktop devices retailer, taking a walk-in-only store online with secure accounts, a live cart and an AI shopping assistant.",
    description:
      "Case study: AmazonShop.lk is an ecommerce platform built by TwoStack for a Colombo mobile phone and electronics retailer, with a production-grade authentication system, live cart and wishlist, and a Gemini-powered AI shopping assistant.",
    heroImage: "/project-2.webp",
    heroImageAlt:
      "AmazonShop.lk mobile and electronics ecommerce website shown on desktop, tablet and mobile",
    gallery: [
      {
        src: "/portfolio/AmazonShopLK/ASLK 1.webp",
        alt: "AmazonShop.lk - desktop storefront view",
      },
      {
        src: "/portfolio/AmazonShopLK/ASLK 2.webp",
        alt: "AmazonShop.lk - tablet catalogue view",
      },
      {
        src: "/portfolio/AmazonShopLK/ASLK 3.webp",
        alt: "AmazonShop.lk - mobile storefront view",
      },
      {
        src: "/portfolio/AmazonShopLK/ASLK 4.webp",
        alt: "AmazonShop.lk - full platform showcase",
      },
    ],
    tags: ["Retail", "Colombo, Sri Lanka", "MERN Stack"],
    stack: [
      "React",
      "Vite",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Stripe / PayHere",
      "Google Gemini API",
    ],
    about:
      "AmazonShop.lk is an ecommerce platform for a mobile phone, accessories and desktop devices retailer that, until this project, ran entirely out of a single physical store in Colombo. It's built as a full-stack MERN application with React and Vite on the frontend, and a security-first Node.js and Express backend handling authentication, sessions, orders and an AI-powered support assistant.",
    challenge:
      "The retailer operated walk-in only - no online ordering, no way to browse stock from home, and no digital sales channel for customers who preferred to shop online. The brief was to let customers browse, filter, add to cart and check out securely without visiting the store, while giving staff a clean admin dashboard to manage products, orders, customers and reviews without touching the database directly. The project was delivered sprint by sprint under a formal Agile process, with its own risk, quality and scheduling management alongside the build itself.",
    approach:
      "The storefront is built with React, Vite and Zustand for lightweight state management, styled with Tailwind CSS and backed by an Axios service layer. Authentication was treated as its own system rather than a bolt-on: customer and administrator logins use separate JWT secrets, audiences, cookies and session records, with short-lived access tokens held only in memory and refresh tokens delivered as HttpOnly cookies, hashed before they ever reach the database. Refresh-token rotation includes a grace window so multiple tabs and concurrent requests don't incorrectly revoke a valid session, and genuine token reuse revokes the entire session family. On top of that, we integrated Google OAuth account linking and a Google Gemini-powered chatbot for customer support and product recommendations.",
    delivered:
      "The current build is frontend-first by design: the customer-facing pages, admin layout and checkout flow are built out, with the authentication, session and account-security layer already production-grade - OTP email verification, password recovery, session device/browser tracking, one-click revocation of other sessions, and account export/deletion with anonymisation that preserves order records for accounting and fraud prevention. Some storefront sections still use placeholder data while the payment gateway and remaining admin features are completed in later sprints.",
    keyFeatures: [
      "Product catalogue with category and brand filtering",
      "Secure registration, login and profile management",
      "Separate customer and administrator authentication systems",
      "HttpOnly refresh cookies with rotation and reuse detection",
      "Google OAuth sign-in with safe account linking",
      "HMAC-hashed OTP email verification and password reset",
      "Session management - device, browser, IP and one-click revocation",
      "Live shopping cart and variant-aware wishlist with guest merge",
      "AI chatbot powered by Google Gemini for support and recommendations",
      "Order history and order status tracking with in-app notifications",
      "Retrying email delivery for order and account notifications",
      "Admin panel for products, categories, orders, users and reviews",
      "Account data export and deletion with anonymisation",
      "Administrator audit logging and account lockout protection",
    ],
    reviewNote:
      "When assessing AmazonShop.lk, consider how the authentication architecture, sprint-based delivery and account-security features respond to the goal of moving a walk-in-only retailer online. This page documents delivered functionality and implementation decisions at the current stage of a project still in active sprints; it does not claim revenue, traffic or conversion results the client has not provided and verified. Ask us for the relevant technical detail if you're planning a project with similar authentication or session-security requirements.",
    githubUrl: "https://github.com/Simthass/AmazonShopLK-Ecommerce-System",
  },
  "isports-cricket-store": {
    slug: "isports-cricket-store",
    name: "iSports Cricket Store",
    eyebrow: "Ecommerce Development / Sports Retail",
    metadataTitle: "iSports Cricket Store - UAE Cricket Ecommerce & Admin OS",
    shortDescription:
      "A premium ecommerce storefront and secure admin control system for a Dubai-based cricket specialist retailer, positioned as a leading destination for professional cricket gear in the UAE.",
    description:
      "Case study: iSports Cricket Store is a Next.js 14 ecommerce platform built by TwoStack for a UAE cricket equipment retailer, with a custom-built admin control system, WhatsApp automation and role-based access control.",
    heroImage: "/project-3.webp",
    heroImageAlt:
      "iSports Cricket Store ecommerce website shown on desktop, tablet and mobile",
    gallery: [
      {
        src: "/portfolio/iSports/iSports 1.webp",
        alt: "iSports Cricket Store - desktop storefront view",
      },
      {
        src: "/portfolio/iSports/iSports 2.webp",
        alt: "iSports Cricket Store - tablet catalogue view",
      },
      {
        src: "/portfolio/iSports/iSports 3.webp",
        alt: "iSports Cricket Store - mobile storefront view",
      },
      {
        src: "/portfolio/iSports/iSports 4.webp",
        alt: "iSports Cricket Store - full platform showcase",
      },
    ],
    tags: ["Sports Retail", "UAE", "Next.js 14"],
    stack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Prisma",
      "NextAuth.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    about:
      "iSports Cricket Store is an ecommerce platform built for a cricket equipment retailer serving the UAE, stocking gear from brands including Gray-Nicolls, SS Sports, Kookaburra, MRF and Shrey. The project pairs a fast, SEO-friendly customer storefront with a custom-built admin control system designed to run day-to-day retail operations - stock, orders, customers and WhatsApp communication - from one place.",
    challenge:
      "A specialist sports retailer needed a storefront that could showcase gear from several well-known brands clearly, load quickly, and rank well for cricket-equipment searches in the UAE. Behind the scenes, the business needed real operational tooling: a way to track revenue, orders and low stock at a glance, manage a catalogue organised by category and brand, and communicate with customers over WhatsApp - the channel most of their customers already use - without that turning into a manual, error-prone process.",
    approach:
      "We used Next.js 14 with the App Router and Server Components for performance and SEO, TypeScript throughout, and Prisma over a serverless Neon Postgres database, connecting through Neon's HTTP driver to work reliably within serverless edge limits. NextAuth.js handles role-based authentication, with middleware restricting the entire /admin directory to accounts holding the ADMIN role, and bcrypt-hashed credentials seeded through an automated script. The admin interface was designed as its own product - a dark, glassmorphic 'Spatial UI' with a bento-grid dashboard, Framer Motion micro-interactions and a Cmd+K global search - built to feel fast and precise for daily use, not just as a back-office afterthought.",
    delivered:
      "The delivered admin system covers real-time KPI tracking (revenue in AED, active orders, customers, low-stock alerts), full product CRUD across categories and brands, order tracking, a customer CRM, and a dedicated WhatsApp automation module for messaging templates, order confirmations and support. The customer storefront supports brand and category filtering and includes a custom animated 404 page, while role-based access control keeps the admin system restricted to authenticated ADMIN accounts only.",
    keyFeatures: [
      "Real-time dashboard with revenue (AED), orders, customers and stock KPIs",
      "Full product CRUD across cricket bats, pads, helmets and accessories",
      "Category and brand-based inventory organisation",
      "Centralised order tracking and processing hub",
      "Customer CRM with purchase history and activity tracking",
      "Dedicated WhatsApp automation module for templates and order updates",
      "Global Cmd+K search across products, orders and customers",
      "Real-time notification system for low stock and store activity",
      "Role-based access control restricting /admin to ADMIN accounts",
      "Automated, bcrypt-secured database seeding for admin accounts",
      "Brand and category filtering on the customer storefront",
      "Custom animated 404 page with kinetic typography",
      "Server Components and serverless Postgres for fast page loads",
    ],
    reviewNote:
      "When assessing iSports Cricket Store, consider how the admin system's architecture, security model and operational features respond to the demands of running a multi-brand specialist retail business. This page documents delivered functionality and implementation decisions; it does not claim revenue, traffic or conversion results the client has not provided and verified. Ask us for the relevant technical detail if you're planning a project with similar catalogue or admin-tooling requirements.",
  },
};

export const CASE_STUDY_ORDER = [
  "faux-fur-boa",
  "amazonshop-lk",
  "isports-cricket-store",
] as const;
