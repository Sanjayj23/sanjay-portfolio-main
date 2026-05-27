# Sanjay Scrapbook Portfolio

Premium creative portfolio for Sanjay, a creative generalist and final-year IIT Kanpur student. The site is built as an editorial scrapbook: maroon fabric textures, warm paper systems, hand-drawn SVG doodles, taped cards, stitched notes, polaroid frames, and animated section reveals.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- CSS texture assets and inline SVG doodles

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The deployable output is generated in `dist/`.

## Structure

- `src/data` - all content and doodle placement data
- `src/components` - reusable scrapbook, paper, doodle, navigation, and section components
- `src/styles` - global Tailwind layers, texture system, responsive utilities, animation polish
- `public/assets/textures` - tiny SVG texture assets used by the visual system
