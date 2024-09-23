import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeFigure from "@microflash/rehype-figure";
import rehypePrettyCode from "rehype-pretty-code";
import remarkRewrite from "rehype-rewrite";
import type { Root, RootContent } from "hast";
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

const rehypeRewriteOption = {
  rewrite: (node: Root | RootContent) => {
    // Add loading="lazy" to all images
    if (node.type === "element" && node.tagName === "img") {
      node.properties = {
        ...node.properties,
        loading: "lazy",
      };
    }
  },
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
      [remarkRewrite, rehypeRewriteOption],
    ],
  },
  redirects: {
    "/archives": "/archives/page",
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
