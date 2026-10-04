import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Article } from "@/lib/blog";
import ArticleMedia from "./ArticleMedia";

const components: PortableTextComponents = {
  types: { image: ({ value }) => <ArticleMedia image={value} /> },
  block: {
    h2: ({ children }) => <h2 className="mb-6 mt-14 font-satoshi text-3xl font-semibold leading-tight text-black">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-10 font-satoshi text-2xl font-semibold text-black">{children}</h3>,
    normal: ({ children }) => <p className="mb-5">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-2 border-black pl-6 font-satoshi text-xl italic text-black">{children}</blockquote>,
  },
  list: { bullet: ({ children }) => <ul className="mb-6 ml-5 list-disc space-y-2">{children}</ul>, number: ({ children }) => <ol className="mb-6 ml-5 list-decimal space-y-2">{children}</ol> },
  listItem: { bullet: ({ children }) => <li>{children}</li>, number: ({ children }) => <li>{children}</li> },
  marks: { link: ({ value, children }) => {
    const href = typeof value?.href === "string" ? value.href : "#";
    const safe = href.startsWith("/") || href.startsWith("https://") || href.startsWith("mailto:");
    return <a href={safe ? href : "#"} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined} className="underline underline-offset-4">{children}</a>;
  } },
};

export default function ArticleBody({ article }: { article: Article }) {
  if (article.body?.length) return <PortableText value={article.body} components={components} />;
  return article.sections.map((section, index) => <section key={section.heading} className={index ? "mt-14 border-t border-black/10 pt-12" : ""}>
    <h2 className="mb-6 font-satoshi text-3xl font-semibold leading-tight tracking-tight text-black">{section.heading}</h2>
    {section.paragraphs.map((paragraph) => <p className="mb-5" key={paragraph}>{paragraph}</p>)}
    {section.bullets && <ul className="ml-5 list-disc space-y-2 marker:text-black">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
  </section>);
}
