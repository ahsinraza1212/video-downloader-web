import type { Metadata } from "next";
import Link from "next/link";
import { Downloader } from "@/components/Downloader";
import { AdSlot } from "@/components/AdSlot";
import { siteConfig } from "@/lib/site";
import { platforms } from "@/lib/platforms";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "video downloader",
    "online video downloader",
    "youtube downloader",
    "tiktok downloader",
    "instagram downloader",
    "download video from link",
  ],
});

const steps = [
  { n: "1", t: "Copy the link", d: "Copy the video URL from the app or website." },
  { n: "2", t: "Paste it above", d: "Paste the link into the box and press Download." },
  { n: "3", t: "Pick a format", d: "Choose HD video, MP3 audio, or subtitles — done." },
];

export default function HomePage() {
  return (
    <>
      <section className="text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
          Free · No sign-up · HD · 1000+ sites
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Download Video From Link
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          {siteConfig.description}
        </p>
      </section>

      <div className="mt-8">
        <AdSlot id="home-top" width={728} height={90} className="mb-6" />
        <Downloader />
      </div>

      {/* Supported platforms */}
      <section className="mt-12">
        <h2 className="text-center text-lg font-semibold">Supported platforms</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {platforms.map((p) => (
            <Link
              key={p.slug}
              href={`/download/${p.slug}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-primary"
            >
              <span className="text-xl">{p.icon}</span>
              <span className="text-sm font-medium">{p.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-center text-lg font-semibold">How it works</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-surface p-5">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {s.n}
              </div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot id="home-bottom" width={300} height={250} className="mt-12" />

      <section className="prose-content mt-12">
        <h2>Free online video downloader</h2>
        <p>
          {siteConfig.name} lets you download videos from YouTube, TikTok,
          Instagram, Facebook, X (Twitter) and over a thousand other sites — in
          full HD or as MP3 audio. There is nothing to install and no account to
          create. Paste a link, choose your format, and your download starts
          right away. Please only download content you own or have permission to
          save.
        </p>
      </section>
    </>
  );
}
