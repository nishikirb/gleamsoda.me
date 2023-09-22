import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        description: z.string(),
        link: z
          .object({
            href: z.string(),
            label: z.string(),
          })
          .optional(),
        logo: image().optional(),
      })
      .array(),
});

const usesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    tools: z
      .object({
        title: z.string(),
        description: z.string(),
        link: z.string().optional(),
      })
      .array(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  uses: usesCollection,
};
