import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSlot } from "@/components/AdSlot";

// Adsterra Social Bar / Popunder: a single site-wide invoke script.
const socialBarSrc = process.env.NEXT_PUBLIC_ADSTERRA_SOCIALBAR_SRC;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {/* Content + side ad rails (rails hidden on smaller screens). */}
        <div className="mx-auto flex max-w-[88rem] justify-center gap-6 px-4 py-8">
          <aside className="hidden w-40 shrink-0 xl:block">
            <div className="sticky top-24">
              <AdSlot id="rail-left" width={160} height={600} />
            </div>
          </aside>

          <main className="min-h-[70vh] w-full max-w-3xl">{children}</main>

          <aside className="hidden w-40 shrink-0 xl:block">
            <div className="sticky top-24">
              <AdSlot id="rail-right" width={160} height={600} />
            </div>
          </aside>
        </div>
        <Footer />

        {socialBarSrc && (
          <Script
            id="adsterra-socialbar"
            src={socialBarSrc}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
