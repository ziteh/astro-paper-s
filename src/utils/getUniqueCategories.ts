import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Category {
  category: string;
  categoryName: string;
}

const getUniqueCategories = (posts: CollectionEntry<"blog">[]) => {
  const categories: Category[] = posts
    .filter(postFilter)
    .flatMap(post => post.data.categories)
    .map(cat => ({ category: slugifyStr(cat), categoryName: cat }));
  return categories;
};

export default getUniqueCategories;
