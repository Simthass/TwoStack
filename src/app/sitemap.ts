import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.95 },
    { path: "/services/web-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/ecommerce-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/mobile-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/pos-system-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/ai-automation", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/custom-software-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/process", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.85 },
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
