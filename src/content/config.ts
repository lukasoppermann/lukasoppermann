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

const projectCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string(),
    class: z.string(),
    buttonLabel: z.string(),
    url: z.string().url(),
    responsibilities: z.array(z.string()),
    startDate: z.string(), //.transform((str) => new Date(str)),
    endDate: z.string(), //.transform((str) => new Date(str)),
    image: image(),
    imageAlt: z.string(),
  }),
});

const HomepageLinkCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    url: z.string().url(),
    image: image(),
    imageAlt: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'articles': articleCollection,
  'projects': projectCollection,
  'homepageLinks': HomepageLinkCollection,
};