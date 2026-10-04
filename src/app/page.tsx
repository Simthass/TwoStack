import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Grain from "@/components/Grain";
import BrandStrip from "@/components/BrandStrip";
import AboutSection from "@/components/AboutSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { FAQS } from "@/lib/faq-data";
import { getPublishedArticles } from "@/lib/sanity";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

/* ------------------------------------------------------------------ */
/*  FAQPage JSON-LD - generated from the shared faq-data.ts           */
/* ------------------------------------------------------------------ */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const revalidate = 60;

export default async function Home() {
  const publishedArticles = await getPublishedArticles();
  return (
    <>
      <Grain />
      <main className="relative min-h-screen bg-[#ffffff]">
        <Nav />
        <Hero />
        <BrandStrip />
        <AboutSection />
        <ServicesMarquee />

        {/* What You Get Section */}
        <section id="what-you-get">
          <WhatYouGetSection />
        </section>

        <FAQSection />

        <section className="border-t border-black/10 bg-white px-6 py-20 text-black lg:px-[35px]" aria-labelledby="insights-heading">
          <div className="mx-auto max-w-[1300px]">
            <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-7 md:flex-row md:items-end">
              <div><p className="font-inter text-xs uppercase tracking-[0.16em] text-black/45">From the studio</p><h2 id="insights-heading" className="mt-4 font-satoshi text-3xl font-semibold md:text-5xl">Useful thinking before the build.</h2></div>
              <Link href="/blog" className="font-inter text-sm underline underline-offset-4">All insights ↗</Link>
            </div>
            <div className="grid gap-5 pt-7 md:grid-cols-3">{publishedArticles.slice(0, 3).map((article) => <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex min-h-60 flex-col border border-black/10 p-6 transition-colors hover:bg-black/5"><span className="font-inter text-xs uppercase tracking-wider text-black/45">{article.category}</span><h3 className="mt-7 font-satoshi text-2xl font-semibold leading-tight">{article.title}</h3><span className="mt-auto pt-6 font-inter text-sm text-black/55 group-hover:text-black">Read article ↗</span></Link>)}</div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process">
          <ProcessSection />
        </section>

        {/* Contact/CTA Section */}
        <section id="contact">
          <CTASection />
        </section>

        <Footer />
      </main>

      {/* FAQPage structured data - mirrors on-page FAQ content exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
