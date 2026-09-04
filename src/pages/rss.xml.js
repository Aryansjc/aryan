import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  const siteUrl = new URL(import.meta.env.BASE_URL, context.site);
  return rss({
    title: "aryan singh — blogs",
    description: "blogs when i think, logs when i win",
    site: siteUrl.href,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${import.meta.env.BASE_URL}blog/${post.id}/`,
    })),
  });
}