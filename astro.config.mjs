import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
// import vercel from "@astrojs/vercel/serverless";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [sitemap(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  adapter: vercel()
});