# AstroPaper-S

AstroPaper-S is a fork of [satnaing/astro-paper v4.5.0](https://github.com/satnaing/astro-paper), based on [Astro](https://astro.build/).

Main changes:

- [Hexo](https://github.com/hexojs/hexo) compatibility, includes routing and markdown frontmatter.
- Auto-generated post descriptions, based on  word count or until the `<!--more-->` tag.
- Table of contents with [tocbot](https://tscanlin.github.io/tocbot/).
- Code block syntax highlighter with [rehype-pretty-code](https://github.com/rehype-pretty/rehype-pretty-code).
- Added `loading="lazy"` attribute to `<img>` tags and added `<figcaption>`.
- Added [Disqus](https://disqus.com/) for comments.
- Static i18n (internationalization) support.
- Tweaked some layout and styles.
- Comment out a few components like the scroll progress bar and breadcrumb.

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
