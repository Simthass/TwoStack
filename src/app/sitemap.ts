import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getPublishedArticles } from "@/lib/sanity";
import { CASE_STUDY_ORDER } from "@/lib/portfolio-data";
import { SERVICE_ORDER } from "@/lib/service-data";

export const revalidate = 60;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedArticles = await getPublishedArticles();
  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.95 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
    ...CASE_STUDY_ORDER.map((slug) => ({ path: `/portfolio/${slug}`, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...SERVICE_ORDER.map((slug) => ({ path: `/services/${slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { path: "/process", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.85 },
    { path: "/about", changeFrequency: "yearly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  ];

  return [
    ...routes.map((route) => ({ url: `${SITE.url}${route.path}` })),
    ...publishedArticles.map((article) => ({
      url: `${SITE.url}/blog/${article.slug}`,
      lastModified: article.updatedAt ?? article.publishedAt,
    })),
  ];
}
