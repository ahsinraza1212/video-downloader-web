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
  // Brand once. `absolute` bypasses the layout title.template so the brand is
  // not appended twice (was producing "Title | GrabClip | GrabClip").
  const brandedTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: { absolute: brandedTitle },
    description,
    keywords,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: brandedTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: brandedTitle, description },
  };
}
