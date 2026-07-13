/** Central site + brand config. Rename freely — one place drives everything. */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "GrabClip",
  tagline: "Free Online Video Downloader",
  description:
    "Download videos from YouTube, TikTok, Instagram, Facebook, X/Twitter and 1000+ sites. Free, fast, HD, no sign-up. Paste a link and download in seconds.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://localhost:8080",
  locale: "en_US",
  themeColor: "#f97316",
} as const;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
}
