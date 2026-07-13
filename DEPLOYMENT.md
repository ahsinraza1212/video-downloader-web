# Deployment Guide

This is the **frontend** (a static Next.js site). It talks to the separate
**backend** (`video-downloader-api`) over `NEXT_PUBLIC_API_URL`. Deploy them
independently.

```
Frontend (this repo)          Backend (video-downloader-api)
Vercel / Cloudflare Pages  →  VPS or container (yt-dlp + ffmpeg + aria2)
   free, static                 always-on, does the downloading
```

## 1. Deploy the backend first

See `video-downloader-api/README.md`. Fastest path:

```bash
cd ../video-downloader-api
docker compose up --build -d      # exposes :8080
```

Put it behind HTTPS on your API subdomain, e.g. `https://api.yourdomain.com`.
Set its `ALLOWED_ORIGINS` to your frontend origin (below).

## 2. Deploy this frontend on Vercel

1. Push to GitHub, import the repo at vercel.com (framework auto-detected).
2. Environment variables:

| Variable | Example | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Canonical origin |
| `NEXT_PUBLIC_API_URL` | `https://api.yourdomain.com` | Backend base URL |
| `NEXT_PUBLIC_SITE_NAME` | `GrabClip` | Brand name |
| `NEXT_PUBLIC_ADSTERRA_KEY_728X90` | `abc123…` | Top banner zone |
| `NEXT_PUBLIC_ADSTERRA_KEY_300X250` | `def456…` | In-content zone |
| `NEXT_PUBLIC_ADSTERRA_KEY_160X600` | `ghi789…` | Side-rail zone |
| `NEXT_PUBLIC_ADSTERRA_SOCIALBAR_SRC` | `//plXXfrom Adsterra/invoke.js` | Social Bar / popunder |

> `NEXT_PUBLIC_*` values are inlined at **build time** — set them before the
> build/deploy, and redeploy after changing them.

3. Add your domain in Vercel → Domains. Optionally front with Cloudflare.

## 3. Turn on Adsterra

1. Deploy to your real domain first (Adsterra reviews the live site).
2. In the Adsterra dashboard create Display Banner units for 728×90, 300×250,
   160×600, plus one Social Bar unit.
3. Paste the zone keys / Social Bar src into the env vars above and redeploy.
   Until then, ad areas render neutral placeholders.

## 4. Post-deploy checklist

- [ ] `/`, a `/download/<platform>` page, `/sitemap.xml`, `/robots.txt` load
- [ ] Pasting a link fetches info from the backend (check CORS/`ALLOWED_ORIGINS`)
- [ ] A real download completes end-to-end
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Ads render once Adsterra keys are set + approved

## Adding a platform later

Add one entry to `src/lib/platforms.ts` — the landing page, nav link, and
sitemap entry are generated automatically. Rebuild/redeploy.
