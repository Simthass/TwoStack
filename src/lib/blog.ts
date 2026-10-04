/** Legacy seed articles. New articles are authored in Sanity Studio. */
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";
export type ArticleSection = { heading: string; paragraphs: readonly string[]; bullets?: readonly string[] };
export type ArticleImage = { asset: SanityImageSource; alt: string; caption?: string };
export type Article = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  summary: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  status: "draft" | "published";
  readingMinutes: number;
  coverImage?: ArticleImage;
  body?: PortableTextBlock[];
  relatedService: { label: string; href: string };
  relatedCaseStudy?: { label: string; href: string };
  sections: readonly ArticleSection[];
};

const articles: readonly Article[] = [
  {
    slug: "ecommerce-website-cost-sri-lanka",
    title: "What does an ecommerce website cost in Sri Lanka? A practical scoping guide",
    description: "Understand the scope decisions behind an ecommerce build in Sri Lanka: catalogue, checkout, payments, inventory, integrations and ongoing costs.",
    summary: "A useful budget starts with the operation you need to run, not a single price for every online store.",
    category: "Ecommerce",
    author: "TwoStack team",
    publishedAt: "2026-10-01",
    status: "published",
    readingMinutes: 6,
    relatedService: { label: "Ecommerce development", href: "/services/ecommerce-development" },
    relatedCaseStudy: { label: "Faux Fur Boa case study", href: "/portfolio/faux-fur-boa" },
    sections: [
      { heading: "Start with the kind of store you need", paragraphs: ["A catalogue with a checkout is a different project from a wholesale platform that assigns customer tiers, changes prices by quantity, and connects stock to a separate system. Both are ecommerce websites, but they require different design, engineering and testing work. That is why an honest estimate follows a short discovery process.", "Write down your products, who buys them, where you sell, and what your staff must do after an order arrives. If you already sell through a physical shop or WhatsApp, document the steps that happen there too. The site should fit the way the business operates rather than create another place for staff to enter the same order."] },
      { heading: "The decisions that change the budget", paragraphs: ["The catalogue and checkout are only part of the scope. Ask whether products have variations, whether customers need accounts, whether prices differ by buyer, and whether you will sell across currencies or delivery zones. Payment gateway approval and settlement rules should be checked early with the provider; a developer cannot promise that every gateway will approve every business.", "Inventory is another major decision. A simple store can manage stock in its own admin area. A business with branches, a POS system or a separate warehouse may need integration and clear rules about which system owns the stock count. Returns, invoices, taxes, courier labels, notifications and staff permissions each add workflow and testing."] },
      { heading: "Plan for the cost after launch", paragraphs: ["Budget for hosting, payment processing, domain renewal, support, security updates and content operations. Product photography, descriptions and search merchandising can take substantial time even if the software is ready. A low initial quote that excludes these responsibilities may be more expensive to operate later.", "Ask every agency for a written breakdown: what is included, what is supplied by you, how changes are priced, who owns the code and accounts, and how defects are handled after launch. Compare proposals using the same brief, not just a headline amount."] },
      { heading: "A brief that produces a useful estimate", paragraphs: ["Share your approximate product count, payment and delivery requirements, existing software, examples of workflows that cause delays, desired launch date and who will maintain products. If the scope is uncertain, request a discovery phase with a deliverable such as a feature map and phased estimate. A smaller first release can validate ordering before complex automations are added.", "For an example of wholesale complexity, our Faux Fur Boa case study explains tiered pricing, catalogue management and staff roles. It documents delivered features, not an unverified sales uplift. If your operation has similar requirements, we can scope the components with you."], bullets: ["Number and type of products, variations, and buyer groups", "Payment, shipping, returns, tax and invoice requirements", "Existing POS, accounting, inventory or customer systems", "Staff roles, reporting, support and launch constraints"] },
    ],
  },
  {
    slug: "shopify-vs-custom-ecommerce-wholesale",
    title: "Shopify or custom ecommerce for a wholesale business?",
    description: "A decision framework for wholesale ecommerce: pricing tiers, approvals, integrations, ownership and the point where a custom build makes sense.",
    summary: "Choose the platform around your ordering rules and team workflow, not around a feature checklist alone.",
    category: "Ecommerce",
    author: "TwoStack team",
    publishedAt: "2026-10-01",
    status: "published",
    readingMinutes: 6,
    relatedService: { label: "Ecommerce development", href: "/services/ecommerce-development" },
    relatedCaseStudy: { label: "Faux Fur Boa case study", href: "/portfolio/faux-fur-boa" },
    sections: [
      { heading: "When a hosted platform is a sensible first choice", paragraphs: ["If wholesale buyers can use a fairly standard catalogue and checkout, a hosted platform can shorten the initial build. You can validate demand, train staff on a mature admin interface and avoid owning every part of the infrastructure. The real comparison should include the plan, apps, integration work and the operating process, rather than treating a template as the entire project.", "Map a normal order from account approval to payment and fulfilment. Test that journey in a trial or prototype with actual product data. An attractive demo store may hide manual steps your staff would have to repeat for every order."] },
      { heading: "Where wholesale requirements become complex", paragraphs: ["Businesses often need customer-specific prices, quantity breaks, negotiated terms, minimum order sizes, credit approval, quote requests or multiple delivery locations. The same business may serve both retail buyers and account customers. These rules affect product data, permissions, checkout and reporting together.", "An app or extension can solve some requirements. Each one should be assessed for recurring cost, data ownership, compatibility, support and what happens if the vendor changes it. A custom build becomes more compelling when the core buying flow cannot be expressed cleanly with the platform and supported integrations."] },
      { heading: "Compare the full operating model", paragraphs: ["For each option, calculate setup work, subscriptions, maintenance, payment fees, staff time and expected change requests. Decide where product and customer records live, how stock stays accurate, and who can export data if you move. A custom system offers flexibility but transfers more responsibility for security, hosting and long-term maintenance to the team building it.", "It is possible to start on a hosted platform and later migrate, provided the data model and ownership are clear. It is also possible to overbuild a custom platform before the sales process is understood. The right answer depends on the business constraints you can describe today."] },
      { heading: "The questions to ask before choosing", paragraphs: ["Write five real order scenarios: a new retail customer, a repeat wholesale account, a large discounted order, a return and an out-of-stock item. Ask both approaches to demonstrate them. Also ask who can change pricing rules, how approvals work, and how an order reaches your existing stock or accounting system.", "Our Faux Fur Boa case study shows one custom approach to tiered pricing and staff controls. Use it as an example of architecture, not a claim that every wholesaler needs the same stack."], bullets: ["Can staff maintain pricing and stock without a developer?", "Which recurring apps or services does the solution depend on?", "Who owns and can export the product, order and customer data?", "What breaks or needs rework when a second buyer group is added?"] },
    ],
  },
  {
    slug: "inventory-spreadsheets-to-erp",
    title: "When should a growing business move inventory out of spreadsheets?",
    description: "Signs your inventory workflow needs a shared system, and a measured path from spreadsheets to an ERP or custom operations tool.",
    summary: "The problem is usually delayed or conflicting decisions, not the spreadsheet itself.",
    category: "Operations",
    author: "TwoStack team",
    publishedAt: "2026-10-01",
    status: "published",
    readingMinutes: 5,
    relatedService: { label: "ERP systems development", href: "/services/erp-systems-development" },
    sections: [
      { heading: "Notice the work around the spreadsheet", paragraphs: ["A spreadsheet can be a practical inventory tool when one person manages a small number of items and updates it consistently. Trouble starts when the same product is counted in several places, branches share stock, sales arrive through multiple channels or a purchase decision depends on yesterday's file. Staff then spend time reconciling numbers instead of using them.", "Useful warning signs include selling stock you no longer have, discovering shortages during fulfilment, repeated manual transfers between files, and managers who cannot explain a variance. Those are workflow problems. Buying a large ERP package without mapping the workflow first may simply make them more expensive."] },
      { heading: "Map one item from arrival to sale", paragraphs: ["Pick a representative product and follow it through purchase order, receipt, storage, transfer, reservation, sale, return and adjustment. Record who changes the quantity at each stage and what evidence they use. Repeat for exceptions such as damaged goods or an order cancelled after reservation.", "The goal is to define one source of truth for stock and a history of why the number changed. A dashboard can then show low stock, slow-moving items and exceptions. Without trustworthy inputs, a more polished dashboard only displays unreliable figures more clearly."] },
      { heading: "Introduce a system in stages", paragraphs: ["Begin with the highest-cost failure: perhaps stock visibility across two locations or order reservations for an online store. Import and clean the necessary product data, train the people who record movements, and run a controlled comparison with the old process. Add purchasing, finance or forecasting after the core quantities are reliable.", "Ask vendors how they handle permissions, audit history, offline operations, integrations and data export. Whether an off-the-shelf ERP or a custom tool is suitable depends on your process, not the size of a feature list. A short discovery engagement can turn those observations into a phased scope and budget."] },
      { heading: "What to bring to a scoping conversation", paragraphs: ["Bring sample product data, the existing stock sheet, examples of discrepancies, a list of sales channels and the people involved. Estimate how often the exceptions happen and the cost of resolving them. This helps define a first release with a measurable operational outcome, such as fewer manual reconciliations or faster stock checks, without promising an unverified percentage improvement."], bullets: ["Locations and channels that change stock", "How items are identified and how variants are handled", "Who can receive, transfer, adjust and approve stock", "Current exception and reconciliation examples"] },
    ],
  },
  {
    slug: "scope-an-mvp-mobile-app",
    title: "How to scope an MVP mobile app without overbuilding it",
    description: "A practical way to define the first release of a mobile app: user journey, backend needs, integrations, validation and launch responsibilities.",
    summary: "The first release should test one valuable workflow with real users and a clear measure of success.",
    category: "Product planning",
    author: "TwoStack team",
    publishedAt: "2026-10-01",
    status: "published",
    readingMinutes: 5,
    relatedService: { label: "Mobile app development", href: "/services/mobile-development" },
    sections: [
      { heading: "Define the job before the screens", paragraphs: ["An MVP is a small usable product, not an unfinished version of a large specification. Describe one user, the situation they are in and the action they need to complete. For example, a customer needs to place a repeat order while away from a desk; a field worker needs to record a visit where the connection is weak. Each leads to different product decisions.", "Write the journey from first opening the app to completing the task. Identify the few moments where failure would make the app unusable. That gives the team a stronger scope than a long list of features copied from competitors."] },
      { heading: "Include the system behind the app", paragraphs: ["Most mobile products need authentication, data storage, an admin process, notifications, support and a way to update information. If an app collects an order, decide who receives it and how its status changes. If users can work offline, decide what happens when two devices edit the same record. These backend questions affect cost and schedule more than the number of screens suggests.", "Also decide whether a responsive web app can validate the workflow first. Native device features, app-store distribution and offline needs may justify a mobile app, but the customer problem should lead that decision."] },
      { heading: "Choose a measurable first release", paragraphs: ["A first release can focus on one primary journey, a minimal admin area and the integrations required to make the journey real. Set a success measure before development: completed requests, repeat use, time saved on a specific task or a small group of active customers. Avoid treating app downloads alone as proof that the workflow helps users.", "Plan for testing on real devices, accessibility, privacy, store submission, analytics and support. A pilot with a defined group is often more informative than a broad launch without a feedback process."] },
      { heading: "A brief your build team can use", paragraphs: ["Share the user journey, current workaround, data sources, mandatory security or compliance needs, device requirements, and what you can defer. Ask for a phased plan that names assumptions and dependencies. This lets you change direction after seeing actual usage rather than paying for every imagined edge case up front."], bullets: ["Primary user and task", "Essential data and integrations", "Who operates the admin side", "Success measure and pilot group"] },
    ],
  },
];

export const publishedArticles = articles.filter((article) => article.status === "published")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getArticle(slug: string) {
  return publishedArticles.find((article) => article.slug === slug);
}

export function articleDate(value: string) { return new Date(value).toLocaleDateString("en-LK", { dateStyle: "long", timeZone: "UTC" }); }
export function articleDateTime(value: string) { return value.includes("T") ? value : `${value}T00:00:00+05:30`; }
