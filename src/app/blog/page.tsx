import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articleDate } from "@/lib/blog";
import { getPublishedArticles } from "@/lib/sanity";
import ArticleMedia from "@/components/blog/ArticleMedia";
import { createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

const description =
  "Practical guides from TwoStack on ecommerce, mobile apps, operations software and digital systems for growing businesses.";
export const metadata: Metadata = createMetadata({
  title: "Insights on building better business software",
  description,
  path: "/blog",
});

export const revalidate = 60;

export default async function BlogPage() {
  const publishedArticles = await getPublishedArticles();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageSchema({
              name: "TwoStack insights",
              description,
              path: "/blog",
            }),
          ]),
        }}
      />
      <Nav />
      <main className="bg-white text-black">
        <header className="bg-black px-6 pb-20 pt-36 text-white lg:px-[35px]">
          <div className="mx-auto max-w-[1300px]">
            <p className="font-inter text-xs uppercase tracking-[0.18em] text-white/50">
              Insights
            </p>
            <h1 className="mt-7 max-w-4xl font-satoshi text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tight">
              Better questions lead to better systems.
            </h1>
            <p className="mt-7 max-w-2xl font-inter text-base leading-8 text-white/65">
              Practical thinking on ecommerce, software and operations. Written
              to help you make clearer decisions before starting a project.
            </p>
          </div>
        </header>
        <section
          className="mx-auto max-w-[1300px] px-6 py-16 lg:px-[35px] lg:py-24"
          aria-label="Articles"
        >
          <div className="mb-8 flex items-end justify-between border-b border-black/15 pb-5">
            <h2 className="font-satoshi text-2xl font-semibold">
              Latest articles
            </h2>
            <span className="font-inter text-xs text-black/45">
              {publishedArticles.length} articles
            </span>
          </div>
          <div className="grid gap-px bg-black/10 sm:grid-cols-2 xl:grid-cols-4">
            {publishedArticles.map((article, index) => (
              <Link
                href={`/blog/${article.slug}`}
                key={article.slug}
                className="group flex min-h-72 flex-col bg-white p-6 transition-colors hover:bg-[#f8f8f8]"
              >
                <div className="flex justify-between font-inter text-xs uppercase tracking-[0.13em] text-black/50">
                  <span>{article.category}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                {article.coverImage && (
                  <div className="mt-7 overflow-hidden rounded-md [&_figure]:m-0">
                    <ArticleMedia image={article.coverImage} />
                  </div>
                )}
                <h3 className="mt-8 max-w-xl font-satoshi text-xl font-semibold leading-tight lg:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-4 max-w-xl font-inter text-sm leading-7 text-black/60">
                  {article.summary}
                </p>
                <div className="mt-auto flex justify-between pt-8 font-inter text-xs text-black/50">
                  <time dateTime={article.publishedAt}>
                    {articleDate(article.publishedAt)}
                  </time>
                  <span className="text-black group-hover:translate-x-1 transition-transform">
                    Read article ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="border-t border-black/10 px-6 py-16 lg:px-[35px]">
          <div className="mx-auto flex max-w-[1300px] flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="font-satoshi text-3xl font-semibold">
              Have a project to scope?
            </p>
            <Link
              href="/contact"
              className="w-fit rounded-full bg-black px-7 py-3 font-inter text-sm text-white"
            >
              Talk to TwoStack ↗
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
