export type ChatMessage = {
  from: "customer" | "bot";
  kind?: "text" | "voice" | "image";
  text: string;
  translation?: string;
  /** Voice note length, or image description (used as alt text for images). */
  meta?: string;
  /** Image path in /public, e.g. "/black-leather-wallet.png". */
  src?: string;
};
export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: string;
  metadataTitle: string;
  /** Optional longer, keyword-rich <title>. Falls back to metadataTitle. */
  seoTitle?: string;
  description: string;
  intro: string;
  problems: readonly string[];
  capabilities: readonly { title: string; body: string }[];
  systems: readonly { label: string; body: string }[];
  outcomes: readonly string[];
  localNote: string;
  faqs: readonly { question: string; answer: string }[];
  /** Slugs shown in "Related capabilities". Defaults to the first three other services. */
  related?: readonly string[];
  /** Optional internal link shown under the intro. */
  crossLink?: { text: string; label: string; href: string };
  /** Optional "see it in action" chat examples. */
  demo?: {
    heading: string;
    intro: string;
    note: string;
    chats: readonly { label: string; messages: readonly ChatMessage[] }[];
  };
  /** Optional language section. */
  languages?: {
    heading: string;
    intro: string;
    items: readonly {
      name: string;
      how: string;
      example: string;
      meaning?: string;
    }[];
  };
  /** Optional "who is this for" section. */
  audiences?: {
    heading: string;
    items: readonly { title: string; body: string }[];
  };
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
    eyebrow: "AI inside your software / Sri Lanka",
    title:
      "AI Software Automation in Sri Lanka, built into the tools your team already uses.",
    metadataTitle: "AI Software Automation in Sri Lanka",
    description:
      "AI software automation in Sri Lanka by TwoStack. Add AI to your own systems: smart document search, task routing, automatic reports and workflow automation.",
    intro:
      "We add AI to the software your business already runs on, so repetitive work gets done for you. That can mean finding answers in your documents, sorting and routing tasks, or writing reports automatically. The AI itself is only one part. What makes it useful is the data it can see, the permissions it has, and how safely it connects to your systems.",
    crossLink: {
      text: "Want an AI that chats with your customers on WhatsApp instead?",
      label: "See our WhatsApp AI chatbot",
      href: "/services/whatsapp-ai-chatbot",
    },
    problems: [
      "Your team keeps answering the same questions over and over.",
      "Information is scattered across inboxes, documents and different tools.",
      "Automations fail quietly, and no one notices until it's too late.",
      "Reports take hours because someone has to collect the numbers by hand.",
    ],
    capabilities: [
      {
        title: "AI assistants for your team",
        body: "Your staff ask questions in plain English, Sinhala or Tamil and get answers from your own company information, instead of searching through files.",
      },
      {
        title: "Smart document search",
        body: "Quick answers pulled from your own approved documents and information, with the source shown, not made up.",
      },
      {
        title: "Automated workflows",
        body: "AI helps sort, route and follow up on tasks, while your business rules stay firmly in control.",
      },
      {
        title: "Human approval where it matters",
        body: "For important decisions, a person can review and approve before anything happens. The AI doesn't get free rein.",
      },
      {
        title: "Full activity tracking",
        body: "A record of what the AI did, what worked and what didn't, so it can be reviewed and improved over time.",
      },
      {
        title: "Connects to your other tools",
        body: "Links to your website, CRM, online store, database or email through secure connections.",
      },
    ],
    systems: [
      {
        label: "01 / Input",
        body: "Documents, forms or business events come in through a controlled, secure channel.",
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
      "Many Sri Lankan teams work across English, Sinhala and Tamil, and keep information in a mix of spreadsheets, email and chat. We build AI automation around how your team really works, and we test it on your own content, not just a generic demo.",
    related: [
      "whatsapp-ai-chatbot",
      "custom-software-development",
      "web-development",
    ],
    faqs: [
      {
        question: "What is AI software automation?",
        answer:
          "It means adding AI to your business software so it can do routine work for you, such as finding answers in documents, sorting requests, writing summaries or preparing reports. People stay in charge of the important decisions.",
      },
      {
        question: "Is this the same as a WhatsApp chatbot?",
        answer:
          "No. A WhatsApp AI chatbot talks to your customers on WhatsApp. AI software automation works inside your own systems to help your team. Many businesses use both, and we can build them to share the same data. You can read about the chatbot on our WhatsApp AI chatbot page.",
      },
      {
        question: "Can you build a Sinhala or Tamil AI assistant?",
        answer:
          "Yes. We can build assistants for Sinhala, Tamil and English. We test the quality against your actual content and questions, not just a generic demo.",
      },
      {
        question: "Can AI automation connect to the software we already use?",
        answer:
          "Usually, yes, as long as your current software allows safe connections. We check what can be connected safely during the planning stage.",
      },
      {
        question: "Do you use AI agents to automate tasks?",
        answer:
          "Where it makes sense, yes. We match the level of AI control to how risky the action is, and keep human approval in place for anything important.",
      },
      {
        question: "How do you stop the AI from making things up?",
        answer:
          "We use a mix of approaches depending on the use case: pulling only from approved sources, adding checks, and requiring human approval for anything high-stakes. No method removes the risk completely, so we design around what happens if the AI gets something wrong.",
      },
    ],
  },
  "whatsapp-ai-chatbot": {
    slug: "whatsapp-ai-chatbot",
    eyebrow: "WhatsApp AI chatbot / Sri Lanka",
    title:
      "WhatsApp AI Chatbot in Sri Lanka that answers your customers in their own language.",
    metadataTitle: "WhatsApp AI Chatbot in Sri Lanka",
    seoTitle: "WhatsApp AI Chatbot for Business in Sri Lanka",
    description:
      "WhatsApp AI chatbot for Sri Lankan businesses. Replies 24/7 in Sinhala, Tamil, English, Singlish and Thanglish. Understands voice notes and product photos.",
    intro:
      "We build a custom AI chatbot for your business WhatsApp number. It answers customer questions about your products, prices, stock and orders, day and night. It understands Sinhala, Tamil, English, Singlish and Thanglish, listens to voice notes, and can recognise a product from a photo your customer sends.",
    crossLink: {
      text: "Want AI built into your own software instead?",
      label: "See AI software automation",
      href: "/services/ai-automation",
    },
    problems: [
      "Customers message at night and nobody replies until the next morning.",
      "Your team answers the same questions about price, stock and delivery all day.",
      "Customers send a voice note or a photo and ask, “Do you have this?”",
      "Customers write in Sinhala, Tamil or English letters, and replies take too long.",
    ],
    demo: {
      heading: "See how a conversation looks.",
      intro:
        "Here are three short examples of what your customers could experience on WhatsApp. The chatbot replies in the same language and style the customer used.",
      note: "These are example conversations. Your chatbot uses your own products, prices and tone of voice.",
      chats: [
        {
          label: "Singlish text message",
          messages: [
            {
              from: "customer",
              text: "Meka red colour M size thiyenawada?",
              translation: "Do you have this in red, size M?",
            },
            {
              from: "bot",
              text: "Ow, red M size thiyenawa. Rs. 3,900. Kandy walata delivery dawas 2–3k yanawa. Order karamu da?",
              translation:
                "Yes, red in size M is in stock. Rs. 3,900. Delivery to Kandy takes 2–3 days. Shall we place the order?",
            },
          ],
        },
        {
          label: "Thanglish voice note",
          messages: [
            {
              from: "customer",
              kind: "voice",
              meta: "0:07",
              text: "Anna, order 1042 eppo varum?",
              translation: "Brother, when will order 1042 arrive?",
            },
            {
              from: "bot",
              text: "Vanakkam! Order #1042 nethu dispatch aayiduchu. Naalaikku ungalukku kedaikkum.",
              translation:
                "Hello! Order #1042 was sent out yesterday. You will get it tomorrow.",
            },
          ],
        },
        {
          label: "Product photo",
          messages: [
            {
              from: "customer",
              kind: "image",
              src: "/Black Leather Wallet on Marble.png",
              meta: "Photo of a black leather wallet",
              text: "Do you have this?",
            },
            {
              from: "bot",
              text: "Yes, we have it! Black leather wallet, Rs. 4,500. 12 in stock. Would you like me to reserve one for you?",
            },
          ],
        },
      ],
    },
    capabilities: [
      {
        title: "Instant replies, 24/7",
        body: "Answers questions about products, prices, delivery and opening hours in seconds, even at 2 a.m. or on a public holiday.",
      },
      {
        title: "Five languages and styles",
        body: "English, Sinhala, Tamil, Singlish and Thanglish. The chatbot replies in the same language and style your customer used.",
      },
      {
        title: "Understands voice notes",
        body: "Customers can simply talk. The chatbot listens to the voice note, understands the question and replies. We test it on real voice notes from your customers.",
      },
      {
        title: "Finds products from a photo",
        body: "A customer sends a picture and asks, “Is this available?” The chatbot compares it with your product database and says yes, with the price and stock, when it finds a match.",
      },
      {
        title: "Product and order answers",
        body: "It checks your real products, prices and orders to answer “Is it in stock?” and “Where is my order?”, and can take simple orders or pass them to your team.",
      },
      {
        title: "Hands over to your team",
        body: "When a question is tricky, or the customer asks for a person, the chat goes to your staff with the full conversation, so no one has to repeat themselves.",
      },
    ],
    languages: {
      heading: "Speaks the way your customers actually type.",
      intro:
        "Many people in Sri Lanka type Sinhala or Tamil using English letters. We call these Singlish (Sinhala in English letters) and Thanglish (Tamil in English letters). Your chatbot understands all five styles below and replies in the one your customer used.",
      items: [
        {
          name: "English",
          how: "Normal English",
          example: "Do you have this in black?",
        },
        {
          name: "Sinhala",
          how: "Sinhala letters",
          example: "මේක කළු පාටින් තියෙනවද?",
          meaning: "Do you have this in black?",
        },
        {
          name: "Tamil",
          how: "Tamil letters",
          example: "இது கருப்பு நிறத்தில் இருக்கிறதா?",
          meaning: "Do you have this in black?",
        },
        {
          name: "Singlish",
          how: "Sinhala typed in English letters",
          example: "Meka kalu patin thiyenawada?",
          meaning: "Do you have this in black?",
        },
        {
          name: "Thanglish",
          how: "Tamil typed in English letters",
          example: "Idhu black colour la irukka?",
          meaning: "Do you have this in black?",
        },
      ],
    },
    systems: [
      {
        label: "01 / Customer message",
        body: "Your customer sends text, a voice note or a photo to your business WhatsApp number, using the official WhatsApp Business Platform.",
      },
      {
        label: "02 / AI understanding",
        body: "The AI works out the language, turns voice notes into text, looks at photos and understands what the customer is asking for.",
      },
      {
        label: "03 / Your business data",
        body: "It checks your real products, prices, stock and orders, then replies. If it isn't sure, it passes the chat to your team.",
      },
    ],
    audiences: {
      heading: "Who is a WhatsApp AI chatbot for?",
      items: [
        {
          title: "Online shops and retail stores",
          body: "Answer “Is this available?”, price, size and delivery questions, and match customer photos to your products.",
        },
        {
          title: "Restaurants and cafés",
          body: "Share your menu, opening hours and delivery areas, and take simple order requests.",
        },
        {
          title: "Salons, clinics and service businesses",
          body: "Answer price and opening-hour questions and collect appointment requests for your team.",
        },
        {
          title: "Travel, education and property",
          body: "Answer first questions about packages, courses or listings, and collect customer details for your sales team.",
        },
      ],
    },
    outcomes: [
      "Replies in seconds, at any time of day",
      "Fewer repeated questions for your team",
      "No more lost enquiries after hours",
      "Customers served in their own language",
    ],
    localNote:
      "WhatsApp is how most Sri Lankans prefer to message a business, and many type Sinhala or Tamil in English letters. Generic chatbots often struggle with that. We build and test yours on the way your customers really write and speak, including voice notes, so it feels natural and not robotic.",
    related: [
      "ai-automation",
      "ecommerce-development",
      "custom-software-development",
    ],
    faqs: [
      {
        question: "What is a WhatsApp AI chatbot?",
        answer:
          "It is a program on your business WhatsApp number that reads customer messages and replies automatically using AI. A basic bot makes people pick from a menu. An AI chatbot understands normal sentences and answers using your own product and order information.",
      },
      {
        question:
          "Can the chatbot reply in Sinhala, Tamil, Singlish and Thanglish?",
        answer:
          "Yes. It works in English, Sinhala, Tamil, Singlish (Sinhala typed in English letters) and Thanglish (Tamil typed in English letters). We test it on real messages from your customers before launch, because people write in many different ways. If a message is unclear, the chatbot asks a short question or passes the chat to your team.",
      },
      {
        question: "Can it understand WhatsApp voice notes?",
        answer:
          "Yes. The chatbot turns the voice note into text, understands the question and replies. Accuracy depends on how clear the audio is, the accent and the language, so we test it on real voice notes from your customers. If it can't understand, it asks the customer to try again or hands over to your team.",
      },
      {
        question:
          "How does the product photo feature work? Can it say if an item is available?",
        answer:
          "When a customer sends a photo, the chatbot compares it with the product photos and details in your product database. If it finds a close match, it tells the customer the item is available, with the price and stock. If it isn't sure, it shows the closest items or asks your team to check, instead of guessing. It works best when your catalogue has clear product photos.",
      },
      {
        question: "Will the chatbot make up wrong answers?",
        answer:
          "We design it to answer only from your approved information: products, prices, policies and order data. If it doesn't know, it says so and passes the chat to a person. No AI is perfect, so we also keep a record of conversations for you to review and improve.",
      },
      {
        question: "Can my staff take over a conversation?",
        answer:
          "Yes. A customer can ask for a person at any time, and the chatbot can also hand over by itself when a question is sensitive or complicated. Your staff see the full chat so far, so the customer doesn't have to repeat anything.",
      },
      {
        question: "Do I need a special WhatsApp account?",
        answer:
          "Yes, a chatbot needs the official WhatsApp Business Platform from Meta. We help you set up your business account and number. Meta charges its own fees for some types of messages, separate from our build fee, and we explain these before you commit.",
      },
      {
        question: "Can it connect to my website, online store or stock system?",
        answer:
          "Yes, as long as your system allows a safe connection. If you don't have one yet, we can start from a simple product list in a spreadsheet or database and connect it to your store or ERP later.",
      },
      {
        question:
          "How much does a WhatsApp AI chatbot cost, and how long does it take?",
        answer:
          "It depends on how many products you have, which languages you need and which systems it connects to. We quote each project in LKR after a short chat about your business, and confirm the timeline in the quote. Message us on WhatsApp to get started.",
      },
      {
        question: "Is my customers' data safe?",
        answer:
          "We keep only what is needed to answer your customers, limit who can see it, and choose AI services with business data-protection terms. Your proposal explains what is stored, where, and for how long.",
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
  "whatsapp-ai-chatbot",
  "custom-software-development",
] as const;
