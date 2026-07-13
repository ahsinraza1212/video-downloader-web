/**
 * Ad slot wired for Adsterra "social/display" banner zones.
 *
 * Downloader sites can't use Google AdSense (policy), so we use Adsterra, which
 * accepts this traffic. Each banner size has its own zone key from your
 * Adsterra dashboard, provided via env:
 *
 *   NEXT_PUBLIC_ADSTERRA_KEY_728X90   (top leaderboard)
 *   NEXT_PUBLIC_ADSTERRA_KEY_300X250  (in-content rectangle)
 *   NEXT_PUBLIC_ADSTERRA_KEY_160X600  (side rails)
 *
 * Adsterra's banner code relies on a global `atOptions` + invoke.js that writes
 * into the current DOM position — so two banners on one page would clash. We
 * isolate each one inside its own sandboxed <iframe srcDoc> so any number can
 * coexist safely. When a key isn't set, we render a neutral placeholder.
 *
 * The site-wide Social Bar / Popunder is loaded once in layout.tsx.
 */

const KEYS: Record<number, string | undefined> = {
  728: process.env.NEXT_PUBLIC_ADSTERRA_KEY_728X90,
  300: process.env.NEXT_PUBLIC_ADSTERRA_KEY_300X250,
  160: process.env.NEXT_PUBLIC_ADSTERRA_KEY_160X600,
};

function adFrameHtml(key: string, width: number, height: number): string {
  return `<!doctype html><html><head><meta charset="utf-8">
<style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head>
<body>
<script type="text/javascript">
  atOptions = { 'key':'${key}', 'format':'iframe', 'height':${height}, 'width':${width}, 'params':{} };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/${key}/invoke.js"></script>
</body></html>`;
}

export function AdSlot({
  id,
  width,
  height,
  className = "",
  label = "Advertisement",
}: {
  id: string;
  width: number;
  height: number;
  className?: string;
  label?: string;
}) {
  const key = KEYS[width];

  return (
    <div className={className} aria-label={label} role="complementary">
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-muted">
        {label}
      </p>
      <div className="flex justify-center">
        {key ? (
          <iframe
            title={`ad-${id}`}
            width={width}
            height={height}
            scrolling="no"
            frameBorder={0}
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            srcDoc={adFrameHtml(key, width, height)}
            style={{ border: 0, overflow: "hidden", maxWidth: "100%" }}
          />
        ) : (
          <div
            className="grid w-full place-items-center rounded-lg border border-dashed border-border bg-surface-2 text-xs text-muted"
            style={{ minHeight: height, maxWidth: width }}
            data-ad-slot={id}
          >
            Ad space · {id} ({width}×{height})
          </div>
        )}
      </div>
    </div>
  );
}
