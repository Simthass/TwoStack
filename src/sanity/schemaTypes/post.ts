import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post", title: "Articles", type: "document",
  groups: [{ name: "content", title: "Article" }, { name: "seo", title: "SEO" }],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (Rule) => Rule.required().max(100) }),
    defineField({ name: "slug", title: "URL slug", type: "slug", group: "content", options: { source: "title", maxLength: 90 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, group: "content", description: "A useful description of the article for readers and listing pages.", validation: (Rule) => Rule.required().min(40).max(300) }),
    defineField({ name: "category", title: "Category", type: "string", group: "content", options: { list: ["Ecommerce", "Operations", "Product planning", "Web development", "Automation", "Case notes"] }, validation: (Rule) => Rule.required() }),
    defineField({ name: "authorName", title: "Author name", type: "string", group: "content", description: "Use a real contributor or the TwoStack team.", validation: (Rule) => Rule.required() }),
    defineField({ name: "publishedAt", title: "Publication date", type: "datetime", group: "content", initialValue: () => new Date().toISOString(), validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", group: "content", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: (Rule) => Rule.required() }), defineField({ name: "caption", title: "Caption", type: "string" })] }),
    defineField({ name: "body", title: "Article body", type: "array", group: "content", of: [
      { type: "block", styles: [{ title: "Paragraph", value: "normal" }, { title: "Heading 2", value: "h2" }, { title: "Heading 3", value: "h3" }, { title: "Quote", value: "blockquote" }], marks: { decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }], annotations: [{ name: "link", title: "Link", type: "object", fields: [{ name: "href", type: "url", title: "URL", validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }) }] }] } },
      { type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alternative text", type: "string", validation: (Rule) => Rule.required() }, { name: "caption", title: "Caption", type: "string" }] },
    ], validation: (Rule) => Rule.required().min(1) }),
    defineField({ name: "relatedService", title: "Related service", type: "object", group: "content", fields: [
      { name: "label", title: "Link label", type: "string", validation: (Rule) => Rule.required() },
      { name: "href", title: "Service page", type: "string", options: { list: ["/services/web-development", "/services/ecommerce-development", "/services/mobile-development", "/services/erp-systems-development", "/services/ai-automation", "/services/custom-software-development"] }, validation: (Rule) => Rule.required() },
    ], validation: (Rule) => Rule.required() }),
    defineField({ name: "relatedCaseStudy", title: "Related case study (optional)", type: "object", group: "content", fields: [
      { name: "label", title: "Link label", type: "string" },
      { name: "href", title: "Case study", type: "string", options: { list: ["/portfolio/faux-fur-boa", "/portfolio/amazonshop-lk", "/portfolio/isports-cricket-store"] } },
    ] }),
    defineField({ name: "seoTitle", title: "Search title (optional)", type: "string", group: "seo", description: "Defaults to the article title.", validation: (Rule) => Rule.max(70) }),
    defineField({ name: "seoDescription", title: "Meta description (optional)", type: "text", rows: 3, group: "seo", description: "Defaults to the summary.", validation: (Rule) => Rule.max(160) }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
