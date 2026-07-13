import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="prose-content">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p>Last updated: January 2026</p>
      <h2>What we process</h2>
      <p>
        To perform a download we process the link you submit. We do not require
        an account and do not build user profiles. Downloaded files are streamed
        to you and not retained on our servers beyond the transient processing
        needed to deliver them.
      </p>
      <h2>Cookies and advertising</h2>
      <p>
        We use third-party advertising and analytics partners that may set
        cookies to measure traffic and serve ads. You can control cookies in
        your browser settings. Ads shown are provided by external networks and
        are subject to their own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:privacy@example.com">privacy@example.com</a>.
      </p>
    </div>
  );
}
