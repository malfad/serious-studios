import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    category: z.string(),
    author: z.string().default('Serious Studios'),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blog };
