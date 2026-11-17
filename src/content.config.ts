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
    buttonLabel: z.string().optional(),
    buttonTarget: z.enum(['_blank', '_self']).optional(),
    url: z.url().optional(),
    responsibilities: z.array(z.string()),
    startDate: z.string().optional(), //.transform((str) => new Date(str)),
    endDate: z.string().optional(), //.transform((str) => new Date(str)),
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
  schema: ({ image }) => z.object({
    title: z.string(),
    event: z.string(),
    year: z.number().int().min(1900).max(9999),
    order: z.number().int().nonnegative().default(0),
    url: z.url().regex(/^https?:\/\//).optional(),
    location: z.string().optional(),
    speakers: z.array(z.string()).default([]),
    media: z.array(z.discriminatedUnion('type', [
      z.object({
        type: z.literal('image'),
        image: image(),
        alt: z.string().min(1),
      }),
      z.object({
        type: z.enum(['video', 'slides']),
        title: z.string().min(1),
        url: z.url().regex(/^https?:\/\//),
      }),
    ])).default([]),
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