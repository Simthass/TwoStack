import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

const description =
  "Learn how TwoStack, a small software studio in Colombo, Sri Lanka, connects websites, applications, automation and business operations.";
export const metadata: Metadata = createMetadata({
  title: "About our software studio in Colombo",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageSchema({
              name: "About TwoStack",
              description,
              path: "/about",
              type: "AboutPage",
            }),
          ]),
        }}
      />
      <Nav />
      <main className="bg-white text-black">
        <header className="bg-black px-6 pb-24 pt-36 text-white lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <p className="font-inter text-xs uppercase tracking-[0.16em] text-white/50">
              About
            </p>
            <h1 className="mt-8 max-w-5xl font-satoshi text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1.02] tracking-tight">
              Software that fits the way your business works.
            </h1>
            <p className="mt-8 max-w-2xl font-inter text-lg leading-8 text-white/65">
              TwoStack is a small, remote software studio based in Colombo, Sri
              Lanka. We work with businesses that need their digital presence
              and day-to-day operations to function together.
            </p>
          </div>
        </header>
        <section className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:grid-cols-[.5fr_1fr] lg:px-[35px]">
          <p className="font-inter text-xs uppercase tracking-[0.15em] text-black/45">
            How we work
          </p>
          <div className="max-w-3xl">
            <h2 className="font-satoshi text-3xl font-semibold leading-tight md:text-5xl">
              Understand the work. Build the right system. Keep improving it.
            </h2>
            <p className="mt-8 font-inter text-base leading-8 text-black/65">
              A website may bring in a customer, but the enquiry, order, payment
              and follow-up still need to move through the business. We map
              those steps before choosing screens or technology. Our work covers
              web and mobile products, ecommerce, internal tools and automation
              where they solve a real operating problem.
            </p>
            <p className="mt-5 font-inter text-base leading-8 text-black/65">
              Our team brings together client discovery and delivery. We explain
              scope, assumptions and trade-offs plainly, and document the work
              so a client can make informed decisions throughout a project.
            </p>
          </div>
        </section>
        <section className="border-t border-black/10 px-6 py-16 lg:px-[35px]">
          <div className="mx-auto grid max-w-[1300px] gap-8 md:grid-cols-3">
            <div>
              <p className="font-inter text-xs uppercase text-black/45">
                Based in
              </p>
              <h3 className="mt-3 font-satoshi text-2xl font-semibold">
                Colombo, Sri Lanka
              </h3>
            </div>
            <div>
              <p className="font-inter text-xs uppercase text-black/45">Work</p>
              <h3 className="mt-3 font-satoshi text-2xl font-semibold">
                Local and remote projects
              </h3>
            </div>
            <div>
              <p className="font-inter text-xs uppercase text-black/45">
                See the evidence
              </p>
              <Link
                href="/portfolio"
                className="mt-3 block font-satoshi text-2xl font-semibold underline underline-offset-4"
              >
                Explore our work ↗
              </Link>
            </div>
          </div>
        </section>
        <div className="border-t border-black/10 px-6 py-16 lg:px-[35px]">
          <div className="mx-auto flex max-w-[1300px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <h2 className="font-satoshi text-3xl font-semibold">
              Tell us what you are trying to improve.
            </h2>
            <Link
              href="/contact"
              className="w-fit rounded-full bg-black px-7 py-3 font-inter text-sm text-white"
            >
              Start a conversation ↗
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
