import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import CtaFooter from "@/components/services/CtaFooter";
import { Reveal } from "@/components/services/Reveal";
import { CASE_STUDY_ORDER, CASE_STUDIES } from "@/lib/portfolio-data";
import {
  breadcrumbSchema,
  createMetadata,
  jsonLd,
  webPageSchema,
} from "@/lib/seo";

const path = "/portfolio";
const description =
  "See what TwoStack has built: wholesale ecommerce, retail platforms and admin systems delivered end-to-end for businesses in Sri Lanka and the UAE.";

export const metadata: Metadata = createMetadata({
  title: "Portfolio - Projects We've Built",
  description,
  path,
});

export default function PortfolioPage() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Portfolio", path },
    ]),
    webPageSchema({
      name: "TwoStack Portfolio",
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
        <section className="relative overflow-hidden bg-[#000000] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:pt-40 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-white"
                />
                <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-white/45">
                  Portfolio
                </p>
              </div>
              <h1 className="max-w-[900px] font-satoshi text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
                Real systems, built end-to-end.
              </h1>
              <p className="mt-7 max-w-2xl font-inter text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                A look at the ecommerce platforms and admin systems TwoStack has
                designed and built - from the storefront customers see to the
                authentication, inventory and operational tooling behind it.
                Open a project for the full case study.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#ffffff] px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
              {CASE_STUDY_ORDER.map((slug, index) => {
                const study = CASE_STUDIES[slug];
                return (
                  <Reveal key={slug} delay={Math.min(index * 0.06, 0.18)}>
                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#e0ddd8] shadow-[0_10px_28px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:-translate-y-1 sm:aspect-[16/11]">
                        <Image
                          src={study.heroImage}
                          alt={study.heroImageAlt}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>

                      <span className="mt-4 block font-inter text-[10px] uppercase tracking-[0.14em] text-black/35 sm:text-[11px]">
                        {study.eyebrow}
                      </span>
                      <h2 className="mt-2 font-satoshi text-lg font-semibold leading-tight tracking-[-0.015em] text-[#000000] sm:text-xl">
                        {study.name}
                      </h2>
                      <p className="mt-2 line-clamp-2 font-inter text-[13px] leading-6 text-black/55 sm:text-sm">
                        {study.shortDescription}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {study.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/12 px-2.5 py-1 font-inter text-[10px] text-black/55 sm:text-[11px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-inter text-[13px] text-black/55 transition-transform group-hover:translate-x-1 group-hover:text-black">
                        View case study →
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
