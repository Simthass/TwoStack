import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articleDate } from "@/lib/blog";
import { getPublishedArticles } from "@/lib/sanity";
import ArticleMedia from "@/components/blog/ArticleMedia";
import BlogGrid from "@/components/blog/BlogGrid";
import { createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

const description =
  "Practical guides from TwoStack on ecommerce, mobile apps, operations software and digital systems for growing businesses.";
export const metadata: Metadata = createMetadata({
  title: "Insights on building better business software",
  description,
  path: "/blog",
});

export const revalidate = 60;

const mediaClasses =
  "relative aspect-[16/10] w-full overflow-hidden bg-[#f1f1f1] [&_figure]:m-0 [&_figure]:h-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover";

export default async function BlogPage() {
  const publishedArticles = await getPublishedArticles();
  const [featured, ...rest] = publishedArticles;

  const categories = Array.from(
    new Set(rest.map((article) => article.category).filter(Boolean)),
  );

  const items = rest.map((article) => ({
    key: article.slug,
    category: article.category,
    node: (
      <Link
        href={`/blog/${article.slug}`}
        className="group flex h-full flex-col bg-white"
      >
        <div className={mediaClasses}>
          {article.coverImage ? (
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <ArticleMedia image={article.coverImage} />
            </div>
          ) : (
            <div className="flex h-full w-full items-end bg-black p-5">
              <span className="font-satoshi text-5xl font-semibold text-white/15">
                {article.category}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col pt-6">
          <div className="flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.16em] text-black/50">
            <span className="rounded-full border border-black/15 px-3 py-1 text-black/70">
              {article.category}
            </span>
            <time dateTime={article.publishedAt}>
              {articleDate(article.publishedAt)}
            </time>
          </div>
          <h3 className="mt-5 font-satoshi text-xl font-semibold leading-[1.2] tracking-tight decoration-1 underline-offset-4 group-hover:underline lg:text-[22px]">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 font-inter text-sm leading-7 text-black/60">
            {article.summary}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 font-inter text-sm font-medium">
            Read article
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </span>
        </div>
      </Link>
    ),
  }));

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
        {/* Hero */}
        <header className="bg-black px-6 pb-16 pt-36 text-white lg:px-[35px] lg:pb-20">
          <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-inter text-xs uppercase tracking-[0.18em] text-white/50">
                Insights
              </p>
              <h1 className="mt-7 font-satoshi text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tight">
                Better questions lead to better systems.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-inter text-base leading-8 text-white/65">
                Practical thinking on ecommerce, software and operations.
                Written to help you make clearer decisions before starting a
                project.
              </p>
              <p className="mt-6 font-inter text-xs uppercase tracking-[0.18em] text-white/40">
                {publishedArticles.length} articles
              </p>
            </div>
          </div>
        </header>

        {/* Featured */}
        {featured && (
          <section
            aria-label="Featured article"
            className="mx-auto max-w-[1300px] px-6 pt-14 lg:px-[35px] lg:pt-20"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-7">
                <div className={`${mediaClasses} rounded-md`}>
                  {featured.coverImage ? (
                    <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <ArticleMedia image={featured.coverImage} />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-end bg-black p-8">
                      <span className="font-satoshi text-7xl font-semibold text-white/15">
                        {featured.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <div className="flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.16em]">
                  <span className="rounded-full bg-black px-3 py-1 text-white">
                    Latest
                  </span>
                  <span className="text-black/50">{featured.category}</span>
                </div>
                <h2 className="mt-6 font-satoshi text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-tight decoration-2 underline-offset-[6px] group-hover:underline">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-lg font-inter text-base leading-8 text-black/60">
                  {featured.summary}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 font-inter text-sm">
                  <time
                    dateTime={featured.publishedAt}
                    className="text-black/50"
                  >
                    {articleDate(featured.publishedAt)}
                  </time>
                  <span className="inline-flex items-center gap-2 font-medium">
                    Read article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Archive */}
        {items.length > 0 && (
          <section
            aria-label="All articles"
            className="mx-auto max-w-[1300px] px-6 pb-20 pt-16 lg:px-[35px] lg:pb-28 lg:pt-24"
          >
            <BlogGrid items={items} categories={categories} />
          </section>
        )}

        {/* CTA */}
        <div className="bg-black px-6 py-20 text-white lg:px-[35px]">
          <div className="mx-auto flex max-w-[1300px] flex-col justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-xl font-satoshi text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
              Have a project to scope?
            </p>
            <Link
              href="/contact"
              className="w-fit rounded-full bg-white px-7 py-3 font-inter text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
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
