import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";

export interface SeoInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
}

/** Single source of truth for page metadata (canonical, OG, Twitter). */
export function buildMetadata(input: SeoInput): Metadata {
  const { title, description, path, keywords, noindex = false } = input;
  const canonical = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
