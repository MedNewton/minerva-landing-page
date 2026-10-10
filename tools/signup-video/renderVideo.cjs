/* eslint-disable @typescript-eslint/no-require-imports -- plain Node script, run outside Next */
// Renders video.html frame by frame into an H.264 MP4 (needs ffmpeg and Playwright).
// node tools/signup-video/renderVideo.cjs <it|en> public/videos/come-iscriversi-<lang>.mp4 [fps]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const [lang, out, fpsArg] = process.argv.slice(2);
const fps = +(fpsArg || 30);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1920, height: 1080 } })).newPage();
  await p.goto(`file://${__dirname}/video.html?lang=${lang}`);
  await p.evaluate(() => document.fonts.ready);
  const duration = await p.evaluate(() => window.DURATION);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const frames = Math.round(duration * fps);
  for (let i = 0; i < frames; i++) {
    await p.evaluate((t) => window.render(t), i / fps);
    const buf = await p.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  // Poster: the title frame.
  await p.evaluate(() => window.render(3));
  await p.screenshot({ path: out.replace(/\.mp4$/, '-poster.jpg'), type: 'jpeg', quality: 85 });
  await b.close();
  console.log('done', out, frames, 'frames');
})();
