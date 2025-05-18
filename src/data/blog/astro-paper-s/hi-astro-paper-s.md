---
title: "Welcome to AstroPaper-S"
subtitle: "A fork of AstroPaper"
date: 2025-05-18T12:00:00+08:00
featured: true
draft: false
tags:
  - docs
  - rendering
categories: ["AstroPaper-S"]
toc: true
comments: false
---

**_AstroPaper-S_** is a fork of [AstroPaper](https://github.com/satnaing/astro-paper) `v5.2.0`, based on [Astro](https://astro.build/).

<!-- more -->

This fork extends AstroPaper with additional features:

- **Auto-generate post description** based on word count or up to the `<!-- more -->` tag.  
- Sidebar with auto-expanding & collapsing **table of contents** (powered by [Tocbot](https://tscanlin.github.io/tocbot/)), and a back-to-top button.  
- Basic [Hexo](https://github.com/hexojs/hexo) compatibility, including Markdown frontmatter and support for Categories.  
- [Expressive Code](https://expressive-code.com/) for syntax highlighting, same as Astro's Starlight theme.  
- Image optimizations: `loading="lazy"`, `decoding="async"`, and `fetchpriority="auto"` (via [rehype-rewrite](https://github.com/jaywcjlove/rehype-rewrite)).  
- Auto-generate `<figcaption>` using image alt text ([rehype-figure](https://github.com/Microflash/rehype-figure)).  
- External links open in new tab with `target="_blank"` and `rel="noopener noreferrer"` ([rehype-external-links](https://github.com/rehypejs/rehype-external-links)).  
- Static i18n (internationalization) support with customizable locale and date formats.  
- Sitemap generation adjusted to prioritize post pages.  
- Lazy loading [Disqus](https://disqus.com/) comment component added.  
- Add KaTeX support ([remark-math](https://github.com/remarkjs/remark-math)).  
- Heading anchors generated at build time ([rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)).  
- Minify HTML, CSS, and SVG ([astro-minify](https://www.npmjs.com/package/@zokki/astro-minify)).  
- Enable Gzip and Brotli compression ([astro-compressor](https://github.com/sondr3/astro-compressor)).  
- URLs without trailing slashes.  
- Adjust visual weight for bold text for better readability.
- Style and layout adjustments, with some components (e.g., breadcrumb, scroll progress bar) disabled.  

Most of the other features, such as light/dark mode, fuzzy search, sitemap generation, and more, remain largely unchanged.

## Usage

For development:

```bash
pnpm install
pnpm run dev
```

To build static site:

```bash
pnpm run build
```

## Markdown Frontmatter

| Property     | Desc                                                                                                                                  | Remark                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| author       | Author of the post                                                                                                                    | default = `SITE.author`                        |
| title        | Title of the post (h1)                                                                                                                | **required\***                                 |
| subtitle     | Subtitle of the post                                                                                                                  | optional                                       |
| description  | Description of the post. Used in post excerpt and site description of the post                                                        | optional, auto-generated if not given          |
| date         | published datetime in ISO 8601 format                                                                                                 | **required\***                                 |
| updated      | Modified datetime in ISO 8601 format                                                                                                  | optional                                       |
| featured     | Whether or not display this post in featured section of home page                                                                     | default = `false`                              |
| draft        | Mark this post 'unpublished'                                                                                                          | default = `false`                              |
| tags         | Related keywords for this post. Written in array YAML format                                                                          | default = `["Others"]`                         |
| categories   | Categories for this post. Written in array YAML format                                                                                | optional                                       |
| ogImage      | OG image of the post. Useful for social media sharing and SEO                                                                         | default = `SITE.ogImage` or generated OG image |
| toc          | Enable table of contents for this post                                                                                                | default = `true`                               |
| comments     | Enable comments for this post                                                                                                         | default = `false`                              |
| math         | Enable KaTeX for this post                                                                                                            | default = `false`                              |
| canonicalURL | Canonical URL (absolute), in case the article already exists on other source                                                          | default = `Astro.site` + `Astro.url.pathname`  |
| slug         | Slug for the post. This field is optional but CANNOT be an empty string (`""`)                                                        | default = slugified file name                  |
| hideEditPost | Hide editPost button under blog title. This applies only to the current blog post.                                                    | default = `false`                              |
| timezone     | Specify a timezone in IANA format for the current blog post. This will override the `SITE.timezone` config for the current blog post. | default = `SITE.timezone`                      |

> Also see [Adding new posts in AstroPaper theme | AstroPaper](https://astro-paper.pages.dev/posts/adding-new-posts-in-astropaper-theme/) and `src/content.config.ts`
