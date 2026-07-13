/**
 * Per-platform landing pages (programmatic SEO). Each targets a high-intent
 * query like "youtube video downloader" and reuses the same Downloader widget.
 * Add a platform = add an entry here; the page, sitemap entry, and nav update.
 */
export interface Platform {
  slug: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  /** Example URL shown as a placeholder hint. */
  sample: string;
  faqs: { q: string; a: string }[];
}

export const platforms: Platform[] = [
  {
    slug: "youtube",
    name: "YouTube",
    icon: "▶️",
    title: "YouTube Video Downloader — Free HD & MP3",
    description:
      "Download YouTube videos in HD (up to 4K) or extract MP3 audio for free. Paste a YouTube link — no sign-up, no software.",
    h1: "YouTube Video Downloader",
    intro:
      "Download any YouTube video in full HD, or pull just the audio as an MP3. Paste the link, choose your quality, and save it in seconds — free and without installing anything.",
    keywords: [
      "youtube video downloader",
      "youtube to mp4",
      "youtube to mp3",
      "download youtube videos",
      "youtube hd downloader",
    ],
    sample: "https://www.youtube.com/watch?v=...",
    faqs: [
      {
        q: "Can I download YouTube videos in 1080p or 4K?",
        a: "Yes. Pick the quality you want from the list after pasting the link; higher resolutions are merged with audio automatically.",
      },
      {
        q: "Can I get just the MP3 audio?",
        a: "Yes — choose the Audio option to extract a high-quality MP3 from any video.",
      },
      {
        q: "Is it free?",
        a: "Completely free with no account required. Only download content you have the right to save.",
      },
    ],
  },
  {
    slug: "tiktok",
    name: "TikTok",
    icon: "🎵",
    title: "TikTok Downloader — No Watermark, Free",
    description:
      "Download TikTok videos without the watermark, in HD, for free. Paste a TikTok link and save it instantly — no app, no sign-up.",
    h1: "TikTok Downloader (No Watermark)",
    intro:
      "Save TikTok videos without the watermark in full quality. Copy the video link from the TikTok app or website, paste it here, and download — fast and free.",
    keywords: [
      "tiktok downloader",
      "tiktok no watermark",
      "download tiktok video",
      "tiktok to mp4",
      "save tiktok video",
    ],
    sample: "https://www.tiktok.com/@user/video/...",
    faqs: [
      {
        q: "Do downloads include the TikTok watermark?",
        a: "We fetch the highest-quality source available; when a clean version is offered, you get it without the watermark.",
      },
      {
        q: "Can I download on my phone?",
        a: "Yes. Copy the share link in the TikTok app, paste it here in your mobile browser, and tap Download.",
      },
      {
        q: "Is there a limit?",
        a: "No sign-up and no daily limit for normal use.",
      },
    ],
  },
  {
    slug: "instagram",
    name: "Instagram",
    icon: "📸",
    title: "Instagram Video & Reels Downloader — Free",
    description:
      "Download Instagram Reels, videos, and posts in HD for free. Paste the link — no login, no app, works on mobile and desktop.",
    h1: "Instagram Reels & Video Downloader",
    intro:
      "Download Instagram Reels and videos in high quality. Copy the post or reel link, paste it here, and save it — no login and no software needed.",
    keywords: [
      "instagram video downloader",
      "instagram reels downloader",
      "download instagram reels",
      "ig downloader",
      "save instagram video",
    ],
    sample: "https://www.instagram.com/reel/...",
    faqs: [
      {
        q: "Can I download Reels?",
        a: "Yes. Paste any public Reel URL and download it in the best available quality.",
      },
      {
        q: "Do I need to log in?",
        a: "No login is required for public content. Only download content you have permission to save.",
      },
      {
        q: "Does it work on iPhone and Android?",
        a: "Yes, straight from your mobile browser — no app to install.",
      },
    ],
  },
  {
    slug: "facebook",
    name: "Facebook",
    icon: "👍",
    title: "Facebook Video Downloader — HD, Free",
    description:
      "Download Facebook videos in HD or SD for free. Paste the video link and save it — no sign-up, works on any device.",
    h1: "Facebook Video Downloader",
    intro:
      "Download videos from Facebook in HD. Copy the video's link, paste it here, choose a quality, and save — free with no account.",
    keywords: [
      "facebook video downloader",
      "download facebook video",
      "fb video downloader",
      "facebook to mp4",
      "save facebook video",
    ],
    sample: "https://www.facebook.com/watch?v=...",
    faqs: [
      {
        q: "Can I download HD Facebook videos?",
        a: "Yes — when an HD source is available you can select it before downloading.",
      },
      {
        q: "How do I get the video link?",
        a: "Click the video's timestamp or use the Share → Copy Link option, then paste it here.",
      },
      {
        q: "Is it free?",
        a: "Yes, completely free and without registration.",
      },
    ],
  },
  {
    slug: "twitter",
    name: "X (Twitter)",
    icon: "🐦",
    title: "X / Twitter Video Downloader — Free",
    description:
      "Download videos and GIFs from X (Twitter) in HD for free. Paste the tweet link and save the video instantly — no sign-up.",
    h1: "X (Twitter) Video Downloader",
    intro:
      "Save videos from X (formerly Twitter) in the best quality. Copy the tweet's link, paste it here, and download — free and instant.",
    keywords: [
      "twitter video downloader",
      "x video downloader",
      "download twitter video",
      "twitter to mp4",
      "save x video",
    ],
    sample: "https://x.com/user/status/...",
    faqs: [
      {
        q: "Can I download videos from any tweet?",
        a: "Any public tweet containing a video or GIF can be downloaded by pasting its link.",
      },
      {
        q: "What quality do I get?",
        a: "The highest resolution the post provides; you can pick from the available options.",
      },
      {
        q: "Do I need the X app?",
        a: "No. Everything works in your browser.",
      },
    ],
  },
  {
    slug: "pinterest",
    name: "Pinterest",
    icon: "📌",
    title: "Pinterest Video Downloader — Free HD",
    description:
      "Download Pinterest videos and idea pins in HD for free. Paste the pin link and save it instantly — no sign-up, works on any device.",
    h1: "Pinterest Video Downloader",
    intro:
      "Save videos and idea pins from Pinterest in high quality. Copy the pin link, paste it here, and download — free and without an account.",
    keywords: [
      "pinterest video downloader",
      "download pinterest video",
      "pinterest to mp4",
      "save pinterest video",
      "pin video downloader",
    ],
    sample: "https://www.pinterest.com/pin/...",
    faqs: [
      {
        q: "How do I copy a Pinterest video link?",
        a: "Open the pin, tap the share icon, and choose Copy Link. Paste that link into the box above.",
      },
      {
        q: "Can I download idea pins?",
        a: "Yes — paste the idea pin URL and download the best available version.",
      },
      {
        q: "Is it free?",
        a: "Yes, completely free with no registration. Only download content you have the right to save.",
      },
    ],
  },
  {
    slug: "reddit",
    name: "Reddit",
    icon: "👽",
    title: "Reddit Video Downloader — With Sound, Free",
    description:
      "Download Reddit videos with audio in HD for free. Paste the post link and save the video plus its sound — no sign-up, no app.",
    h1: "Reddit Video Downloader (with Audio)",
    intro:
      "Reddit stores video and audio separately, so saved clips often end up silent. This downloader merges them for you, giving you the video with sound. Paste the post link and download.",
    keywords: [
      "reddit video downloader",
      "download reddit video with sound",
      "reddit to mp4",
      "save reddit video",
      "reddit video audio downloader",
    ],
    sample: "https://www.reddit.com/r/.../comments/...",
    faqs: [
      {
        q: "Will the download include sound?",
        a: "Yes. We automatically merge Reddit's separate video and audio tracks so your download has sound.",
      },
      {
        q: "Which links work?",
        a: "Paste the full link to any public Reddit post that contains a video.",
      },
      {
        q: "Is it free?",
        a: "Yes, free and without an account.",
      },
    ],
  },
  {
    slug: "snapchat",
    name: "Snapchat",
    icon: "👻",
    title: "Snapchat Video Downloader — Spotlight & Stories",
    description:
      "Download public Snapchat Spotlight videos and stories in HD for free. Paste the link and save it — no sign-up required.",
    h1: "Snapchat Video Downloader",
    intro:
      "Save public Snapchat Spotlight clips and stories in high quality. Copy the link, paste it here, and download — free, with nothing to install.",
    keywords: [
      "snapchat video downloader",
      "download snapchat video",
      "snapchat spotlight downloader",
      "save snapchat video",
      "snapchat to mp4",
    ],
    sample: "https://www.snapchat.com/spotlight/...",
    faqs: [
      {
        q: "Which Snapchat content can I download?",
        a: "Publicly shared Spotlight videos and public stories. Private snaps are not accessible.",
      },
      {
        q: "How do I get the link?",
        a: "Use Snapchat's share option to copy the link, then paste it into the box above.",
      },
      {
        q: "Is it free?",
        a: "Yes. Only download content you have permission to save.",
      },
    ],
  },
  {
    slug: "threads",
    name: "Threads",
    icon: "🧵",
    title: "Threads Video Downloader — Free HD",
    description:
      "Download videos from Threads in HD for free. Paste the post link and save the video instantly — no account, works on mobile and desktop.",
    h1: "Threads Video Downloader",
    intro:
      "Save videos from Threads posts in high quality. Copy the post link, paste it here, and download — free and without signing in.",
    keywords: [
      "threads video downloader",
      "download threads video",
      "threads to mp4",
      "save threads video",
      "threads net downloader",
    ],
    sample: "https://www.threads.net/@user/post/...",
    faqs: [
      {
        q: "How do I copy a Threads video link?",
        a: "Open the post, tap the share icon, and choose Copy Link. Paste it into the box above.",
      },
      {
        q: "What quality will I get?",
        a: "The best quality the post provides; you can choose from the available options.",
      },
      {
        q: "Is it free?",
        a: "Yes, free with no sign-up. Only download content you have the right to save.",
      },
    ],
  },
];

const bySlug = new Map(platforms.map((p) => [p.slug, p]));
export const getPlatform = (slug: string) => bySlug.get(slug);
