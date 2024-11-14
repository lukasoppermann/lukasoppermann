import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  integrations: [
    mdx(),
    // favicons({
    //   masterPicture: "./src/assets/svgs/favicon.svg",
    //   emitAssets: true,
    //   faviconsDarkMode: true,
    // }),
  ]
});