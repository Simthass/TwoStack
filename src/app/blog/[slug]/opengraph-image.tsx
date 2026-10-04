import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getPublishedArticle } from "@/lib/sanity";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "TwoStack article preview";
export const revalidate = 60;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) notFound();
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#090909", color: "white", padding: "64px 76px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28, letterSpacing: 3 }}><span>TWOSTACK</span><span style={{ color: "#aaaaaa", fontSize: 21 }}>{article.category.toUpperCase()}</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}><div style={{ fontSize: 62, lineHeight: 1.12, fontWeight: 700, letterSpacing: -2, maxWidth: 1050 }}>{article.title}</div><div style={{ color: "#bdbdbd", fontSize: 25 }}>Practical guides for better business systems.</div></div>
      <div style={{ display: "flex", borderTop: "1px solid #555", paddingTop: 22, justifyContent: "space-between", fontSize: 21, color: "#aaaaaa" }}><span>twostack.lk</span><span>COLOMBO, SRI LANKA</span></div>
    </div>, size,
  );
}
