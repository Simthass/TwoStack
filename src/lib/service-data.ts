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
    title: "Web Development in Sri Lanka, engineered beyond the brochure site.",
    metadataTitle: "Web Development in Sri Lanka",
    description:
      "Professional web development in Sri Lanka by TwoStack. We build fast Next.js websites, portals, dashboards and AI-powered web applications for growing businesses.",
    intro:
      "TwoStack designs and engineers web platforms that have a job to do: generate qualified enquiries, run customer workflows, connect internal systems and stay fast on real mobile networks.",
    problems: [
      "A website that looks fine but produces weak enquiries.",
      "Slow mobile performance and fragile plugin-heavy stacks.",
      "Manual admin work sitting behind a polished frontend.",
      "Separate website, CRM and reporting tools that do not share context.",
    ],
    capabilities: [
      {
        title: "Next.js & React engineering",
        body: "Server-rendered, component-based applications with deliberate caching, image delivery and Core Web Vitals performance.",
      },
      {
        title: "Custom portals & dashboards",
        body: "Customer portals, staff workspaces, admin systems and role-aware workflows designed around the operation.",
      },
      {
        title: "AI-powered web features",
        body: "Search, assistants, document workflows and intelligent routing added where AI creates measurable utility rather than novelty.",
      },
      {
        title: "API & backend development",
        body: "Secure application APIs, data models, authentication, integrations and background workflows built as part of the same system.",
      },
      {
        title: "SEO-ready architecture",
        body: "Semantic HTML, crawlable navigation, metadata, structured data, canonical URLs and content architecture built into the application.",
      },
      {
        title: "Analytics & conversion",
        body: "Event instrumentation and conversion paths that show where visitors arrive, what they do and where qualified leads drop.",
      },
    ],
    systems: [
      {
        label: "01 / Presence",
        body: "Fast public pages with clear information architecture, conversion-focused journeys and content that search engines can understand.",
      },
      {
        label: "02 / Operations",
        body: "Authenticated workflows, dashboards, integrations and automations connected behind the public experience.",
      },
      {
        label: "03 / Intelligence",
        body: "Analytics, search and AI features grounded in your actual business data and permissions.",
      },
    ],
    outcomes: [
      "Faster mobile experience",
      "More useful qualified enquiries",
      "Less manual hand-off work",
      "A codebase that can evolve",
    ],
    localNote:
      "For Sri Lankan businesses, we design around local mobile usage, LKR workflows, WhatsApp-first customer behaviour and the payment or operational systems your team already uses.",
    faqs: [
      {
        question: "Do you provide AI-powered web development in Sri Lanka?",
        answer:
          "Yes. TwoStack builds AI-powered web applications where AI has a clear operational role, such as intelligent search, assistants, document processing, support workflows or internal knowledge access. We do not add AI features simply for marketing.",
      },
      {
        question: "Can you rebuild an existing company website without losing SEO?",
        answer:
          "Yes. A rebuild should include a URL inventory, redirect map, metadata migration, canonical checks, content preservation and post-launch indexing validation so existing search equity is not discarded.",
      },
      {
        question: "Do you build only marketing websites?",
        answer:
          "No. We build marketing sites, portals, dashboards, internal tools, customer workspaces and full web applications with backend systems and integrations.",
      },
      {
        question: "What technologies do you use for web development?",
        answer:
          "The exact stack depends on the project. TwoStack commonly works with Next.js, React, TypeScript, Node.js, Python and modern cloud databases and APIs.",
      },
    ],
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    eyebrow: "Commerce systems / Sri Lanka",
    title: "Ecommerce Development in Sri Lanka, built around the sale and everything after it.",
    metadataTitle: "Ecommerce Development in Sri Lanka",
    description:
      "Custom ecommerce development in Sri Lanka by TwoStack. High-performance storefronts, payments, inventory, order operations, automation and analytics in one connected platform.",
    intro:
      "A serious ecommerce build is not a product grid plus checkout. We connect the storefront to stock, orders, payments, customer communication, fulfilment and the admin workflows that keep the business moving.",
    problems: [
      "Storefront performance drops as the catalogue grows.",
      "Orders are copied manually between systems.",
      "Stock data becomes unreliable across channels.",
      "Customers ask for status updates the system should already know.",
    ],
    capabilities: [
      { title: "Custom storefronts", body: "Fast product discovery, filtering, search, merchandising and conversion-focused product journeys." },
      { title: "Checkout & payments", body: "Secure checkout architecture with integrations selected around the merchant's operational and payment requirements." },
      { title: "Inventory & order operations", body: "Stock controls, order states, cancellation rules, returns, fulfilment and staff workflows in one source of truth." },
      { title: "Customer automation", body: "Transactional email, WhatsApp messaging, reminders and order-status communication triggered by real system events." },
      { title: "Admin & reporting", body: "Operational dashboards for catalogue, orders, customers, promotions and business performance." },
      { title: "Technical ecommerce SEO", body: "Indexation controls, canonical strategy, structured product content, pagination discipline and high-performance rendering." },
    ],
    systems: [
      { label: "01 / Storefront", body: "The public buying experience: discovery, product detail, cart and checkout." },
      { label: "02 / Commerce core", body: "Products, variants, stock, customers, orders, payments, promotions and fulfilment rules." },
      { label: "03 / Automation", body: "Notifications, status changes, reporting and integrations triggered from the commerce core." },
    ],
    outcomes: ["Fewer manual order steps", "Cleaner stock visibility", "Faster storefronts", "Better customer communication"],
    localNote:
      "Sri Lankan ecommerce often needs a mix of card payments, bank workflows, cash-on-delivery, WhatsApp communication and local fulfilment practices. We model those realities instead of forcing a generic foreign-store template.",
    faqs: [
      { question: "Can TwoStack integrate Sri Lankan payment gateways?", answer: "Yes. Payment architecture is selected per project and can include suitable Sri Lankan bank or payment-provider integrations as well as international gateways where required." },
      { question: "Can you migrate an existing ecommerce store?", answer: "Yes. Migration planning can cover catalogue data, customers, orders, URLs, redirects, analytics and SEO-sensitive content so the new platform launches without unnecessary operational or search disruption." },
      { question: "Do you build ecommerce admin panels too?", answer: "Yes. We can build the operational side of the store, including products, inventory, orders, promotions, returns, customer management, reporting and role-based administration." },
      { question: "Is ecommerce SEO included in the build?", answer: "Technical ecommerce SEO is part of the architecture: crawlable category structures, metadata, canonical handling, performance, structured content and indexation controls. Ongoing content and authority building are separate growth activities." },
    ],
  },
  "mobile-development": {
    slug: "mobile-development",
    eyebrow: "Mobile products / Sri Lanka",
    title: "Mobile App Development in Sri Lanka, connected to the business behind the screen.",
    metadataTitle: "Mobile Application Development in Sri Lanka",
    description:
      "Mobile application development in Sri Lanka by TwoStack. We build secure iOS and Android apps with APIs, authentication, notifications, offline workflows and business-system integration.",
    intro:
      "TwoStack builds mobile products as part of a complete software system. The app, API, authentication, data model, notifications and admin workflows are designed together instead of being handed between disconnected vendors.",
    problems: [
      "A mobile UI exists but the backend cannot support real usage.",
      "Poor connectivity causes data loss or broken workflows.",
      "Push notifications are noisy instead of event-driven.",
      "Mobile and web teams implement conflicting business rules.",
    ],
    capabilities: [
      { title: "iOS & Android delivery", body: "Cross-platform or platform-specific implementation selected around product requirements, performance and maintenance." },
      { title: "Secure APIs & identity", body: "Authentication, authorization, session handling and mobile API design connected to the same business rules as the wider system." },
      { title: "Offline-aware workflows", body: "Local persistence, sync strategies and recovery states for workflows that cannot simply fail when connectivity drops." },
      { title: "Push & event messaging", body: "Notifications based on meaningful system events with clear user preferences and deep-link destinations." },
      { title: "App analytics", body: "Instrumentation for activation, retention, feature usage and failure points rather than vanity download counts." },
      { title: "Admin & support tooling", body: "Operational interfaces for the team that needs to manage users, content, transactions or support behind the app." },
    ],
    systems: [
      { label: "01 / Mobile client", body: "Responsive native-feeling interaction, local state, accessibility and device capabilities." },
      { label: "02 / Application API", body: "Authenticated domain logic, validation, integrations and reliable data contracts." },
      { label: "03 / Operations", body: "Admin tools, analytics, notifications and support workflows that keep the product manageable." },
    ],
    outcomes: ["Consistent web/mobile rules", "Resilient field workflows", "Useful notifications", "Maintainable product architecture"],
    localNote:
      "For Sri Lankan users we pay particular attention to Android-heavy device diversity, mobile-network variability, payload size and flows that should remain understandable even when connectivity is imperfect.",
    faqs: [
      { question: "Do you build both Android and iOS apps in Sri Lanka?", answer: "Yes. TwoStack can deliver Android and iOS products using an appropriate cross-platform or native approach depending on product requirements." },
      { question: "Can a mobile app connect to my existing system?", answer: "Yes. We can integrate with an existing API, CRM, ecommerce platform or operational database where the available interfaces and security model support it." },
      { question: "Do you build the backend and admin panel as well?", answer: "Yes. Mobile projects often include the application API, authentication, data model, notifications and an admin or support workspace." },
      { question: "Can you build offline-capable mobile workflows?", answer: "Yes. Where the use case requires it, we design local storage, synchronization, conflict handling and recovery rather than assuming a perfect network connection." },
    ],
  },
  "pos-system-development": {
    slug: "pos-system-development",
    eyebrow: "Retail operations / Sri Lanka",
    title: "POS System Development in Sri Lanka, designed around how your counters actually work.",
    metadataTitle: "POS System Development in Sri Lanka",
    description:
      "Custom POS system development in Sri Lanka by TwoStack. Billing, inventory, branches, staff roles, receipts, purchasing and reporting connected in one retail platform.",
    intro:
      "We build POS platforms for businesses that have outgrown generic billing software. Sales, stock, branches, users, purchasing and management reporting share one operational model.",
    problems: [
      "Counter sales and inventory disagree.",
      "Branch data arrives late or in spreadsheets.",
      "Permissions are too broad for staff roles.",
      "Management cannot see margin, movement or stock risk quickly.",
    ],
    capabilities: [
      { title: "Billing & checkout", body: "Fast cashier flows, discounts, taxes, receipts, returns and controlled exception handling." },
      { title: "Inventory control", body: "Products, variants, stock movement, low-stock rules, adjustments and traceable changes." },
      { title: "Multi-branch operations", body: "Branch-aware stock, users, transfers and reporting with centrally managed business rules." },
      { title: "Purchasing & suppliers", body: "Purchase workflows, receiving, supplier records and stock updates tied to real transactions." },
      { title: "Roles & audit trails", body: "Role-based permissions and audit records for sensitive operational changes." },
      { title: "Management dashboards", body: "Sales, stock movement, category performance and operational exceptions surfaced for decision-making." },
    ],
    systems: [
      { label: "01 / Counter", body: "A focused cashier experience optimized for speed and predictable daily use." },
      { label: "02 / Retail core", body: "Products, inventory, sales, returns, branches, users and purchasing." },
      { label: "03 / Management", body: "Central administration, reporting, audit history and integrations." },
    ],
    outcomes: ["Cleaner stock accuracy", "Faster counter workflows", "Better branch visibility", "Traceable operations"],
    localNote:
      "The platform can be designed around Sri Lankan retail realities including LKR pricing, branch operations, barcode workflows, local receipt requirements and the hardware environment already in use.",
    faqs: [
      { question: "Can TwoStack build a custom POS system for a Sri Lankan business?", answer: "Yes. We build custom POS and retail operations systems when off-the-shelf software does not fit the business workflow, integrations or reporting needs." },
      { question: "Can the POS work across multiple branches?", answer: "Yes. Multi-branch architecture can include branch-specific users and stock, transfers, centralized reporting and shared product data." },
      { question: "Can POS inventory connect to an ecommerce website?", answer: "Yes. Where the business needs a shared stock model, ecommerce and POS can be connected through a common backend or controlled synchronization layer." },
      { question: "Do you support barcode and receipt workflows?", answer: "They can be included. Exact printer, scanner and peripheral support is confirmed during discovery because hardware interfaces vary." },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    eyebrow: "AI & workflow systems / Sri Lanka",
    title: "AI Automation in Sri Lanka, connected to real workflows instead of a demo chatbot.",
    metadataTitle: "AI Automation in Sri Lanka",
    description:
      "AI automation services in Sri Lanka by TwoStack. We build multilingual assistants, document workflows, intelligent routing, reporting and business automations connected to your systems.",
    intro:
      "TwoStack uses AI where it can reduce repetitive work, improve access to information or make a workflow faster. The useful part is not the model alone; it is the permissions, data, integrations and evidence around what the system did.",
    problems: [
      "Teams answer the same questions repeatedly.",
      "Information is scattered across inboxes, documents and systems.",
      "Automation scripts fail silently with no operational visibility.",
      "Chatbots can talk but cannot safely complete useful work.",
    ],
    capabilities: [
      { title: "Multilingual assistants", body: "Customer or internal assistants designed for English, Tamil and Sinhala use cases where the underlying model and data support them." },
      { title: "Knowledge retrieval", body: "Grounded access to approved documents and business knowledge with source-aware responses." },
      { title: "Workflow orchestration", body: "AI-assisted classification, routing, extraction and follow-up connected to deterministic business rules." },
      { title: "Human approval gates", body: "High-impact actions can require review instead of giving a model unrestricted control." },
      { title: "Observability & audit", body: "Logs, outcomes, failure states and evaluation data so the automation can be reviewed and improved." },
      { title: "System integrations", body: "Connections to web apps, CRMs, ecommerce systems, databases, email or messaging channels through approved APIs." },
    ],
    systems: [
      { label: "01 / Input", body: "Messages, documents or business events enter through controlled interfaces." },
      { label: "02 / Intelligence", body: "Models classify, retrieve, extract or propose actions using scoped context." },
      { label: "03 / Action", body: "Business rules, approvals and integrations determine what actually changes in the system." },
    ],
    outcomes: ["Less repetitive admin", "Faster information retrieval", "Controlled AI actions", "Auditable automation"],
    localNote:
      "Sri Lankan businesses often operate across WhatsApp, email and multilingual customer conversations. We design AI automation around those channels without pretending every task should be delegated to a model.",
    faqs: [
      { question: "Can you build Sinhala and Tamil AI assistants?", answer: "Yes, multilingual assistants can be designed for Sinhala, Tamil and English use cases. Quality is evaluated against the actual domain, language mix and source material rather than assumed from a generic demo." },
      { question: "Can AI automation connect to our current software?", answer: "Usually, if the existing software exposes suitable APIs, exports or integration points. Discovery identifies what can be connected safely and what should remain manual." },
      { question: "Do you use AI agents for business automation?", answer: "We can use agentic patterns when they are appropriate, but we keep permissions, validation, approval gates and auditability proportional to the risk of the action." },
      { question: "How do you prevent an AI system from inventing business information?", answer: "Depending on the use case we use scoped retrieval, explicit sources, validation, deterministic rules and human approval. No technique makes hallucination impossible, so the system is designed around the consequence of being wrong." },
    ],
  },
  "custom-software-development": {
    slug: "custom-software-development",
    eyebrow: "Custom software / Sri Lanka",
    title: "Custom Software Development in Sri Lanka, shaped around the operation.",
    metadataTitle: "Custom Software Development in Sri Lanka",
    description:
      "Custom software development in Sri Lanka by TwoStack. We build business portals, workflow systems, dashboards, admin platforms, integrations and automation for complex operations.",
    intro:
      "When spreadsheets, disconnected SaaS tools and manual hand-offs start defining how the company works, we replace the friction with software designed around the actual process.",
    problems: [
      "The business process has outgrown spreadsheets.",
      "Teams re-enter the same data in multiple tools.",
      "Reporting depends on manual consolidation.",
      "Off-the-shelf software forces the team into the wrong workflow.",
    ],
    capabilities: [
      { title: "Operational platforms", body: "Purpose-built systems for the workflows that make the business run day to day." },
      { title: "Client & staff portals", body: "Role-aware workspaces that expose the right data and actions to each user group." },
      { title: "Business dashboards", body: "Decision-focused reporting connected to operational data instead of manually assembled spreadsheets." },
      { title: "Integration layers", body: "APIs and synchronization between systems that should share data but currently do not." },
      { title: "Workflow automation", body: "Deterministic and AI-assisted automation around repetitive, rules-based or information-heavy tasks." },
      { title: "Lifecycle engineering", body: "Testing, deployment, monitoring, security maintenance and iterative product improvements after launch." },
    ],
    systems: [
      { label: "01 / Workflow", body: "The actual business process is mapped before screens and database tables are designed." },
      { label: "02 / Platform", body: "Interfaces, domain logic, data and integrations are built as one maintainable product." },
      { label: "03 / Operations", body: "Monitoring, auditability, support and reporting make the system manageable after launch." },
    ],
    outcomes: ["Fewer duplicate tools", "Less data re-entry", "Clearer operational visibility", "Software that fits the process"],
    localNote:
      "TwoStack is based in Colombo and can work directly with Sri Lankan teams to map local operational constraints, existing software and internal approval flows before the build is scoped.",
    faqs: [
      { question: "What counts as custom software development?", answer: "Examples include internal workflow systems, customer portals, admin platforms, dashboards, booking or order systems, integration layers and industry-specific operational software." },
      { question: "Can you replace spreadsheets with a custom system?", answer: "Yes, when the spreadsheet has effectively become an operational database or workflow tool. We first map what the spreadsheet is doing so useful rules are not lost during replacement." },
      { question: "Can custom software integrate with existing SaaS tools?", answer: "Yes, where those products expose suitable APIs or integration methods. We document the dependency and failure behaviour rather than hiding it behind the interface." },
      { question: "Do you provide maintenance after launch?", answer: "Yes. Ongoing support can cover bug fixes, security maintenance, monitoring and planned product improvements based on the agreed support arrangement." },
    ],
  },
};

export const SERVICE_ORDER = [
  "web-development",
  "ecommerce-development",
  "mobile-development",
  "pos-system-development",
  "ai-automation",
  "custom-software-development",
] as const;
