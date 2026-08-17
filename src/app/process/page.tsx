import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import CtaFooter from "@/components/services/CtaFooter";
import { Reveal } from "@/components/services/Reveal";
import { breadcrumbSchema, createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

const path = "/process";
const description =
  "See how TwoStack scopes, designs, engineers, launches and supports custom web, ecommerce, mobile, POS, AI automation and software projects in Sri Lanka.";

export const metadata: Metadata = createMetadata({
  title: "Our Software Development Process",
  description,
  path,
});

const STEPS = [
  {
    number: "01",
    phase: "Discovery",
    title: "Map the business before touching the code.",
    body:
      "We identify the users, workflows, bottlenecks, existing systems, required integrations and the commercial result the product is expected to create. The output is a shared problem definition rather than a list of screens.",
    output: "Workflow map · risks · integration inventory · success criteria",
  },
  {
    number: "02",
    phase: "Scope",
    title: "Turn the problem into a buildable contract.",
    body:
      "Features are separated into must-have, later and unnecessary. We define roles, core journeys, data boundaries, acceptance criteria and delivery milestones before implementation creates expensive ambiguity.",
    output: "Scope · architecture · milestones · acceptance criteria",
  },
  {
    number: "03",
    phase: "Product & UX",
    title: "Design the system people will actually operate.",
    body:
      "Information architecture, interaction states and responsive behaviour are designed around real user tasks. We keep the TwoStack approach deliberate: clear hierarchy, low visual noise and no template-driven interface decisions.",
    output: "Flows · responsive UI · component rules · interaction states",
  },
  {
    number: "04",
    phase: "Engineering",
    title: "Build vertically, test continuously.",
    body:
      "Frontend, backend, data, permissions and integrations are implemented as one product. We review working slices throughout the build, test failure states and keep deployment repeatable rather than leaving integration until the end.",
    output: "Working increments · tests · staging · review evidence",
  },
  {
    number: "05",
    phase: "Launch & Run",
    title: "Production is the start of the feedback loop.",
    body:
      "We validate the production environment, analytics, indexing, monitoring and operational handover. After launch, support can cover fixes, security maintenance and planned improvements based on observed usage.",
    output: "Production release · monitoring · handover · improvement backlog",
  },
] as const;

const PRINCIPLES = [
  ["One accountable stack", "The public experience, backend and automation are designed together so business rules do not fragment across vendors."],
  ["Evidence over promises", "Working software, test results, staging reviews and measurable acceptance criteria replace vague progress updates."],
  ["Scope before speed", "Fast delivery is useful only when the team agrees on what finished means. Ambiguity is handled before it becomes rework."],
  ["Responsive by default", "Mobile, tablet and desktop behaviour is designed as part of the component system, not patched after the desktop version."],
] as const;

export default function ProcessPage() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Process", path },
    ]),
    webPageSchema({
      name: "TwoStack Software Development Process",
      description,
      path,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <Grain />
      <Nav />
      <main className="min-h-screen bg-[#ffffff]">
        <section className="bg-[#000000] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:pt-40 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <nav aria-label="Breadcrumb" className="font-inter text-[12px] text-white/40">
                <Link href="/" className="hover:text-white/70">Home</Link>
                <span className="mx-2">/</span>
                <span aria-current="page" className="text-white/60">Process</span>
              </nav>
              <p className="mt-10 font-inter text-[12px] uppercase tracking-[0.16em] text-white/35">
                How TwoStack works
              </p>
              <h1 className="mt-5 max-w-5xl font-satoshi text-[clamp(2.7rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
                A software process built to remove ambiguity before it becomes code.
              </h1>
              <div className="mt-8 grid grid-cols-1 gap-7 border-t border-white/12 pt-7 md:grid-cols-[1fr_.7fr] md:gap-16">
                <p className="max-w-2xl font-inter text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                  We move from operational reality to a scoped product, then from working increments to a measured production launch. No black-box build phase and no “almost done” status that cannot be demonstrated.
                </p>
                <div className="flex flex-wrap items-start gap-3 md:justify-end">
                  <Link href="/services" className="rounded-full border border-white/20 px-5 py-2.5 font-inter text-sm text-white hover:border-white/45">
                    Explore services
                  </Link>
                  <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 font-inter text-sm font-medium text-black hover:bg-white/90">
                    Start a project ↗
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <div className="border-t border-black/12">
              {STEPS.map((step, index) => (
                <Reveal key={step.number} delay={Math.min(index * 0.04, 0.12)}>
                  <article className="grid grid-cols-1 gap-6 border-b border-black/10 py-10 md:grid-cols-[110px_.8fr_1.25fr] md:gap-10 md:py-14">
                    <div>
                      <p className="font-inter text-[12px] text-black/35">{step.number}</p>
                      <p className="mt-2 font-inter text-[11px] uppercase tracking-[0.15em] text-black/45">{step.phase}</p>
                    </div>
                    <h2 className="font-satoshi text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#000000] sm:text-4xl">
                      {step.title}
                    </h2>
                    <div>
                      <p className="font-inter text-[15px] leading-7 text-black/58">{step.body}</p>
                      <p className="mt-6 border-l border-black/20 pl-4 font-inter text-[12px] uppercase leading-5 tracking-[0.08em] text-black/38">
                        Output — {step.output}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-[.72fr_1.28fr] md:gap-14">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">Operating principles</p>
                <h2 className="max-w-3xl font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                  What stays true regardless of the technology.
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-black/10 md:grid-cols-2">
              {PRINCIPLES.map(([title, body], index) => (
                <Reveal
                  key={title}
                  delay={index * 0.05}
                  className="border-b border-black/10 py-8 md:border-r md:px-8 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(odd)]:pl-0"
                >
                  <p className="font-inter text-[11px] text-black/30">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 font-satoshi text-2xl font-semibold text-[#000000]">{title}</h3>
                  <p className="mt-3 max-w-xl font-inter text-[15px] leading-7 text-black/55">{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
