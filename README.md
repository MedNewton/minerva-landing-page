# Minerva landing (Next.js)

Marketing landing page for Minerva, ported from the original single-file prototype
(`legacy/index.html`) into a Next.js 16 App Router project with the same design,
copy, motion and behaviour.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## Layout

```
app/            layout (fonts, theme boot script), page (section order), globals.css (tokens + component CSS)
components/
  layout/       Header (theme toggle, auto-hide), Footer
  sections/     one file per landing section; sub-components and hooks live in a folder next to it
  ui/           Container, Logo, Eyebrow, Chip, TagCloud, SlotNumber, icons
  effects/      HeadingReveal (per-word heading reveal on scroll)
lib/
  data/         all copy and datasets (plans, FAQ, industries, regions, Italy map paths…)
  hooks/        useMediaQuery, useSlotMachines
  gsap.ts       GSAP + ScrollTrigger + SplitText registration
public/assets/  icons, images, portraits, logos
legacy/         original index.html, design-system notes, designer handoff components (reference only)
```

Theme: class-based dark mode on `<html>`, persisted in `localStorage` as `minerva-theme`;
`?theme=light|dark` forces a mode (handy for screenshots).
