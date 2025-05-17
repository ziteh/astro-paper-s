import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      title: z.string(),
      subtitle: z.string().optional().nullable(),
      description: z.string().optional(),

      date: z.date(), // publish date, original `pubDatetime`
      updated: z.date().optional().nullable(), // last modified date, original `modPubDatetime`
      timezone: z.string().optional(),

      tags: z.array(z.string()).default(["Others"]),
      categories: z.array(z.string()).default([]),

      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      hideEditPost: z.boolean().optional(),
      toc: z.boolean().default(true),
      comments: z.boolean().default(false),
      math: z.boolean().default(false),

      canonicalURL: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
    }),
});

export const collections = { blog };
