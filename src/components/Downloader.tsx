"use client";

import { useState } from "react";
import {
  fetchInfo,
  fetchPlaylist,
  downloadUrl,
  type MediaInfo,
  type PlaylistResult,
} from "@/lib/api";
import { Card } from "@/components/ui";
import { AdSlot } from "@/components/AdSlot";

function formatDuration(s?: number): string {
  if (!s) return "";
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function triggerDownload(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function Downloader({ placeholder }: { placeholder?: string }) {
  const [url, setUrl] = useState("");
  const [bulk, setBulk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState<MediaInfo | null>(null);
  const [playlist, setPlaylist] = useState<PlaylistResult | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = url.trim();
    if (!value) return;
    setError("");
    setInfo(null);
    setPlaylist(null);
    setLoading(true);
    try {
      if (bulk) {
        setPlaylist(await fetchPlaylist(value));
      } else {
        setInfo(await fetchInfo(value));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function downloadAll() {
    if (!playlist) return;
    // Trigger sequentially with a delay — browsers throttle rapid downloads.
    playlist.entries.forEach((entry, i) => {
      setTimeout(
        () => triggerDownload(downloadUrl({ url: entry.url, type: "video" })),
        i * 1500,
      );
    });
  }

  const qualities =
    info && (info.qualities.length ? info.qualities : [0]); // 0 → "Best"

  return (
    <div className="w-full">
      <Card className="p-5 sm:p-6">
        <form onSubmit={onSubmit} className="space-y-3">
          <label htmlFor="url" className="block text-sm font-medium">
            Paste a video {bulk ? "playlist " : ""}link
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="url"
              type="url"
              inputMode="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={placeholder ?? "Paste a video or playlist URL here..."}
              className="min-w-0 flex-1 rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Fetching…" : bulk ? "Fetch Playlist" : "Download"}
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="flex cursor-pointer items-center gap-2 text-xs text-muted">
              <input
                type="checkbox"
                checked={bulk}
                onChange={(e) => setBulk(e.target.checked)}
                className="accent-[var(--primary)]"
              />
              This is a playlist / channel (bulk download)
            </label>
            <p className="text-xs text-muted">
              Only download content you have the rights to.
            </p>
          </div>
        </form>
      </Card>

      {error && (
        <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Single video result */}
      {info && (
        <Card className="mt-4 overflow-hidden">
          <div className="flex flex-col gap-4 p-5 sm:flex-row">
            {info.thumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={info.thumbnail}
                alt=""
                className="h-28 w-full rounded-lg object-cover sm:w-48"
                loading="lazy"
              />
            )}
            <div className="min-w-0 flex-1">
              <h2 className="line-clamp-2 font-semibold">{info.title}</h2>
              <p className="mt-1 text-sm text-muted">
                {info.uploader ? `${info.uploader} · ` : ""}
                {info.extractor}
                {info.duration ? ` · ${formatDuration(info.duration)}` : ""}
              </p>
            </div>
          </div>

          <div className="border-t border-border p-5">
            <h3 className="mb-3 text-sm font-semibold">Choose a format</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {qualities &&
                qualities.map((q) => (
                  <button
                    key={`v-${q}`}
                    onClick={() =>
                      triggerDownload(
                        downloadUrl({
                          url: url.trim(),
                          type: "video",
                          quality: q || undefined,
                        }),
                      )
                    }
                    className="rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    {q ? `${q}p` : "Best"} MP4
                  </button>
                ))}
              <button
                onClick={() =>
                  triggerDownload(downloadUrl({ url: url.trim(), type: "audio" }))
                }
                className="rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                🎵 MP3 Audio
              </button>
              <button
                onClick={() =>
                  triggerDownload(
                    downloadUrl({ url: url.trim(), type: "subs", lang: "en" }),
                  )
                }
                className="rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                📝 Subtitles
              </button>
            </div>
          </div>
        </Card>
      )}

      {/* Playlist / bulk result */}
      {playlist && (
        <Card className="mt-4 overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-border p-5">
            <div className="min-w-0">
              <h2 className="truncate font-semibold">{playlist.title}</h2>
              <p className="text-sm text-muted">{playlist.count} videos</p>
            </div>
            <button
              onClick={downloadAll}
              className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Download all
            </button>
          </div>
          <ul className="max-h-96 divide-y divide-border overflow-y-auto">
            {playlist.entries.map((entry, i) => (
              <li
                key={entry.id || i}
                className="flex items-center justify-between gap-3 px-5 py-3"
              >
                <span className="min-w-0 truncate text-sm">
                  <span className="text-muted">{i + 1}.</span> {entry.title}
                </span>
                <button
                  onClick={() =>
                    triggerDownload(
                      downloadUrl({ url: entry.url, type: "video" }),
                    )
                  }
                  className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary"
                >
                  MP4
                </button>
              </li>
            ))}
          </ul>
          <p className="border-t border-border px-5 py-3 text-xs text-muted">
            &quot;Download all&quot; starts each download a moment apart; your
            browser may ask permission to download multiple files.
          </p>
        </Card>
      )}

      {/* In-results ad — shown once there's a result, kept clear of controls. */}
      {(info || playlist) && (
        <AdSlot id="result-inline" width={300} height={250} className="mt-6" />
      )}
    </div>
  );
}
