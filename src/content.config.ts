import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 2. Define your collection(s)
const articleCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    published: z.coerce.date(),
    excerpt: z.string()
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string(),
    challenge: z.string(),
    role: z.string(),
    outcome: z.string(),
    class: z.string(),
    buttonLabel: z.string(),
    buttonTarget: z.enum(['_blank', '_self']).optional(),
    url: z.url(),
    responsibilities: z.array(z.string()),
    startDate: z.string(), //.transform((str) => new Date(str)),
    endDate: z.string(), //.transform((str) => new Date(str)),
    image: image(),
    imageAlt: z.string(),
    imageCaption: z.object({
      title: z.string(),
      lead: z.string(),
      description: z.string(),
    }).optional(),
  }),
});

const HomepageLinkCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/homepageLinks' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    url: z.url(),
    image: image(),
    imageAlt: z.string(),
  }),
});

const talksCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
  }),
});

const workExperienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work-experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  'articles': articleCollection,
  'projects': projectCollection,
  'homepageLinks': HomepageLinkCollection,
  'talks': talksCollection,
  'work-experience': workExperienceCollection,
};