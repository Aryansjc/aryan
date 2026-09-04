import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const sitemapPath = `${base.replace(/\/$/, '')}/sitemap-index.xml`;
  const sitemapURL = new URL(sitemapPath, site);
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`,
    { headers: { 'Content-Type': 'text/plain' } },
  );
};
