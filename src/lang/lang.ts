const USED_LANG: keyof typeof translations = "zhTW";

const translations = {
  en: {
    posts: "Posts",
    postsDesc: "All the articles I've posted.",
    tags: "Tags",
    tagsDesc: "All the tags used in posts.",
    tag: "Tag: ",
    tagDesc: (tag: string) => `All the articles with the tag "${tag}".`,
    categories: "Categories",
    categoriesDesc: "All the categories.",
    category: "Category: ",
    categoryDesc: (category: string) =>
      `All the articles in the category "${category}".`,
    search: "Search",
    searchDesc: "Search any article ...",
    searchPlaceholder: "Search for anything...",
    searchResult: (total: number, query: string) =>
      `Found ${total} ${total === 1 ? "result" : "results"} for "${query}"`,
    about: "About",
    backToTop: "Back to Top",
    copyMdLink: "Copy Markdown link",
    themeBtn: "Toggle light & dark mode",
    allPosts: "All Posts",
    featuredPosts: "Featured",
    recentPosts: "Recent Posts",
    date: {
      published: "Published",
      updated: "Updated",
    },
    page: {
      next: "Next",
      previous: "Prev",
    },
    license: {
      copyright: "Copyright",
      statement: "All rights reserved",
    },
  },
  zhTW: {
    posts: "文章",
    postsDesc: "我發過的所有文章。",
    tags: "標籤",
    tagsDesc: "文章中使用的所有標籤。",
    tag: "標籤：",
    tagDesc: (tag: string) => `所有帶有標籤「${tag}」的文章。`,
    categories: "分類",
    categoriesDesc: "所有文章的分類。",
    category: "分類：",
    categoryDesc: (category: string) => `所有屬於分類「${category}」的文章。`,
    search: "搜尋",
    searchDesc: "搜尋文章 ...",
    searchPlaceholder: "搜尋任何內容...",
    searchResult: (total: number, query: string) =>
      `找到 ${total} 個與「${query}」相關的結果`,
    about: "關於",
    backToTop: "回到頂部",
    copyMdLink: "複製 Markdown 連結",
    themeBtn: "切換深色模式",
    allPosts: "所有文章",
    featuredPosts: "精選文章",
    recentPosts: "最新文章",
    date: {
      published: "發佈",
      updated: "更新",
    },
    page: {
      next: "下一頁",
      previous: "上一頁",
    },
    license: {
      copyright: "版權所有",
      statement: "保留所有權利",
    },
  },
};

export const _t = translations[USED_LANG];
