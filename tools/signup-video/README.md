# Signup explainer video

Source of `public/videos/come-iscriversi-{it,en}.mp4` (shown on `/[lang]/come-iscriversi`).
`video.html` is a 1920×1080 motion piece driven by a deterministic `render(t)`; open it
in a browser with `?lang=it&t=12` to inspect any frame. Copy lives in the `COPY` object
and mirrors the guide and the app's real registration flow, so update both together.

Render (needs `ffmpeg` and `playwright` with Chromium):

    node tools/signup-video/renderVideo.cjs it public/videos/come-iscriversi-it.mp4
    node tools/signup-video/renderVideo.cjs en public/videos/come-iscriversi-en.mp4

Each run also writes `<name>-poster.jpg` (the title frame). Fonts are Google Sans Flex
(SIL OFL), the same subsets the app self-hosts.
