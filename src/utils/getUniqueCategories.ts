// import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Category {
  name: string;
}

const getUniqueCategories = (posts: CollectionEntry<"blog">[]) => {
  const categories: Category[] = posts
    .filter(postFilter)
    .flatMap(post => post.data.categories)
    .map(cat => ({ name: cat }));
  return categories;
};

export default getUniqueCategories;
