# LavaTech Pro

Marketing/brochure site for LavaTech Pro, a one-person local tech services business (PC help, Starlink, security cameras, web builds, 3D printing) operating Fridays/weekends out of Lava Hot Springs, Idaho.

## Stack

Vite + React + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`, `@theme` block in `src/index.css` — not a `tailwind.config.js`).

## Commands

- `npm run dev` — local dev server
- `npm run build` — type-check (`tsc -b`) + production build to `dist/`
- `npm run preview` — serve the production build locally

## Structure

- `src/main.tsx` — entry point.
- `src/App.tsx` — assembles the page: `Header`, `Hero`, `Services`, `ServiceArea`, `Contact`, `Footer`.
- `src/components/` — one component per section, each a straight port of the original single-page static site. `Services.tsx` and `ServiceArea.tsx` hold their content as small data arrays (`services`, `facts`) mapped to JSX — edit the array, not repeated markup.
- `index.html` — Vite's HTML template (title, meta description, favicon links, Open Graph/Twitter tags). This is not the rendered page; the page lives in `src/`.
- `public/` — static assets copied as-is to the build root: `favicon.svg` / `favicon-16.png` / `favicon-32.png` / `favicon-512.png` / `apple-touch-icon.png` (generated from the steam-badge logo mark in `Logo.tsx` — regenerate by re-rendering that SVG at the needed sizes if the logo changes, don't hand-edit the PNGs) and `CNAME` (custom domain for GitHub Pages: `lavatechpro.com`).

## Conventions

- Color palette is defined once via Tailwind `@theme` in `src/index.css` (`--color-bg`, `--color-lava`, `--color-lava-light`, etc., exposed as utilities like `bg-lava`, `text-lava-light`) — the "Hot Springs" theme (sage/teal background, blue+teal accents). Reuse these utilities rather than hardcoding colors.
- Many spacing/font-size values use Tailwind arbitrary values (e.g. `px-[22px]`, `text-[1.15rem]`) rather than the default scale — this was a deliberate pixel-for-pixel port of the original hand-tuned CSS, not an oversight. Fine to normalize to the default scale later if it's ever redesigned.
- Mobile breakpoint is a custom `min-[701px]:` variant (matches the original CSS's `@media(max-width:700px)`), not Tailwind's default `sm`/`md`.
- No `base` path is set in `vite.config.ts` — the site is served from a custom apex domain (`lavatechpro.com`), not a GitHub Pages project subpath.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages at the custom domain in `public/CNAME`.

## Not tracked in this repo

Internal business docs (pricing rationale, launch checklist, legal setup notes, job tracker, invoice template/history) live in `private/`, which is excluded as a whole directory via `.gitignore` — this repo is public and those aren't meant to be. Any file saved into `private/`, regardless of name or extension, is automatically excluded; never move business files back to the repo root.
