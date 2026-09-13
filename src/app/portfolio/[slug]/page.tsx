import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioCaseStudy from "@/components/portfolio/PortfolioCaseStudy";
import { CASE_STUDY_ORDER, CASE_STUDIES } from "@/lib/portfolio-data";
import { breadcrumbSchema, createMetadata, jsonLd, webPageSchema } from "@/lib/seo";

export function generateStaticParams() {
  return CASE_STUDY_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return {};

  return createMetadata({
    title: study.metadataTitle,
    description: study.description,
    path: `/portfolio/${study.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) notFound();

  const path = `/portfolio/${study.slug}`;
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/portfolio" },
      { name: study.name, path },
    ]),
    webPageSchema({
      name: study.metadataTitle,
      description: study.description,
      path,
      type: "AboutPage",
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <PortfolioCaseStudy study={study} />
    </>
  );
}
