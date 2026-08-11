# LavaTech Pro

Marketing site for LavaTech Pro, a local tech services business in Lava Hot Springs, Idaho. Live at [lavatechpro.com](https://lavatechpro.com).

## Stack

Vite + React + TypeScript + Tailwind CSS.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at the custom domain configured in `public/CNAME`.
