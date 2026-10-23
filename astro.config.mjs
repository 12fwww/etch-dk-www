import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://12fwww.github.io',
  base: '/etch-dk-www',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
