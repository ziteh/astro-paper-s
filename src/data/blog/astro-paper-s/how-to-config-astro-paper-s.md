---
title: "How to Configure AstroPaper-S"
date: 2025-05-18T10:00:00+08:00
featured: true
draft: false
tags:
  - docs
  - configuration
categories: ["AstroPaper-S"]
toc: true
comments: false
---

You are free to adjust your settings.

> Also see [How to configure AstroPaper theme | AstroPaper](https://astro-paper.pages.dev/posts/how-to-configure-astropaper-theme/)

## Site Config

Here are the `SITE` configuration options defined in `src/config.ts`.

| Options                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `website`                | Your deployed website, e.g. `https://ziteh.github.io/` URL                                                                                                                                                                                                                                                                                                                                                                        |
| `author`                 | Your name                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `profile`                | Your personal/portfolio website URL which is used for better SEO. Put `null` or empty string `""` if you don't have any.                                                                                                                                                                                                                                                                                                          |
| `desc`                   | Your site description. Useful for SEO and social media sharing.                                                                                                                                                                                                                                                                                                                                                                   |
| `title`                  | Your site name                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `ogImage`                | Your default OG image for the site. Useful for social media sharing. OG images can be an external image URL or they can be placed under `/public` directory.                                                                                                                                                                                                                                                                      |
| `lightAndDarkMode`       | Enable or disable `light & dark mode` for the website. If disabled, primary color scheme will be used. This option is enabled by default.                                                                                                                                                                                                                                                                                         |
| `postPerIndex`           | The number of posts to be displayed at the home page under `Recent` section.                                                                                                                                                                                                                                                                                                                                                      |
| `postPerPage`            | You can specify how many posts will be displayed in each posts page. (eg: if you set `SITE.postPerPage` to 3, each page will only show 3 posts per page)                                                                                                                                                                                                                                                                          |
| `postPerArchive`         | Number of posts per archive page                                                                                                                                                                                                                                                                                                                                                                                                  |
| `scheduledPostMargin`    | In Production mode, posts with a future `date` will not be visible. However, if a post's `date` is within the next 15 minutes, it will be visible. You can set `scheduledPostMargin` if you don't like the default 15 minutes margin.                                                                                                                                                                                             |
| `genDescriptionMaxLines` | Max number of lines to process auto-generated post descriptions.                                                                                                                                                                                                                                                                                                                                                                  |
| `genDescriptionCount`    | Word count for auto-generated post descriptions, if ‘more’ tag is not found, use this count of characters.                                                                                                                                                                                                                                                                                                                        |
| `showArchives`           | Determines whether to display the `Archives` menu (positioned between the `About` and `Search` menus) and its corresponding page on the site. This option is set to `true` by default.                                                                                                                                                                                                                                            |
| `showBackButton`         | Determines whether to display the `Go back` button in each blog post.                                                                                                                                                                                                                                                                                                                                                             |
| `showPageDesc`           | show page description in post detail                                                                                                                                                                                                                                                                                                                                                                                              |
| `editPost`               | This option allows users to suggest changes to a blog post by providing an edit link under blog post titles. This feature can be disabled by setting `SITE.editPost.enabled` to `false`.                                                                                                                                                                                                                                          |
| `dynamicOgImage`         | This option controls whether to [generate dynamic og-image](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/) if no `ogImage` is specified in the blog post frontmatter. If you have many blog posts, you might want to disable this feature. See the [trade-off](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/#trade-off) for more details. |
| `lang`                   | Used as HTML ISO Language code in `<html lang"en">`. Default is `en`.                                                                                                                                                                                                                                                                                                                                                             |
| `langOg`                 | [Open Graph locale tag](https://ogp.me/#optional), format 'language_TERRITORY'. Default is `en_US`.                                                                                                                                                                                                                                                                                                                               |
| `timezone`               | This option allows you to specify your timezone using the [IANA format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Setting this ensures consistent timestamps across your localhost and deployed site, eliminating time differences.                                                                                                                                                                          |

## Comments

### Disqus

To use Disqus, replace `YOUR_SHORTNAME` in `/src/components/DisqusComment.astro`:

```js //(YOUR_SHORTNAME)/
// file: /src/components/DisqusComment.astro
(function () {
  const d = document,
    s = d.createElement("script");

  // Replace YOUR_SHORTNAME with your Disqus shortname
  s.src = "https://YOUR_SHORTNAME.disqus.com/embed.js";
  s.setAttribute("data-timestamp", String(+new Date()));
  (d.head || d.body).appendChild(s);
})();
```

Then, enable it by setting `comments: true` in the markdown frontmatter (default is `false`).
You can also change the default value in `src/content.config.ts`.

```ts {8}
// file: src/content.config.ts
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      // ...
      toc: z.boolean().default(true),
      comments: z.boolean().default(false),
      math: z.boolean().default(false),
      // ...
    }),
});
```

### Giscus

Please refer to [How to integrate Giscus comments into AstroPaper](https://astro-paper.pages.dev/posts/how-to-integrate-giscus-comments/).

## Static i18n (internationalization)

To set the language, open `src/i18n/lang.ts` and select the desired language:

```ts "en"
// file: src/i18n/lang.ts
export const _t = en;
// export const _t = zhHant;
// export const _t = ja;
// export const _t = es;
```

If you want to add more languages, copy the `en` object and modify its values. To ensure type safety, use `typeof en` for static field checking.

This setup *does not fallback* — *it fails fast*, allowing you to catch errors during build time.

```ts "zhHant" "typeof en" title="example"
// 繁體中文
const zhHant: typeof en = {
  archives: {
    title: "歸檔",
    desc: "所有文章。",
  },
  posts: {
    title: "文章",
    desc: "我發過的所有文章。",
  },
  tags: {
    title: "標籤",
    desc: "文章中使用的所有標籤。",
  },
  // ... more translations
};
```

The `lang.ts` file also includes locale-aware date formatting. Each language object defines its own date formats.

Reference: [Format | Day.js](https://day.js.org/docs/en/display/format)

```ts '"MMM D, YYYY"' '"MMMM D, YYYY hh:mm A"'
date: {
  shortFormat(datetime: dayjs.Dayjs): string {
    return datetime.format("MMM D, YYYY"); // Aug 16, 2018
  },
  fullFormat(datetime: dayjs.Dayjs): string {
    return datetime.format("MMMM D, YYYY hh:mm A"); // August 16, 2018 08:02 PM
  },
  published(strDate: string): string {
    return `Published: ${strDate}`;
  },
  updated(strDate: string): string {
    return `Updated: ${strDate}`;
  },
},
```

## Style

### Syntax Highlighting

To change the code theme, modify the `themes` and `themeCssSelector` settings in `astro.config.ts`. Refer to [Themes | Expressive Code](https://expressive-code.com/guides/themes/) for more details.

```ts {4} 'theme.name === "one-dark-pro"'
// file: astro.config.ts
const expressiveCodeOption: AstroExpressiveCodeOptions = {
  plugins: [pluginLineNumbers()],
  themes: ["one-dark-pro", modMinLightTheme],
  themeCssSelector: theme => {
    if (theme.name === "one-dark-pro") {
      return "[data-theme='dark']";
    }
    return "[data-theme='light']";
  },
  // ...
};
```

Currently, the light theme uses a custom theme from **min-ling**, formatted as a VS Code `.jsonc` file.

```ts '"./theme/mod-min-light.jsonc"' "modMinLightTheme"
// file: astro.config.ts
// Import custom theme
const themeJsoncString = fs.readFileSync(
  new URL("./theme/mod-min-light.jsonc", import.meta.url),
  "utf-8"
);
const modMinLightTheme = ExpressiveCodeTheme.fromJSONString(themeJsoncString);
```

### Visual Weight

To balance *visual weight* and maintain readability, the bold font weight is adjusted differently for the light and dark themes.

```css {9, 18}
/* file: global.css */
:root,
html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #282728;
  --accent: #006cac;
  --muted: #e6e6e6;
  --border: #ece9e9;
  --strong-font-weight: 700; /* Compensating visual weight */
}

html[data-theme="dark"] {
  --background: #212737;
  --foreground: #eaedf3;
  --accent: #ff6b01;
  --muted: #343f60bf;
  --border: #ab4b08;
  --strong-font-weight: 800; /* Compensating visual weight */
}
```

## `_redirects` File

If you need to set up redirects for [Netlify](https://docs.netlify.com/routing/redirects/) or [Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/redirects/), you can create a `_redirects` file in the `public` folder.

Files in the `public` folder will be copied directly to the build output (`dist/`) without any modifications.

For example, if you want to remove trailing slashes in URLs using redirects (Cloudflare Pages):

```text title="public/_redirects"
/posts/*/  /posts/:splat  301
```
