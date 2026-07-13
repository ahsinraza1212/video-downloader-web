import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { platforms } from "@/lib/platforms";

const legal = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/dmca", label: "DMCA" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                ↓
              </span>
              {siteConfig.name}
            </div>
            <p className="mt-3 text-sm text-muted">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Downloaders</h3>
            <ul className="mt-3 space-y-2">
              {platforms.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/download/${p.slug}`}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {p.name} Downloader
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs text-muted">
          © 2026 {siteConfig.name}. Not affiliated with any platform. Download
          only content you have the right to save.
        </p>
      </div>
    </footer>
  );
}
