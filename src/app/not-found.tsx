import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[75vh] bg-[#000000] px-6 pb-24 pt-36 text-white md:pt-44">
        <div className="mx-auto max-w-[1300px]">
          <p className="font-inter text-xs uppercase tracking-[0.18em] text-white/35">
            404 · Page not found
          </p>
          <h1 className="mt-5 max-w-4xl font-satoshi text-5xl font-bold leading-[0.98] sm:text-6xl md:text-8xl">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-7 max-w-xl font-inter text-base leading-7 text-white/50">
            The page may have moved or no longer exists. Try one of the pages
            below instead.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="rounded-full bg-white px-6 py-3 font-inter text-sm font-medium text-black">
              Home
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-6 py-3 font-inter text-sm text-white">
              Services
            </Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 font-inter text-sm text-white">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
