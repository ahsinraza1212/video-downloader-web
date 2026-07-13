import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "DMCA Policy",
  description: `DMCA and copyright takedown policy for ${siteConfig.name}.`,
  path: "/dmca",
});

export default function DmcaPage() {
  return (
    <div className="prose-content">
      <h1 className="text-3xl font-bold text-foreground">DMCA / Copyright Policy</h1>
      <p>
        {siteConfig.name} respects intellectual property rights. We do not host
        or store third-party media; the service acts as a technical tool that
        fetches content at the user&apos;s request. Nonetheless, we act on valid
        complaints.
      </p>
      <h2>Filing a notice</h2>
      <p>
        If you believe the service is being used to infringe your copyright,
        send a notice to our designated agent including:
      </p>
      <ul className="ml-5 list-disc text-muted">
        <li>Identification of the copyrighted work.</li>
        <li>The specific URL or material at issue.</li>
        <li>Your contact information.</li>
        <li>
          A statement of good-faith belief that the use is not authorized.
        </li>
        <li>
          A statement, under penalty of perjury, that the information is
          accurate and you are authorized to act.
        </li>
        <li>Your physical or electronic signature.</li>
      </ul>
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:dmca@example.com">dmca@example.com</a>. We will
        respond to valid requests promptly, including disabling access to
        offending functionality where appropriate.
      </p>
    </div>
  );
}
