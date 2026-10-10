/**
 * Responsive 16:9 video slot. Accepts a YouTube, Vimeo or direct video file
 * URL; renders nothing without one. Embeds load lazily (iframe `loading`,
 * `preload="none"` for files) so the guide stays light until someone plays it.
 */
export function GuideVideo({ videoUrl, title }: { videoUrl?: string; title: string }) {
  if (!videoUrl) return null;
  const embed = toEmbedUrl(videoUrl);

  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-video w-full">
        {embed ? (
          <iframe
            src={embed}
            title={title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <video
            src={videoUrl}
            title={title}
            controls
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full bg-black object-contain"
          />
        )}
      </div>
      <figcaption className="px-4 py-3 text-sm text-fg-muted">{title}</figcaption>
    </figure>
  );
}

/** YouTube / Vimeo page URL → privacy-friendly embed URL; null for direct files. */
function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = u.searchParams.get('v') ?? u.pathname.split('/').pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host === 'vimeo.com') return `https://player.vimeo.com/video/${u.pathname.split('/').filter(Boolean)[0]}`;
    if (host === 'player.vimeo.com' || host === 'youtube-nocookie.com') return url;
    return null;
  } catch {
    return null;
  }
}
