import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="prose-content">
      <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
      <h2>Acceptable use</h2>
      <p>
        By using {siteConfig.name} you agree to download only content you own or
        have permission to download, or content that is otherwise free to use.
        You agree not to use the service to infringe copyright or violate any
        third-party platform&apos;s terms or applicable law.
      </p>
      <h2>No warranty & liability</h2>
      <p>
        The service is provided &quot;as is&quot; without warranties. To the
        maximum extent permitted by law, {siteConfig.name} is not liable for how
        you use downloaded content or for any damages arising from use of the
        service.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these terms at any time. Continued use constitutes
        acceptance of the updated terms. See also our{" "}
        <a href="/dmca">DMCA policy</a> and <a href="/disclaimer">disclaimer</a>.
      </p>
    </div>
  );
}
