import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const protectedPaths = ["/api/", "/admin/", "/studio/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: protectedPaths,
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
