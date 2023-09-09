import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrettyCode],
    }),
  ],
});
