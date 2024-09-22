import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeFigure from "@microflash/rehype-figure";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { SITE } from "./src/config";

const rehypePrettyCodeOption = {
  theme: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  keepBackground: true,
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
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeFigure,
      rehypeKatex,
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
