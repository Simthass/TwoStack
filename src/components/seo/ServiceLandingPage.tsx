import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import CtaFooter from "@/components/services/CtaFooter";
import { Reveal } from "@/components/services/Reveal";
import type { ServicePageData } from "@/lib/service-data";
import { SERVICE_ORDER, SERVICES } from "@/lib/service-data";

export default function ServiceLandingPage({
  service,
}: {
  service: ServicePageData;
}) {
  const related = SERVICE_ORDER.filter((slug) => slug !== service.slug)
    .slice(0, 3)
    .map((slug) => SERVICES[slug]);

  return (
    <>
      <Grain />
      <Nav />
      <main className="min-h-screen bg-[#ffffff]">
        <section className="relative overflow-hidden bg-[#000000] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:pt-40 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="mb-8 font-inter text-[12px] text-white/40"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-white/70"
                >
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white/70"
                >
                  Services
                </Link>
                <span className="mx-2">/</span>
                <span aria-current="page" className="text-white/60">
                  {service.metadataTitle}
                </span>
              </nav>
            </Reveal>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,.8fr)] lg:gap-16">
              <div>
                <Reveal>
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-white"
                    />
                    <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-white/45">
                      {service.eyebrow}
                    </p>
                  </div>
                  <h1 className="max-w-[1000px] font-satoshi text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
                    {service.title}
                  </h1>
                  <p className="mt-7 max-w-3xl font-inter text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                    {service.intro}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-inter text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      Discuss this project <span aria-hidden="true">↗</span>
                    </Link>
                    <Link
                      href="/process"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-inter text-sm font-medium text-white transition-colors hover:border-white/45"
                    >
                      See our process
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.08}>
                <aside
                  className="border-t border-white/15 pt-5 lg:mt-8"
                  aria-label="Problems this service solves"
                >
                  <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/35">
                    When this becomes useful
                  </p>
                  <div className="mt-4 divide-y divide-white/10 border-b border-white/10">
                    {service.problems.map((problem, index) => (
                      <div
                        key={problem}
                        className="grid grid-cols-[34px_1fr] gap-3 py-4"
                      >
                        <span className="font-inter text-[11px] text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="font-inter text-sm leading-6 text-white/65">
                          {problem}
                        </p>
                      </div>
                    ))}
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-7 border-b border-black/10 pb-10 md:grid-cols-[.72fr_1.28fr] md:gap-14">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  01 - Capability
                </p>
                <h2 className="font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                  What TwoStack actually builds.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {service.capabilities.map((capability, index) => (
                <Reveal
                  key={capability.title}
                  delay={Math.min(index * 0.04, 0.16)}
                  className="border-b border-black/10 px-0 py-8 md:border-r md:px-7 md:first:pl-0 md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(4)]:pl-0"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-inter text-[11px] text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-black"
                    />
                  </div>
                  <h3 className="font-satoshi text-2xl font-semibold tracking-[-0.02em] text-[#000000]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-md font-inter text-[15px] leading-7 text-black/58">
                    {capability.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[.72fr_1.28fr] md:gap-14">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  02 - System thinking
                </p>
                <div>
                  <h2 className="font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                    Built as one system, not separate pieces.
                  </h2>
                  <p className="mt-5 max-w-2xl font-inter text-base leading-7 text-black/55">
                    The screens, the backend, the data and the integrations are
                    all planned together. That's what makes it reliable long
                    after launch.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 border-t border-black/10 lg:grid-cols-3">
              {service.systems.map((system, index) => (
                <Reveal
                  key={system.label}
                  delay={index * 0.06}
                  className="border-b border-black/10 py-8 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
                >
                  <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/35">
                    {system.label}
                  </p>
                  <p className="mt-6 font-satoshi text-xl font-medium leading-7 text-[#000000]">
                    {system.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#000000] px-5 py-16 text-white sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-white/35">
                03 - Local operating context
              </p>
              <h2 className="mt-5 font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                Built in Colombo. Designed for the way the business actually
                runs.
              </h2>
              <p className="mt-6 max-w-xl font-inter text-base leading-7 text-white/55">
                {service.localNote}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border-t border-white/15">
                {service.outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="grid grid-cols-[42px_1fr] items-center border-b border-white/10 py-5"
                  >
                    <span className="font-inter text-[11px] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-satoshi text-lg font-medium text-white/85 sm:text-xl">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                04 - Questions
              </p>
              <h2 className="mt-4 max-w-3xl font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                Answers before the sales call.
              </h2>
            </Reveal>

            <div className="mt-10 border-t border-black/10">
              {service.faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={Math.min(index * 0.04, 0.12)}>
                  <details className="group border-b border-black/10 py-6">
                    <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_24px] items-start gap-2">
                      <span className="pt-1 font-inter text-[11px] text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-satoshi text-xl font-medium leading-7 text-[#000000] sm:text-2xl">
                        {faq.question}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="text-xl text-black/35 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="ml-[42px] mt-4 max-w-3xl pr-8 font-inter text-[15px] leading-7 text-black/58">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-20 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-7 md:flex-row md:items-end">
                <div>
                  <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                    Related capabilities
                  </p>
                  <h2 className="mt-3 font-satoshi text-3xl font-semibold tracking-[-0.03em] text-[#000000]">
                    The rest of the stack.
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="font-inter text-sm text-black/55 hover:text-black"
                >
                  View all services ↗
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group border-b border-black/10 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/35">
                    {item.eyebrow}
                  </span>
                  <h3 className="mt-4 font-satoshi text-2xl font-semibold leading-7 text-[#000000]">
                    {item.metadataTitle}
                  </h3>
                  <span className="mt-6 inline-block font-inter text-sm text-black/45 transition-transform group-hover:translate-x-1">
                    Explore →
                  </span>
                </Link>
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
