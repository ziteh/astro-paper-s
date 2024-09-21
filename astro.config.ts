import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "@microflash/rehype-figure";
import { SITE } from "./src/config";

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
    rehypePlugins: [rehypeSlug, rehypeFigure],
    syntaxHighlight: "shiki",
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "one-light", dark: "one-dark-pro" },
      wrap: true,
    },
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
