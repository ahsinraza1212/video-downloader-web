import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { platforms } from "@/lib/platforms";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            ↓
          </span>
          <span className="text-lg">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {platforms.map((p) => (
            <Link
              key={p.slug}
              href={`/download/${p.slug}`}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {p.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
