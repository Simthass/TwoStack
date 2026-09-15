export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: string;
  metadataTitle: string;
  description: string;
  intro: string;
  problems: readonly string[];
  capabilities: readonly { title: string; body: string }[];
  systems: readonly { label: string; body: string }[];
  outcomes: readonly string[];
  localNote: string;
  faqs: readonly { question: string; answer: string }[];
};

export const SERVICES: Record<string, ServicePageData> = {
  "web-development": {
    slug: "web-development",
    eyebrow: "Web systems / Sri Lanka",
    title: "Web Development in Sri Lanka that does more than just look good.",
    metadataTitle: "Web Development in Sri Lanka",
    description:
      "Web Development in Sri Lanka by TwoStack. We build fast websites, portals, dashboards and AI-powered web apps for growing businesses.",
    intro:
      "TwoStack builds websites and web apps that have a real job to do: bring in more enquiries, handle customer requests, connect with your other tools, and load fast even on an average mobile connection.",
    problems: [
      "A website that looks fine but doesn't bring in real enquiries.",
      "Slow loading on mobile, or a site held together with too many plugins.",
      "Staff doing the same admin work by hand behind a nice-looking site.",
      "Your website, spreadsheet and reports don't talk to each other.",
    ],
    capabilities: [
      {
        title: "Next.js & React websites",
        body: "Modern, fast-loading websites and web apps built with images, caching and speed handled properly from day one.",
      },
      {
        title: "Custom portals & dashboards",
        body: "Login areas for customers or staff, admin panels, and dashboards built around how your team actually works.",
      },
      {
        title: "AI-powered features",
        body: "Smart search, chat assistants and automatic document handling — added only where they genuinely save time, not for show.",
      },
      {
        title: "APIs & backend systems",
        body: "The behind-the-scenes part of your website: secure logins, databases, integrations and background tasks, all built as one connected system.",
      },
      {
        title: "SEO-ready from the start",
        body: "Clean page structure, fast load times, proper page titles and links Google can actually crawl and understand.",
      },
      {
        title: "Analytics & conversions",
        body: "Simple tracking that shows where visitors come from, what they click, and where you're losing potential customers.",
      },
    ],
    systems: [
      {
        label: "01 / Presence",
        body: "Fast public pages that are easy to navigate, easy to find on Google, and built to turn visitors into enquiries.",
      },
      {
        label: "02 / Operations",
        body: "Login areas, dashboards, and automated tasks working quietly behind the public website.",
      },
      {
        label: "03 / Intelligence",
        body: "Reports, search and AI features that use your real business data — not guesswork.",
      },
    ],
    outcomes: [
      "A faster site on mobile",
      "Better quality enquiries",
      "Less manual admin work",
      "A website you can keep growing",
    ],
    localNote:
      "For Sri Lankan businesses, we build around how people actually browse here: mostly on mobile, often through WhatsApp, and paying in LKR — using the payment and business tools your team already relies on.",
    faqs: [
      {
        question: "Do you build AI-powered websites in Sri Lanka?",
        answer:
          "Yes. We add AI features like smart search, chat assistants and document handling where they genuinely save time. We don't add AI just to tick a box.",
      },
      {
        question:
          "Can you rebuild my existing website without losing my Google ranking?",
        answer:
          "Yes. Before rebuilding, we map out your current pages, set up proper redirects, carry over your page titles and descriptions, and check everything is indexed correctly after launch — so you don't lose the ranking you've already earned.",
      },
      {
        question: "Do you only build marketing websites?",
        answer:
          "No. Alongside marketing websites, we build customer portals, staff dashboards, internal tools and full web applications with their own backend systems.",
      },
      {
        question: "What technology do you use for web development?",
        answer:
          "It depends on the project, but we typically use Next.js, React, TypeScript, Node.js, Python and modern cloud databases.",
      },
    ],
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    eyebrow: "Commerce systems / Sri Lanka",
    title:
      "Ecommerce Development in Sri Lanka, built for the sale and everything after it.",
    metadataTitle: "Ecommerce Development in Sri Lanka",
    description:
      "Ecommerce Development in Sri Lanka by TwoStack. Fast online stores with payments, stock, order tracking, automation and reports, all in one system.",
    intro:
      "A good online store is more than a product page and a checkout button. We connect your storefront to stock levels, orders, payments, customer messages, delivery and the day-to-day admin work that keeps the store running.",
    problems: [
      "The store slows down as more products get added.",
      "Orders get copied by hand from one system to another.",
      "Stock numbers don't match between the website and the shop.",
      "Customers keep asking for order updates the system should already show them.",
    ],
    capabilities: [
      {
        title: "Custom online stores",
        body: "Fast product browsing, search, filters and product pages designed to turn browsers into buyers.",
      },
      {
        title: "Checkout & payments",
        body: "A secure, simple checkout connected to the payment methods that make sense for your customers.",
      },
      {
        title: "Stock & order management",
        body: "One place to manage stock levels, order status, cancellations, returns and delivery — no more guessing.",
      },
      {
        title: "Automatic customer updates",
        body: "Emails, WhatsApp messages and order-status alerts sent automatically as things happen — no manual typing.",
      },
      {
        title: "Admin dashboard & reports",
        body: "A simple dashboard for managing products, orders, customers, discounts and sales performance.",
      },
      {
        title: "Ecommerce SEO built in",
        body: "Category pages, product pages and site structure built so Google can find and rank your store properly.",
      },
    ],
    systems: [
      {
        label: "01 / Storefront",
        body: "The shopping experience customers see: browsing, product pages, cart and checkout.",
      },
      {
        label: "02 / Store operations",
        body: "Products, stock, customers, orders, payments, discounts and delivery, all in one place.",
      },
      {
        label: "03 / Automation",
        body: "Notifications, order updates and reports triggered automatically as orders come in.",
      },
    ],
    outcomes: [
      "Fewer manual order steps",
      "Accurate stock numbers",
      "Faster page loading",
      "Better customer updates",
    ],
    localNote:
      "Sri Lankan online stores usually need a mix of card payments, bank transfers, cash on delivery, and WhatsApp for customer updates. We build around how your customers actually shop, not a generic template made for a different market.",
    faqs: [
      {
        question: "Can you connect Sri Lankan payment gateways to my store?",
        answer:
          "Yes. We set up the payment options that fit your business, including Sri Lankan bank and payment-provider gateways as well as international options if you need them.",
      },
      {
        question: "Can you move my existing store to a new platform?",
        answer:
          "Yes. We plan the move carefully — products, customers, past orders, URLs and SEO content — so the new store launches without losing what you've already built.",
      },
      {
        question: "Do you build the admin side of the store too?",
        answer:
          "Yes. That includes managing products, stock, orders, discounts, returns, customers and reports, with the right access for each staff member.",
      },
      {
        question: "Is SEO included when you build an ecommerce store?",
        answer:
          "Yes, the technical side is: clean category and product page structure, fast load times, proper page titles and search-friendly URLs. Ongoing content and marketing are a separate, ongoing effort.",
      },
    ],
  },
  "mobile-development": {
    slug: "mobile-development",
    eyebrow: "Mobile products / Sri Lanka",
    title:
      "Mobile App Development in Sri Lanka, connected to the business behind the app.",
    metadataTitle: "Mobile Application Development in Sri Lanka",
    description:
      "Mobile App Development in Sri Lanka by TwoStack. Secure iOS and Android apps with logins, notifications, offline support and full backend systems.",
    intro:
      "We build mobile apps as part of a complete system, not on their own. The app, the backend, the logins, the notifications and the admin tools are all designed together, instead of being split between different vendors who don't talk to each other.",
    problems: [
      "The app looks good, but the backend can't handle real usage.",
      "Poor internet connection causes lost data or broken screens.",
      "Push notifications are sent too often and get ignored.",
      "The app and the website follow different rules for the same thing.",
    ],
    capabilities: [
      {
        title: "iOS & Android apps",
        body: "Built either cross-platform or natively, depending on what fits your app, your budget and your users best.",
      },
      {
        title: "Secure logins & APIs",
        body: "Safe logins and a solid backend that follows the same rules as the rest of your business systems.",
      },
      {
        title: "Works with a weak connection",
        body: "The app keeps working, saves data locally and syncs later when a workflow can't just fail on poor signal.",
      },
      {
        title: "Smart notifications",
        body: "Notifications sent only when something actually matters, with settings the user can control.",
      },
      {
        title: "App usage tracking",
        body: "We track what people actually do in the app — sign-ups, usage, drop-offs — not just download numbers.",
      },
      {
        title: "Admin & support tools",
        body: "A simple back-office for your team to manage users, content, orders or support requests behind the app.",
      },
    ],
    systems: [
      {
        label: "01 / The app",
        body: "A smooth, responsive app that feels native and works well on different screen sizes.",
      },
      {
        label: "02 / The backend",
        body: "Secure logins, data handling, and reliable connections between the app and your systems.",
      },
      {
        label: "03 / Operations",
        body: "Admin tools, notifications and support features that keep the app manageable day to day.",
      },
    ],
    outcomes: [
      "Consistent rules across app & website",
      "Fewer issues in low-signal areas",
      "Notifications people actually read",
      "An app that's easy to maintain",
    ],
    localNote:
      "For Sri Lankan users, we pay close attention to the wide range of Android phones in use, patchy mobile data, and keeping the app usable even when the connection isn't great.",
    faqs: [
      {
        question: "Do you build both Android and iOS apps in Sri Lanka?",
        answer:
          "Yes. We build for Android and iOS, choosing a cross-platform or native approach depending on what the app needs.",
      },
      {
        question: "Can a mobile app connect to my existing system?",
        answer:
          "Yes, as long as your current system, CRM or online store has a way to connect to it safely. We check this during the planning stage.",
      },
      {
        question: "Do you also build the backend and admin panel?",
        answer:
          "Yes. Most mobile projects include the backend, logins, notifications and an admin area for your team.",
      },
      {
        question: "Can the app work when there's no internet connection?",
        answer:
          "Yes, where needed. We design the app to save data locally and sync it once the connection comes back, rather than assuming the internet is always available.",
      },
    ],
  },
  "erp-systems-development": {
    slug: "erp-systems-development",
    eyebrow: "Business operations / Sri Lanka",
    title:
      "ERP Systems Development in Sri Lanka, built around how your business actually runs.",
    metadataTitle: "ERP Systems Development in Sri Lanka",
    description:
      "ERP Systems Development in Sri Lanka by TwoStack. POS, inventory, finance, HR, procurement and reporting, all connected in one system.",
    intro:
      "We build ERP systems for businesses that have outgrown disconnected tools and spreadsheets. Point of sale, inventory, finance, HR, procurement and reporting all work off the same, shared information.",
    problems: [
      "The till, the stock room and the accounts don't agree on numbers.",
      "Branch, warehouse and department data arrives late, or only in spreadsheets.",
      "Staff have more access than their role should allow.",
      "Management can't quickly see sales, stock, payroll or margins in one place.",
    ],
    capabilities: [
      {
        title: "POS & billing",
        body: "Fast checkout, discounts, taxes, receipts, returns and exceptions handled properly, not with a workaround.",
      },
      {
        title: "Inventory & stock control",
        body: "Products, variants, stock movements, low-stock alerts and a clear record of every change.",
      },
      {
        title: "Finance & accounts",
        body: "Invoicing, expenses, payments and reconciliation connected to real transactions, not a separate spreadsheet.",
      },
      {
        title: "HR & payroll",
        body: "Staff records, attendance, roles and payroll runs connected to the same data as the rest of the business.",
      },
      {
        title: "Procurement & suppliers",
        body: "Purchase orders, receiving stock, and supplier records connected to real transactions.",
      },
      {
        title: "Multi-branch & reporting",
        body: "Each branch or department has its own data, with transfers, activity logs and management dashboards handled centrally.",
      },
    ],
    systems: [
      {
        label: "01 / Counter & operations",
        body: "A quick, simple point-of-sale and day-to-day operations layer built for speed and everyday use.",
      },
      {
        label: "02 / ERP core",
        body: "POS, inventory, finance, HR, procurement, branches and staff, all connected.",
      },
      {
        label: "03 / Management",
        body: "Central admin, reports, activity logs and connections to other systems.",
      },
    ],
    outcomes: [
      "More accurate stock and financial numbers",
      "Faster checkout and daily operations",
      "Clear view across branches and departments",
      "A record of every change",
    ],
    localNote:
      "The system can be built around how Sri Lankan businesses actually run: LKR pricing, multiple branches, barcode scanning, EPF/ETF-ready payroll, local receipt formats, and whatever hardware your team already uses.",
    faqs: [
      {
        question:
          "Can TwoStack build a custom ERP system for my Sri Lankan business?",
        answer:
          "Yes. We build custom ERP systems, including POS, when off-the-shelf software doesn't fit how you work, or doesn't connect to the reports and tools you need.",
      },
      {
        question: "Does the ERP system include POS as well as other modules?",
        answer:
          "Yes. POS sits alongside inventory, finance, HR and procurement as one connected module, rather than a separate disconnected tool.",
      },
      {
        question:
          "Can the ERP system work across multiple branches or departments?",
        answer:
          "Yes. Each branch or department can have its own staff, stock and records, with transfers and shared reporting managed from head office.",
      },
      {
        question: "Can ERP stock and sales data connect to my online store?",
        answer:
          "Yes, if you need one shared stock and sales count across both, we can connect them through a shared backend so numbers stay accurate everywhere.",
      },
      {
        question: "Do you support barcode scanners and receipt printers?",
        answer:
          "In most cases, yes. We confirm the exact printer, scanner and other hardware during the planning stage, since this varies by supplier.",
      },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    eyebrow: "AI & workflow systems / Sri Lanka",
    title:
      "AI Automation in Sri Lanka, connected to real work — not just a demo chatbot.",
    metadataTitle: "AI Automation in Sri Lanka",
    description:
      "AI Automation services in Sri Lanka by TwoStack. Multilingual assistants, document handling, smart routing, reports and automation connected to your systems.",
    intro:
      "We use AI where it actually saves time, makes information easier to find, or speeds up a task. The AI model on its own isn't the useful part — it's the permissions, the data, and the way it connects to your systems that make it actually work.",
    problems: [
      "Your team keeps answering the same questions over and over.",
      "Information is scattered across inboxes, documents and different tools.",
      "Automations fail quietly, and no one notices until it's too late.",
      "Chatbots can talk, but can't safely get real work done.",
    ],
    capabilities: [
      {
        title: "Multilingual AI assistants",
        body: "Assistants for customers or staff that work in English, Tamil and Sinhala, built around the language your customers actually use.",
      },
      {
        title: "Smart document search",
        body: "Quick answers pulled from your own approved documents and information — with the source shown, not made up.",
      },
      {
        title: "Automated workflows",
        body: "AI helps sort, route and follow up on tasks, while your business rules stay firmly in control.",
      },
      {
        title: "Human approval where it matters",
        body: "For important decisions, a person can review and approve before anything happens — the AI doesn't get free rein.",
      },
      {
        title: "Full activity tracking",
        body: "A record of what the AI did, what worked and what didn't, so it can be reviewed and improved over time.",
      },
      {
        title: "Connects to your other tools",
        body: "Links to your website, CRM, online store, database, email or WhatsApp through secure connections.",
      },
    ],
    systems: [
      {
        label: "01 / Input",
        body: "Messages, documents or business events come in through a controlled, secure channel.",
      },
      {
        label: "02 / AI processing",
        body: "The AI sorts, searches or suggests next steps, using only the information it's allowed to see.",
      },
      {
        label: "03 / Action",
        body: "Your business rules and any required approvals decide what actually changes in your systems.",
      },
    ],
    outcomes: [
      "Less repetitive admin work",
      "Faster answers to common questions",
      "AI actions kept under control",
      "A clear record of what happened",
    ],
    localNote:
      "Sri Lankan businesses often talk to customers across WhatsApp, email and more than one language. We build AI automation around those real channels, instead of assuming everything should be handed off to a chatbot.",
    faqs: [
      {
        question: "Can you build a Sinhala or Tamil AI assistant?",
        answer:
          "Yes. We can build assistants for Sinhala, Tamil and English. We test the quality against your actual content and customer questions, not just a generic demo.",
      },
      {
        question: "Can AI automation connect to the software we already use?",
        answer:
          "Usually, yes — as long as your current software allows safe connections. We check what can be connected safely during the planning stage.",
      },
      {
        question: "Do you use AI agents to automate tasks?",
        answer:
          "Where it makes sense, yes. But we always match the level of AI control to how risky the action is, and keep human approval in place for anything important.",
      },
      {
        question: "How do you stop the AI from making things up?",
        answer:
          "We use a mix of approaches depending on the use case: pulling only from approved sources, adding checks, and requiring human approval for anything high-stakes. No method removes the risk completely, so we design around what happens if the AI gets something wrong.",
      },
    ],
  },
  "custom-software-development": {
    slug: "custom-software-development",
    eyebrow: "Custom software / Sri Lanka",
    title:
      "Custom Software Development in Sri Lanka, shaped around how you actually work.",
    metadataTitle: "Custom Software Development in Sri Lanka",
    description:
      "Custom Software Development in Sri Lanka by TwoStack. Business portals, workflow systems, dashboards, admin tools, integrations and automation.",
    intro:
      "When spreadsheets, disconnected apps and manual hand-offs start to slow the business down, we replace that friction with software built around how your team actually works.",
    problems: [
      "The business has outgrown its spreadsheets.",
      "Staff are typing the same information into multiple tools.",
      "Reports take hours because someone has to pull the numbers together by hand.",
      "Off-the-shelf software forces your team to work the wrong way.",
    ],
    capabilities: [
      {
        title: "Operational systems",
        body: "Software built specifically for the day-to-day workflows that keep your business running.",
      },
      {
        title: "Staff & client portals",
        body: "Login areas built around each type of user, showing only what they need to see and do.",
      },
      {
        title: "Business dashboards",
        body: "Clear reports pulled straight from your live data — not a spreadsheet someone updates by hand.",
      },
      {
        title: "Connecting your tools",
        body: "APIs and syncing between systems that should be sharing data but currently aren't.",
      },
      {
        title: "Task automation",
        body: "Automating the repetitive, rules-based tasks that take up your team's time.",
      },
      {
        title: "Ongoing support",
        body: "Testing, updates, security checks and improvements after the system is live.",
      },
    ],
    systems: [
      {
        label: "01 / Your workflow",
        body: "We map out how the work actually happens before designing any screens or databases.",
      },
      {
        label: "02 / The platform",
        body: "Interfaces, business logic, data and integrations built together as one working product.",
      },
      {
        label: "03 / Day-to-day running",
        body: "Monitoring, records, support and reporting that make the system easy to manage after launch.",
      },
    ],
    outcomes: [
      "Fewer duplicate tools",
      "Less repeated data entry",
      "Clearer visibility into operations",
      "Software that fits how you work",
    ],
    localNote:
      "TwoStack is based in Colombo and can work directly with your team to understand your day-to-day operations, existing software and approval processes before we scope the build.",
    faqs: [
      {
        question: "What counts as custom software development?",
        answer:
          "Things like internal workflow systems, customer portals, admin tools, dashboards, booking or order systems, integrations, and software built for a specific industry.",
      },
      {
        question: "Can you replace our spreadsheets with proper software?",
        answer:
          "Yes, when a spreadsheet has basically become your operational system. We first map out what it's doing so none of the useful logic gets lost when we replace it.",
      },
      {
        question: "Can custom software connect to the tools we already use?",
        answer:
          "Yes, as long as those tools allow safe connections. We're upfront about what can and can't be connected rather than hiding limitations.",
      },
      {
        question: "Do you offer support after the system goes live?",
        answer:
          "Yes. Ongoing support can include bug fixes, security updates, monitoring and planned improvements, based on the support plan we agree on.",
      },
    ],
  },
};

export const SERVICE_ORDER = [
  "web-development",
  "ecommerce-development",
  "mobile-development",
  "erp-systems-development",
  "ai-automation",
  "custom-software-development",
] as const;
