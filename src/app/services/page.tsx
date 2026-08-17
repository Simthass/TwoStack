import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import Hero from "@/components/services/Hero";
import SystemLayers from "@/components/services/SystemLayers";
import LiveDemo from "@/components/services/LiveDemo";
import Process from "@/components/services/Process";
import CtaFooter from "@/components/services/CtaFooter";
import { Reveal } from "@/components/services/Reveal";
import { SERVICE_ORDER, SERVICES } from "@/lib/service-data";
import { breadcrumbSchema, createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

const path = "/services";
const description =
  "Explore TwoStack software development services in Sri Lanka: web development, ecommerce, mobile apps, POS systems, AI automation and custom business software.";

export const metadata: Metadata = createMetadata({
  title: "Software Development Services in Sri Lanka",
  description,
  path,
});

export default function ServicesPage() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path },
    ]),
    webPageSchema({
      name: "TwoStack Software Development Services",
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
      <main>
        <Hero />

        <section className="bg-[#000000] px-5 pb-20 sm:px-6 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px] border-t border-white/10 pt-10">
            <Reveal>
              <div className="grid grid-cols-1 gap-5 pb-8 md:grid-cols-[.7fr_1.3fr]">
                <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/35">
                  Service index
                </p>
                <h2 className="font-satoshi text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Six capabilities. One engineering system.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-2 xl:grid-cols-3">
              {SERVICE_ORDER.map((slug, index) => {
                const service = SERVICES[slug];
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="group border-b border-white/10 py-7 md:border-r md:px-7 md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(4)]:pl-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-[11px] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-white"
                        
                      />
                    </div>
                    <h3 className="mt-7 font-satoshi text-2xl font-semibold leading-7 text-white">
                      {service.metadataTitle}
                    </h3>
                    <p className="mt-3 max-w-md font-inter text-sm leading-6 text-white/48">
                      {service.description}
                    </p>
                    <span className="mt-7 inline-block font-inter text-sm text-white/45 transition-transform group-hover:translate-x-1 group-hover:text-white/75">
                      View capability →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <SystemLayers />
        <LiveDemo />
        <Process />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
