import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import CtaFooter from "@/components/services/CtaFooter";
import { Reveal } from "@/components/services/Reveal";
import type { CaseStudy } from "@/lib/portfolio-data";
import { CASE_STUDY_ORDER, CASE_STUDIES } from "@/lib/portfolio-data";

export default function PortfolioCaseStudy({ study }: { study: CaseStudy }) {
  const related = CASE_STUDY_ORDER.filter((slug) => slug !== study.slug)
    .slice(0, 2)
    .map((slug) => CASE_STUDIES[slug]);

  return (
    <>
      <Grain />
      <Nav />
      <main className="min-h-screen bg-[#ffffff]">
        {/* Hero */}
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
                  href="/portfolio"
                  className="transition-colors hover:text-white/70"
                >
                  Portfolio
                </Link>
                <span className="mx-2">/</span>
                <span aria-current="page" className="text-white/60">
                  {study.name}
                </span>
              </nav>
            </Reveal>

            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-white"
                />
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-white/45">
                  {study.eyebrow}
                </p>
              </div>
              <h1 className="max-w-[1000px] font-satoshi text-[clamp(2.25rem,6.5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
                {study.name}
              </h1>
              <p className="mt-7 max-w-3xl font-inter text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                {study.shortDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-4 py-1.5 font-inter text-[12px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-inter text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Discuss a similar project <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-inter text-sm font-medium text-white transition-colors hover:border-white/45"
                >
                  Back to portfolio
                </Link>
                {study.githubUrl && (
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-inter text-sm font-medium text-white transition-colors hover:border-white/45"
                  >
                    View source ↗
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="border-b border-black/10 bg-[#ffffff] px-5 py-14 sm:px-6 md:py-20 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="relative w-full overflow-hidden rounded-2xl bg-[#e0ddd8] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src={study.heroImage}
                  alt={study.heroImageAlt}
                  width={1919}
                  height={1079}
                  unoptimized
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-4 font-inter text-[13px] text-black/40">
                Full showcase of the {study.name} platform across desktop,
                tablet and mobile.
              </p>
            </Reveal>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {study.gallery.map((image, index) => (
                <Reveal
                  key={`${image.src}-${index}`}
                  delay={Math.min(index * 0.05, 0.15)}
                >
                  <div className="relative aspect-[1919/1079] w-full overflow-hidden rounded-md bg-[#e0ddd8] shadow-[0_10px_28px_rgba(0,0,0,0.1)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-b border-black/10 bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-[.72fr_1.28fr] md:gap-14">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  01 - About this project
                </p>
                <p className="max-w-3xl font-inter text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                  {study.about}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenge / Approach / Delivered */}
        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-7 border-b border-black/10 pb-10 md:grid-cols-[.72fr_1.28fr] md:gap-14">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  02 - How it was built
                </p>
                <h2 className="font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                  The challenge, the approach, the outcome.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 border-t border-black/10 lg:grid-cols-3">
              {[
                { label: "01 / The Challenge", body: study.challenge },
                { label: "02 / Our Approach", body: study.approach },
                { label: "03 / Delivered Solution", body: study.delivered },
              ].map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 0.06}
                  className="border-b border-black/10 py-8 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
                >
                  <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/35">
                    {item.label}
                  </p>
                  <p className="mt-6 font-inter text-[15px] leading-7 text-black/62">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-t border-black/10 bg-[#ffffff] px-5 py-14 sm:px-6 md:py-16 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-[.72fr_1.28fr] md:gap-14 md:items-start">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/12 px-4 py-1.5 font-inter text-[13px] text-black/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Key features */}
        <section className="border-t border-black/10 bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-7 border-b border-black/10 pb-10 md:grid-cols-[.72fr_1.28fr] md:gap-14">
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                  03 - Key features
                </p>
                <h2 className="font-satoshi text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#000000]">
                  What shipped in this build.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {study.keyFeatures.map((feature, index) => (
                <Reveal
                  key={feature}
                  delay={Math.min(index * 0.03, 0.18)}
                  className="grid grid-cols-[34px_1fr] gap-3 border-b border-black/10 py-5 md:odd:pr-8 md:even:pl-8 md:odd:border-r-0 lg:odd:border-r lg:odd:pr-8"
                >
                  <span className="font-inter text-[11px] text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-inter text-sm leading-6 text-black/68">
                    {feature}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How to review */}
        <section className="bg-[#000000] px-5 py-16 text-white sm:px-6 md:py-20 lg:px-[35px]">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-white/35">
                How to review this case study
              </p>
              <p className="mt-6 max-w-3xl font-inter text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                {study.reviewNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-20 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-7 md:flex-row md:items-end">
                <div>
                  <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-black/40">
                    More work
                  </p>
                  <h2 className="mt-3 font-satoshi text-3xl font-semibold tracking-[-0.03em] text-[#000000]">
                    Other projects we've built.
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="font-inter text-sm text-black/55 hover:text-black"
                >
                  View all projects ↗
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="group border-b border-black/10 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/35">
                    {item.eyebrow}
                  </span>
                  <h3 className="mt-4 font-satoshi text-2xl font-semibold leading-7 text-[#000000]">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-w-md font-inter text-sm leading-6 text-black/55">
                    {item.shortDescription}
                  </p>
                  <span className="mt-6 inline-block font-inter text-sm text-black/45 transition-transform group-hover:translate-x-1">
                    View case study →
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
