import { SITE } from "./src/config";
import { defineConfig } from "astro/config";
import fs from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import sitemap, { type SitemapItem } from "@astrojs/sitemap";
import rehypeFigure from "@microflash/rehype-figure";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkRewrite from "rehype-rewrite";
import rehypeExternalLinks from "rehype-external-links";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import type { Root, RootContent } from "hast";

const jsoncString = fs.readFileSync(
  new URL(`./theme/mod-min-light.jsonc`, import.meta.url),
  "utf-8"
);
const modMinLight = ExpressiveCodeTheme.fromJSONString(jsoncString);

const rehypeRewriteOption = {
  rewrite: (node: Root | RootContent) => {
    // Also look for Astro's Responsive Images
    if (node.type === "element" && node.tagName === "img") {
      node.properties = {
        ...node.properties,
        loading: "lazy",
        decoding: "async",
        fetchpriority: "auto",
      };
    }
    // Use rehype-external-links instead
    // if (
    //   node.type === "element" &&
    //   node.tagName === "a" &&
    //   node.properties?.href
    // ) {
    //   const href = node.properties.href;
    //   if (
    //     typeof href === "string" &&
    //     !href.startsWith("/") &&
    //     !href.startsWith(SITE.website)
    //   ) {
    //     // Add target="_blank" (open in new tab)
    //     // and rel="noopener noreferrer" (security and privacy)
    //     node.properties = {
    //       ...node.properties,
    //       target: "_blank",
    //       rel: "noopener noreferrer",
    //     };
    //   }
    // }
  },
};

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
const sitemapOption = {
  serialize(item: SitemapItem) {
    if (/\/(tags|categories|archives|page|search)/.test(item.url)) {
      item.priority = 0.2;
    } else if (/\/posts\/\d+\/?$/.test(item.url)) {
      item.priority = 0.3;
    } else if (/\/posts\//.test(item.url)) {
      // Main blog page
      item.priority = 0.8;
    } else {
      // Default priority for all other pages
      item.priority = 0.5;
    }

    return item;
  },
};

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap(sitemapOption),
    expressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ["one-dark-pro", modMinLight],
      themeCssSelector: theme => {
        if (theme.name === "one-dark-pro") {
          return "[data-theme='dark']";
        }
        return "[data-theme='light']";
      },
      defaultProps: {
        wrap: false,
        showLineNumbers: false,
        overridesByLang: {
          "bash,cmd,powershell,ps,sh,shell,zsh": { frame: "none" },
        },
      },
      styleOverrides: {
        codeFontFamily: "'Roboto Mono', 'Noto Sans TC', monospace",
        uiFontFamily:
          "'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        borderWidth: "0",
        textMarkers: {
          backgroundOpacity: "33%",
          inlineMarkerBorderWidth: "0.1px",
        },
        frames: {
          editorTabBarBackground: "transparent",
          frameBoxShadowCssValue: "transparent",
          tooltipSuccessBackground: "#6b7280",
        },
      },
    }),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeFigure,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }],
      [remarkRewrite, rehypeRewriteOption],
    ],
    // Use ExpressiveCode instead of shiki
    // shikiConfig: {
    //   // For more themes, visit https://shiki.style/themes
    //   themes: { light: "min-light", dark: "night-owl" },
    //   wrap: true,
    // },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "responsive",
  },
  experimental: {
    svg: true,
    responsiveImages: true,
    preserveScriptOrder: true,
  },
});
