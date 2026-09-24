#!/bin/sh
# Rebuilds the portfolio demo sites (each its own repo under ~/Dev) for
# lavatechpro.com/demos/<slug>/ and copies the output into public/demos/, so
# they deploy with the main site. Re-run after changing a demo, then commit.
#
#   sh scripts/sync-demos.sh            # all demos
#   sh scripts/sync-demos.sh realtor    # just one (by slug)
#
# Dreamy Denz is a real client site, not a demo. It never goes here.
set -e

DEV="${DEMOS_DIR:-$HOME/Dev}"
PUBLIC="$(cd "$(dirname "$0")/.." && pwd)/public/demos"

# repo:slug
DEMOS="lodging-demo:lodging handyman-demo:handyman realtor-demo:realtor craft-shop-demo:craft-shop"

for entry in $DEMOS; do
  repo="${entry%%:*}"
  slug="${entry#*:}"
  if [ $# -gt 0 ] && ! echo " $* " | grep -q " $slug "; then continue; fi

  out="$PUBLIC/$slug"
  echo "== $repo -> /demos/$slug/"
  (
    cd "$DEV/$repo"
    npx tsc -b
    npx vite build --base="/demos/$slug/" --outDir "$out" --emptyOutDir
  )
  # Some demos hardcode their GitHub Pages path (e.g. the favicon link).
  sed -i '' "s#\"/$repo/#\"/demos/$slug/#g" "$out/index.html"
done

echo "Demos synced to $PUBLIC"
