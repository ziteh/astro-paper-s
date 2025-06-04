# AstroPaper-S

***AstroPaper-S*** is a fork of [AstroPaper](https://github.com/satnaing/astro-paper), based on [Astro](https://astro.build/).

This fork extends AstroPaper with additional features:

- **Auto-generate post description** based on word count or up to the `<!-- more -->` tag.
- Sidebar with auto-expanding & collapsing **table of contents** (powered by [Tocbot](https://tscanlin.github.io/tocbot/)), and a back-to-top button.
- Basic [Hexo](https://github.com/hexojs/hexo) compatibility, including Markdown frontmatter and support for Categories.
- [Expressive Code](https://expressive-code.com/) for syntax highlighting, same as Astro's Starlight theme.
- Image optimizations: `loading="lazy"` and `decoding="async"` (via [rehype-rewrite](https://github.com/jaywcjlove/rehype-rewrite)).
- Auto-generate `<figcaption>` using image alt text ([rehype-figure](https://github.com/Microflash/rehype-figure)).
- External links open in new tab with `target="_blank"` and `rel="noopener noreferrer"` ([rehype-external-links](https://github.com/rehypejs/rehype-external-links)).
- Responsive table ([rehype-wrap-all](https://github.com/florentb/rehype-wrap-all))
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

```bash
# install dependencies
pnpm install

# start running the project
pnpm run dev

# to build static site
pnpm run build
```

## Documentation

Refer to the [guide](https://astro-paper-s.ziteh.dev/posts/astro-paper-s/how-to-config-astro-paper-s).

Also see the original [AstroPaper documentation](https://github.com/satnaing/astro-paper?tab=readme-ov-file#-documentation).

## Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```text
/
├── public/
│   ├── assets/
│   ├── pagefind/ # auto-generated when build
│   ├── favicon.svg
│   ├── astropaper-og.jpg
│   ├── favicon.svg
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   └── blog/ # Markdown posts
│   │       └── some-blog-posts.md
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── config.ts
│   ├── constants.ts
│   └── content.config.ts
└── astro.config.ts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/data/blog` directory.

## Google Site Verification (optional)

You can easily add your [Google Site Verification HTML tag](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag) in AstroPaper using an environment variable. This step is optional. If you don't add the following environment variable, the google-site-verification tag won't appear in the HTML `<head>` section.

```env
# in your environment variable file (.env)
PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-value
```

> See [this discussion](https://github.com/satnaing/astro-paper/discussions/334#discussioncomment-10139247) for adding AstroPaper to the Google Search Console.
