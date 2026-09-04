// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';
import { remarkBaseImages } from './remark-base-images.mjs';
import codeTheme from './shiki-github-dark.json';

const BASE = '/aryan/';

export default defineConfig({
  site: 'https://aryansjc.github.io',
  base: BASE,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkBaseImages(BASE)],
    }),
    shikiConfig: {
      theme: codeTheme,
    },
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [mdx(), sitemap()],
});