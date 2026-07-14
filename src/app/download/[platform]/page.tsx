import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Downloader } from "@/components/Downloader";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { platforms, getPlatform } from "@/lib/platforms";

export function generateStaticParams() {
  return platforms.map((p) => ({ platform: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const { platform } = await params;
  const p = getPlatform(platform);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.description,
    path: `/download/${p.slug}`,
    keywords: p.keywords,
  });
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ platform: string }>;
}) {
  const { platform } = await params;
  const p = getPlatform(platform);
  if (!p) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: p.name, path: `/download/${p.slug}` },
        ]}
      />
      <section className="mt-4 text-center">
        <div className="text-4xl">{p.icon}</div>
        <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {p.h1}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">{p.intro}</p>
      </section>

      <div className="mt-8">
        <AdSlot id={`${p.slug}-top`} width={728} height={90} className="mb-6" />
        <Downloader placeholder={p.sample} />
      </div>

      <section className="prose-content mt-12">
        <h2>How to download from {p.name}</h2>
        <ol className="ml-5 list-decimal text-muted">
          <li>Copy the {p.name} video link.</li>
          <li>Paste it into the box above.</li>
          <li>Press Download and choose your quality or MP3.</li>
        </ol>

        <h2>Frequently asked questions</h2>
        {p.faqs.map((f, i) => (
          <div key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <AdSlot id={`${p.slug}-bottom`} width={300} height={250} className="mt-12" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: p.h1,
              description: p.description,
              url: absoluteUrl(`/download/${p.slug}`),
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: p.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
