import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: `Disclaimer for ${siteConfig.name}.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="prose-content">
      <h1 className="text-3xl font-bold text-foreground">Disclaimer</h1>
      <p>
        {siteConfig.name} is a tool that helps you retrieve media you have the
        right to access. We do not host, store, or own any of the content that
        passes through the service, and we are not affiliated with, endorsed by,
        or sponsored by YouTube, TikTok, Instagram, Facebook, X, or any other
        platform.
      </p>
      <h2>Your responsibility</h2>
      <p>
        You are solely responsible for how you use downloaded content.
        Downloading copyrighted material without permission may violate the
        terms of service of the source platform and applicable law. Only
        download content you created, own, or have explicit permission to
        download, or content that is in the public domain or offered under a
        license that permits it.
      </p>
      <h2>No warranty</h2>
      <p>
        The service is provided &quot;as is&quot; without warranties of any kind.
        Availability and results depend on third-party platforms and may change
        at any time.
      </p>
    </div>
  );
}
