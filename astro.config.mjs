import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; // TODO: 버전 호환 후 복구
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://marie-blog.marikimhye.workers.dev',
  integrations: [mdx(), tailwind()]
});