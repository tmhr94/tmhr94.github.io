import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
  type: 'data',
  schema: z.object({
    no: z.number(),
    title: z.string(),
    period: z.string(),
    duration: z.string(),
    client: z.string(),
    affiliation: z.union([z.string(), z.array(z.string())]),
    summary: z.array(z.string()),
    techStack: z.string(),
    tags: z.array(z.string()),
    hasDetail: z.boolean(),
    details: z
      .array(
        z.object({
          title: z.string(),
          items: z.array(
            z.object({
              key: z.string(),
              value: z.union([z.string(), z.array(z.string())]),
            }),
          ),
        }),
      )
      .optional(),
  }),
});

export const collections = { experiences };
