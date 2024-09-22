import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "@microflash/rehype-figure";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { SITE } from "./src/config";

const rehypePrettyCodeOption = {
  theme: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  keepBackground: false,
  transformers: [
    transformerCopyButton({
      visibility: "hover",
      feedbackDuration: 700,
    }),
  ],
};

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: false, // Use rehype-pretty-code
    rehypePlugins: [
      rehypeSlug,
      rehypeFigure,
      [rehypePrettyCode, rehypePrettyCodeOption],
    ],
  },
  redirects: {
    "/archives": "/posts",
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  experimental: {
    contentLayer: true,
  },
});
