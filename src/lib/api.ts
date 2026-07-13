import { siteConfig } from "@/lib/site";

/** Client mirror of the backend's MediaInfo shape. */
export interface FormatSummary {
  formatId: string;
  ext: string;
  quality: string;
  height?: number;
  fps?: number;
  filesize?: number;
  hasVideo: boolean;
  hasAudio: boolean;
  isProgressive: boolean;
}

export interface MediaInfo {
  id: string;
  title: string;
  extractor: string;
  duration?: number;
  thumbnail?: string;
  uploader?: string;
  webpageUrl?: string;
  isLive?: boolean;
  formats: FormatSummary[];
  qualities: number[];
}

/** Fetch metadata + available formats for a media URL. */
export async function fetchInfo(url: string): Promise<MediaInfo> {
  const res = await fetch(`${siteConfig.apiUrl}/api/info`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  const data = (await res.json().catch(() => ({}))) as
    | MediaInfo
    | { error?: string };
  if (!res.ok) {
    throw new Error(
      ("error" in data && data.error) || "Could not read that link.",
    );
  }
  return data as MediaInfo;
}

export interface PlaylistEntry {
  id: string;
  title: string;
  url: string;
  duration?: number;
}

export interface PlaylistResult {
  title: string;
  count: number;
  entries: PlaylistEntry[];
}

/** Fetch the list of videos in a playlist/channel for bulk download. */
export async function fetchPlaylist(url: string): Promise<PlaylistResult> {
  const res = await fetch(`${siteConfig.apiUrl}/api/playlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  const data = (await res.json().catch(() => ({}))) as
    | PlaylistResult
    | { error?: string };
  if (!res.ok) {
    throw new Error(
      ("error" in data && data.error) || "Could not read that playlist.",
    );
  }
  return data as PlaylistResult;
}

export type DownloadType = "video" | "audio" | "subs";

/** Build the direct download URL the browser navigates to. */
export function downloadUrl(opts: {
  url: string;
  type: DownloadType;
  quality?: number;
  lang?: string;
}): string {
  const params = new URLSearchParams({ url: opts.url, type: opts.type });
  if (opts.quality) params.set("quality", String(opts.quality));
  if (opts.lang) params.set("lang", opts.lang);
  return `${siteConfig.apiUrl}/api/download?${params.toString()}`;
}
