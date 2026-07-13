import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `About ${siteConfig.name}, a free online video downloader.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="prose-content">
      <h1 className="text-3xl font-bold text-foreground">About {siteConfig.name}</h1>
      <p>
        {siteConfig.name} is a free online tool that lets you download videos and
        audio from popular platforms by pasting a link. It works in your browser
        with no software to install and no account to create.
      </p>
      <h2>Our principles</h2>
      <p>
        We keep the tool fast, clean, and free. We ask that you only download
        content you own or have permission to save, and we respond promptly to
        valid takedown requests. See our{" "}
        <a href="/dmca">DMCA policy</a> and <a href="/terms">Terms</a>.
      </p>
    </div>
  );
}
