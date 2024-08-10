import { defineConfig, squooshImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
});
