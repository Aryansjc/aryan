# aryan singh — a developer's notebook

Personal portfolio + blog. Astro build that ships as static HTML (`dist/`), styled after a
single-file AMOLED + blue-ink design: 4 rooms (home / projects / blogs / contact), no scroll,
keyboard nav (`←` `→` or `1–4`).

## Commands

```sh
bun install   # install dependencies (first time only)
bun run dev   # local preview at http://localhost:4321
bun run build # production build into dist/
bun run preview -- --port 4322  # serve the built dist/ locally
```

> The small toolbar at the bottom during `dev` is Astro's dev overlay — it never ships
> in the build. Disable it in `astro.config.mjs` with `devToolbar: { enabled: false }`.

## Site structure

```
src/pages/index.astro          # the whole site: all 4 rooms + styles + scripts
src/pages/blog/[...slug].astro # individual post pages (/blog/<file>/)
src/pages/blog/tags/[tag].astro# tag pages (/blog/tags/<tag>/)
src/pages/rss.xml.js           # RSS feed (/rss.xml)
src/content/blog/*.md          # <-- blog posts live here (one file per post)
src/data/projects.json         # projects room entries
public/images/blog/            # screenshots / images for posts
public/favicon.ico/.svg        # tab icon (white angular mark on black)
```

All page text (name, intro, contact, receipt) lives in `src/pages/index.astro`.
Project cards live in `src/data/projects.json` (`title`, `meta`, `description`
(allows `<strong>`), `links` with `code ↗` / `demo ↗`, `note`).

## Writing a blog post (with screenshots)

1. Drop images into `public/images/blog/`, e.g. `my-progress.png` (keep ≤ ~500KB).
2. Create `src/content/blog/YYYY-MM-DD-my-title.md`:

```md
---
title: "what I did today"
description: "one-line summary (SEO + RSS)"
pubDate: 2026-09-05
tags: ["web"]
type: "log"        # "log" = daily win (● daily win) | "blog" = long read
draft: false       # true = hidden in production, visible in dev
---

A few lines about what you built.

![what the screenshot shows](/images/blog/my-progress.png)

One more line if you want. Done.
```

3. `bun run dev` → press `3` or click `blogs` to check. `bun run build` to publish.

Notes:

- Posts sort newest-first automatically; each also gets a shareable page at
  `/blog/<filename>/`, plus tag pages and RSS — no extra work.
- Markdown supported: paragraphs, **bold**, *italic*, lists, [links](https://example.com),
  `code`, fenced code blocks, quotes, headings, images.
- The `type` badge, date format (`04 sep 2026`), and `#tags` render in the site style.

## GitHub stats (home room)

The `~/github` band fetches live data at **build time** from `api.github.com/users/Aryansjc`:
stars, forks, repo count, followers, account age, top repos by stars, language mix,
and an estimated lines-of-code count (repo bytes ÷ 50 — an estimate, not a `git` count).

- Numbers refresh on every `bun run build`; the "as of" date updates automatically.
- Offline/rate-limited builds fall back to bundled numbers — the build never breaks.
- Unauthenticated budget is 60 req/hr and one build uses only 2 calls. For byte-precise
  language stats + 5,000 req/hr, build with a token (classic, no scopes):
  `GITHUB_TOKEN=ghp_xxx bun run build`.

## Deploy

Any static host works: upload `dist/` to GitHub Pages, Netlify, Vercel, etc.
`astro.config.mjs` sets `site: 'https://aryansjc.github.io'` and `base: '/aryan/'` for GitHub Pages.
