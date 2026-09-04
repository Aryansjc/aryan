# How to post a daily blog / log (with screenshots)

Your journal on the homepage is powered by Markdown files in `src/content/blog/`.
To add a new entry you only do 2 things. No code changes needed.

## 1. Add your screenshot (optional)

Drop the image into:

```
public/images/blog/
```

Example: `public/images/blog/my-progress.png`

Use `.png` / `.jpg` / `.webp`. Keep it under ~500KB if you can.

## 2. Add a Markdown file

Create a new file in `src/content/blog/` named like:

```
2026-09-05-my-win.md
```

Copy-paste this template:

```md
---
title: "what I did today"
description: "one-line summary shown on cards and SEO"
pubDate: 2026-09-05
tags: ["web"]
type: "log"
draft: false
---

A few lines about what you built.

![what the screenshot shows](/images/blog/my-progress.png)

One more line if you want. Done.
```

Field guide:

- `title` — shown in the journal list + reading pane.
- `description` — one-liner for SEO / RSS.
- `pubDate` — `YYYY-MM-DD`. Newest shows first automatically.
- `tags` — e.g. `["web"]`, `["ai", "python"]`, `["c++"]`. Rendered as `#web`.
- `type` — `"log"` = daily win (`● daily win`), `"blog"` = long read (`● long read`).
- `draft: true` — hides it in production builds, still visible in `npm run dev`.

Markdown you can use: paragraphs, **bold**, *italic*, lists, [links](https://example.com),
`inline code`, code blocks, quotes, and images.

## 3. Check + publish

```bash
npm run dev     # preview at http://localhost:4321 — press 4 or click journal
npm run build   # output in dist/
```

Each post also gets its own shareable page automatically:

```
/blog/2026-09-05-my-win/
```

plus RSS at `/rss.xml` and tag pages at `/blog/tags/<tag>/`.

That's it — one image + one `.md` file per day.
