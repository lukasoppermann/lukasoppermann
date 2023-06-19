// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const articleCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    url: z.string().url(),
    published: z.coerce.date(),
    excerpt: z.string()
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'articles': articleCollection,
};