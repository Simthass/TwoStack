import { createClient } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { publishedArticles, type Article } from "@/lib/blog";

const projectId = process.env.NEXT_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_SANITY_DATASET;
export const sanityConfigured = Boolean(projectId && dataset);
const client = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion: "2026-09-01",
      useCdn: true,
      perspective: "published",
    })
  : null;
const builder = client ? createImageUrlBuilder(client) : null;

export function sanityImageUrl(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source).url();
}

const query = `*[_type == "post" && defined(slug.current) && defined(title) && defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())] | order(publishedAt desc) {
  "slug": slug.current, title, seoTitle, "description": coalesce(seoDescription, summary), summary, category,
  "author": authorName, publishedAt, "updatedAt": _updatedAt, relatedService, relatedCaseStudy, coverImage, body
}`;

export async function getPublishedArticles(): Promise<Article[]> {
  if (!client) return [...publishedArticles];
  try {
    const entries = await client.fetch<Article[]>(
      query,
      {},
      { next: { revalidate: 60 } },
    );
    return entries
      .filter(
        (item) =>
          item.slug &&
          item.title &&
          item.body?.length &&
          item.relatedService?.href,
      )
      .map((item) => ({
        ...item,
        status: "published" as const,
        sections: [],
        readingMinutes: Math.max(
          1,
          Math.ceil(JSON.stringify(item.body).length / 1200),
        ),
      }));
  } catch (error) {
    console.error("Could not fetch published Sanity articles", error);
    return [...publishedArticles];
  }
}

export async function getPublishedArticle(slug: string) {
  if (!/^[a-z0-9-]{1,90}$/.test(slug)) return undefined;
  return (await getPublishedArticles()).find(
    (article) => article.slug === slug,
  );
}
