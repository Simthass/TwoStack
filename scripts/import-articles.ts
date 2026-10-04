/** One-time migration of the four code-authored articles into Sanity. Safe to rerun. */
import { createClient } from "@sanity/client";
import { loadEnvConfig } from "@next/env";
import { randomUUID } from "node:crypto";
import { publishedArticles } from "../src/lib/blog";

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || !dataset || !token) throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and SANITY_WRITE_TOKEN before importing.");

const client = createClient({ projectId, dataset, token, apiVersion: "2026-09-01", useCdn: false });
const span = (text: string) => ({ _type: "span", _key: randomUUID().slice(0, 12), text, marks: [] });
const block = (text: string, style = "normal", listItem?: "bullet") => ({ _type: "block", _key: randomUUID().slice(0, 12), style, markDefs: [], children: [span(text)], ...(listItem ? { listItem, level: 1 } : {}) });

async function main() {
  for (const article of publishedArticles) {
    const body = article.sections.flatMap((section) => [
      block(section.heading, "h2"),
      ...section.paragraphs.map((text) => block(text)),
      ...(section.bullets || []).map((text) => block(text, "normal", "bullet")),
    ]);
    const result = await client.createIfNotExists({
      _id: `post.${article.slug}`, _type: "post", title: article.title,
      slug: { _type: "slug", current: article.slug }, summary: article.summary,
      seoDescription: article.description, category: article.category, authorName: article.author,
      publishedAt: `${article.publishedAt}T09:00:00+05:30`, body,
      relatedService: { _type: "object", ...article.relatedService },
      ...(article.relatedCaseStudy ? { relatedCaseStudy: { _type: "object", ...article.relatedCaseStudy } } : {}),
    });
    process.stdout.write(`Ready: ${result.slug.current}\n`);
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
