import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { platforms } from "@/lib/platforms";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-01-01");
  const staticPaths = ["/", "/about", "/privacy", "/terms", "/dmca", "/disclaimer"];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "daily" : "yearly",
    priority: path === "/" ? 1 : 0.3,
  }));

  for (const p of platforms) {
    entries.push({
      url: `${siteConfig.url}/download/${p.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }
  return entries;
}
