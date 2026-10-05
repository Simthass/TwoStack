import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articleDate, articleDateTime, publishedArticles } from "@/lib/blog";
import { getPublishedArticle, getPublishedArticles } from "@/lib/sanity";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleMedia from "@/components/blog/ArticleMedia";
import { createMetadata, jsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return process.env.NEXT_SANITY_PROJECT_ID
    ? []
    : publishedArticles.map(({ slug }) => ({ slug }));
}
export const dynamicParams = true;
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false } };
  const path = `/blog/${slug}`;
  const socialImage = `${SITE.url}${path}/opengraph-image`;
  return {
    ...createMetadata({
      title: article.seoTitle || article.title,
      description: article.description,
      path,
    }),
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE.url}${path}`,
      type: "article",
      publishedTime: articleDateTime(article.publishedAt),
      modifiedTime: articleDateTime(article.updatedAt ?? article.publishedAt),
      images: [
        { url: socialImage, width: 1200, height: 630, alt: article.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [socialImage],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) notFound();
  const path = `/blog/${slug}`;
  const related = (await getPublishedArticles())
    .filter((item) => item.slug !== slug && item.category === article.category)
    .slice(0, 2);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE.url}${path}#article`,
      headline: article.title,
      description: article.description,
      mainEntityOfPage: `${SITE.url}${path}`,
      image: [`${SITE.url}${path}/opengraph-image`],
      datePublished: articleDateTime(article.publishedAt),
      dateModified: articleDateTime(article.updatedAt ?? article.publishedAt),
      author: {
        "@type": article.author === "TwoStack team" ? "Organization" : "Person",
        name: article.author,
      },
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: SITE.language,
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <Nav />
      <main className="bg-white text-black">
        <header className="bg-black px-6 pb-16 pt-36 text-white lg:px-[35px] lg:pb-24">
          <div className="mx-auto max-w-[1000px]">
            <p className="mt-12 font-inter text-xs uppercase tracking-[0.18em] text-white/55">
              {article.category}
            </p>
            <h1 className="mt-5 font-satoshi text-[clamp(2.7rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl font-inter text-lg leading-8 text-white/65">
              {article.summary}
            </p>
            <div className="mt-10 border-t border-white/20 pt-5 font-inter text-xs text-white/55">
              By {article.author} <span aria-hidden="true">·</span>{" "}
              <time dateTime={article.publishedAt}>
                {articleDate(article.publishedAt)}
              </time>{" "}
              <span aria-hidden="true">·</span> {article.readingMinutes} min
              read
              {article.updatedAt && (
                <>
                  {" "}
                  <span aria-hidden="true">·</span> Updated{" "}
                  <time dateTime={article.updatedAt}>
                    {articleDate(article.updatedAt)}
                  </time>
                </>
              )}
            </div>
          </div>
        </header>
        {article.coverImage && (
          <div className="mx-auto max-w-[1100px] px-6 lg:px-[35px]">
            <ArticleMedia image={article.coverImage} cover />
          </div>
        )}
        <div className="mx-auto grid max-w-[1100px] gap-14 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_220px] lg:px-[35px] lg:py-24">
          <article className="min-w-0 max-w-[720px] font-inter text-[16px] leading-[1.85] text-black/75">
            <ArticleBody article={article} />
            <div className="mt-16 border-t border-black/15 pt-7 text-sm text-black/55">
              This guide is for project planning. Requirements and costs depend
              on your business, integrations and delivery scope.
            </div>
          </article>
          <aside className="h-fit border-t border-black/20 pt-5 lg:sticky lg:top-28">
            <p className="font-inter text-xs uppercase tracking-[0.15em] text-black/45">
              Next steps
            </p>
            <Link
              className="mt-5 block border-b border-black/10 pb-5 font-satoshi text-lg font-semibold hover:underline"
              href={article.relatedService.href}
            >
              {article.relatedService.label} ↗
            </Link>
            {article.relatedCaseStudy && (
              <Link
                className="block border-b border-black/10 py-5 font-satoshi text-lg font-semibold hover:underline"
                href={article.relatedCaseStudy.href}
              >
                {article.relatedCaseStudy.label} ↗
              </Link>
            )}
            <Link
              className="mt-6 inline-block rounded-full bg-black px-5 py-3 font-inter text-sm text-white"
              href={`/contact?source=blog&article=${encodeURIComponent(slug)}`}
            >
              Discuss your project ↗
            </Link>
          </aside>
        </div>
        {related.length > 0 && (
          <section className="border-t border-black/10 px-6 py-16 lg:px-[35px]">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="font-satoshi text-3xl font-semibold">
                Keep reading
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    href={`/blog/${item.slug}`}
                    key={item.slug}
                    className="border border-black/15 p-7 hover:bg-black/5"
                  >
                    <p className="font-inter text-xs uppercase text-black/50">
                      {item.category}
                    </p>
                    <h3 className="mt-4 font-satoshi text-xl font-semibold">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
