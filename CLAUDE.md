# LavaTech Pro

Marketing/brochure site for LavaTech Pro, a one-person local tech services business (PC help, Starlink, security cameras, web builds, 3D printing) operating Fridays/weekends out of Lava Hot Springs, Idaho.

## Stack

Plain static HTML — everything lives in `index.html` (inline `<style>`, no JS, no build tooling, no framework). This is intentional: it's a five-section single page and doesn't need one. Don't introduce a bundler/framework without discussing it with the user first.

## Structure

- `index.html` — the entire site: header/nav, hero, services grid, service-area/about, contact, footer.
- `favicon.svg` / `favicon-16.png` / `favicon-32.png` / `favicon-512.png` / `apple-touch-icon.png` — generated from the inline logo mark in the header (steam-badge SVG). Regenerate by re-rendering that SVG at the needed sizes if the logo ever changes — don't hand-edit the PNGs.
- `CNAME` — custom domain for GitHub Pages (`lavatechpro.com`).

## Conventions

- Color palette is defined once as CSS custom properties at the top of `index.html` (`--bg`, `--lava`, `--lava-light`, etc.) — the "Hot Springs" theme (sage/teal background, blue+teal accents). Reuse these variables rather than hardcoding colors.
- Mobile breakpoint is `@media(max-width:700px)`.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds nothing (static site, no build step) and publishes the repo root directly to GitHub Pages, served at the custom domain in `CNAME`.

## Not tracked in this repo

Internal business docs (pricing rationale, launch checklist, legal setup notes) are kept in the working folder but excluded via `.gitignore` — this repo is public and those aren't meant to be.
