import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://gleamsoda.me",
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrettyCode],
    }),
    sitemap(),
  ],
});
