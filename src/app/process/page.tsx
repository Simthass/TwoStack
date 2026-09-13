import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import CtaFooter from "@/components/services/CtaFooter";
import { Reveal } from "@/components/services/Reveal";
import {
  breadcrumbSchema,
  createMetadata,
  jsonLd,
  webPageSchema,
} from "@/lib/seo";

const path = "/process";
const description =
  "See how TwoStack plans, designs, builds, launches and supports web, ecommerce, mobile app, POS and AI automation projects in Sri Lanka.";

export const metadata: Metadata = createMetadata({
  title: "Our Software Development Process",
  description,
  path,
});

const STEPS = [
  {
    number: "01",
    phase: "Discovery",
    title: "We understand your business first.",
    body: "We talk to you about who uses the system, where the bottlenecks are, what tools you already use, and what a successful outcome actually looks like. The result is a clear, shared understanding of the problem - not just a list of screens to build.",
    output:
      "How your work flows today · risks · what needs to connect · what success looks like",
  },
  {
    number: "02",
    phase: "Scope",
    title: "We turn the plan into something clear and buildable.",
    body: "We decide what's must-have, what can wait, and what's unnecessary. User roles, key screens, data, and delivery milestones are all agreed before we start building - so there's no expensive guesswork halfway through.",
    output:
      "What's included · how it's structured · milestones · what 'done' means",
  },
  {
    number: "03",
    phase: "Design",
    title: "We design around how people will actually use it.",
    body: "Screens, navigation and mobile behaviour are designed around real tasks people need to complete. We keep things clear and simple, avoiding clutter and generic, template-driven designs.",
    output: "User flows · mobile-friendly design · consistent components",
  },
  {
    number: "04",
    phase: "Build",
    title: "We build it properly, and test as we go.",
    body: "The frontend, backend, data and integrations are all built together as one product. We review progress regularly, test that things actually work, and keep the process repeatable instead of leaving all the testing until the very end.",
    output:
      "Working versions to review · tests · a staging site · progress updates",
  },
  {
    number: "05",
    phase: "Launch & Support",
    title: "Launch is the start, not the finish line.",
    body: "We check everything works properly in the live environment - including analytics, search engine indexing, and monitoring - and hand it over clearly. After launch, support can cover fixes, security updates and planned improvements.",
    output:
      "A live, working product · monitoring · handover · a list of what to improve next",
  },
] as const;

const PRINCIPLES = [
  [
    "One team, one system",
    "Your website, backend and automation are designed together, so the same rules and logic apply everywhere instead of getting lost between different vendors.",
  ],
  [
    "We show, not just tell",
    "You see working software, test results and real progress - not vague status updates that are hard to verify.",
  ],
  [
    "Plan before we build",
    "Moving fast only helps if everyone agrees on what 'finished' looks like. We sort out unclear points before they turn into rework.",
  ],
  [
    "Mobile-friendly from day one",
    "Mobile, tablet and desktop are all designed together from the start, not patched on afterwards.",
  ],
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
              <nav
                aria-label="Breadcrumb"
                className="font-inter text-[12px] text-white/40"
              >
                <Link href="/" className="hover:text-white/70">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span aria-current="page" className="text-white/60">
                  Process
                </span>
              </nav>
              <p className="mt-10 font-inter text-[12px] uppercase tracking-[0.16em] text-white/35">
                How TwoStack works
              </p>
              <h1 className="mt-5 max-w-5xl font-satoshi text-[clamp(2.7rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
                A clear process, so you always know what's happening.
              </h1>
              <div className="mt-8 grid grid-cols-1 gap-7 border-t border-white/12 pt-7 md:grid-cols-[1fr_.7fr] md:gap-16">
                <p className="max-w-2xl font-inter text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                  We go from understanding your business to a working product,
                  step by step. No mystery "build phase" and no vague "almost
                  done" updates you can't actually see for yourself.
                </p>
                <div className="flex flex-wrap items-start gap-3 md:justify-end">
                  <Link
                    href="/services"
                    className="rounded-full border border-white/20 px-5 py-2.5 font-inter text-sm text-white hover:border-white/45"
                  >
                    Explore services
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-5 py-2.5 font-inter text-sm font-medium text-black hover:bg-white/90"
                  >
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
                      <p className="font-inter text-[12px] text-black/35">
                        {step.number}
                      </p>
                      <p className="mt-2 font-inter text-[11px] uppercase tracking-[0.15em] text-black/45">
                        {step.phase}
                      </p>
                    </div>
                    <h2 className="font-satoshi text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#000000] sm:text-4xl">
                      {step.title}
                    </h2>
                    <div>
                      <p className="font-inter text-[15px] leading-7 text-black/58">
                        {step.body}
                      </p>
                      <p className="mt-6 border-l border-black/20 pl-4 font-inter text-[12px] uppercase leading-5 tracking-[0.08em] text-black/38">
                        Output - {step.output}
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
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  How we work
                </p>
                <h2 className="max-w-3xl font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                  A few things that never change, no matter the project.
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
                  <p className="font-inter text-[11px] text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-satoshi text-2xl font-semibold text-[#000000]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xl font-inter text-[15px] leading-7 text-black/55">
                    {body}
                  </p>
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
