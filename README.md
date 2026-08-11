# LavaTech Pro

Marketing site for LavaTech Pro, a local tech services business in Lava Hot Springs, Idaho. Live at [lavatechpro.com](https://lavatechpro.com).

## Stack

Plain static HTML/CSS — a single `index.html` file, no build step, no dependencies.

## Develop

Open `index.html` directly in a browser, or serve it locally:

```
python3 -m http.server 8000
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which publishes the site to GitHub Pages at the custom domain configured in `CNAME`.
