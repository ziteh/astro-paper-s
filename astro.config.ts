import { SITE } from "./src/config";
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
// import { transformerCopyButton } from "@rehype-pretty/transformers";

const rehypePrettyCodeOption = {
  // More themes: https://shiki.style/themes
  theme: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  keepBackground: true,
  // transformers: [
  //   transformerCopyButton({
  //     visibility: "hover",
  //     feedbackDuration: 700,
  //   }),
  // ],
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

    // Level up headers, h1 -> h2, h2 -> h3...
    if (node.type === "element" && node.tagName.startsWith("h")) {
      const headers = node.tagName.match(/h([1-6])/);
      if (headers === null) {
        return
      }

      const currentLevel = parseInt(headers[1], 10);
      if (currentLevel === 6) {
        node.properties = {
          ...node.properties,
          class: "italic",
        }
      }
      else {
        const newLevel = Math.min(currentLevel + 1, 6);
        node.tagName = `h${newLevel}`;
      }
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
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    contentLayer: true,
  },
  compressHTML: true,
});
