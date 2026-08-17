import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import ContactForm from "@/components/contact/ContactForm";
import { Reveal } from "@/components/services/Reveal";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

const path = "/contact";
const description =
  "Contact TwoStack in Colombo, Sri Lanka for web development, ecommerce, mobile apps, POS systems, AI automation and custom software projects.";

export const metadata: Metadata = createMetadata({
  title: "Contact TwoStack — Software Development Sri Lanka",
  description,
  path,
});

export default function ContactPage() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path },
    ]),
    webPageSchema({
      name: "Contact TwoStack",
      description,
      path,
      type: "ContactPage",
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
        <section className="bg-[#000000] px-5 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 md:pt-40 lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <nav aria-label="Breadcrumb" className="font-inter text-[12px] text-white/40">
                <Link href="/" className="hover:text-white/70">Home</Link>
                <span className="mx-2">/</span>
                <span aria-current="page" className="text-white/60">Contact</span>
              </nav>
              <p className="mt-10 font-inter text-[12px] uppercase tracking-[0.16em] text-white/35">
                Colombo / Sri Lanka / Worldwide
              </p>
              <h1 className="mt-5 max-w-5xl font-satoshi text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                Bring the problem. We’ll work out what is worth building.
              </h1>
              <p className="mt-7 max-w-2xl font-inter text-base leading-7 text-white/56 sm:text-lg sm:leading-8">
                Tell us where the business is losing time, visibility or customers. We will use that context to decide whether the answer is a website, application, automation layer, POS platform or something smaller.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 md:py-24 lg:px-[35px]">
          <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-black/40">Direct contact</p>
                <div className="mt-6 border-t border-black/10">
                  <a href={`mailto:${SITE.email}`} className="group block border-b border-black/10 py-5">
                    <span className="font-inter text-[11px] text-black/35">Email</span>
                    <span className="mt-1 block font-satoshi text-xl font-medium text-black group-hover:underline">{SITE.email}</span>
                  </a>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group block border-b border-black/10 py-5">
                    <span className="font-inter text-[11px] text-black/35">WhatsApp</span>
                    <span className="mt-1 block font-satoshi text-xl font-medium text-black group-hover:underline">{SITE.phoneDisplay}</span>
                  </a>
                  <div className="border-b border-black/10 py-5">
                    <span className="font-inter text-[11px] text-black/35">Location</span>
                    <span className="mt-1 block font-satoshi text-xl font-medium text-black">{SITE.location}</span>
                  </div>
                </div>
                <p className="mt-6 max-w-sm font-inter text-sm leading-6 text-black/45">
                  TwoStack works with businesses in Sri Lanka and remote clients worldwide. Project communication can be handled online from discovery through launch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <div className="mb-8">
                  <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-black/40">Project brief</p>
                  <h2 className="mt-3 font-satoshi text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-black">
                    Enough context for a useful first conversation.
                  </h2>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
