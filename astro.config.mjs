import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pirlo-tv.top',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
