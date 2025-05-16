import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Category {
  category: string;
  categoryName: string;
  count: number;
}

const getUniqueCategories = (posts: CollectionEntry<"blog">[]): Category[] => {
  const catCountMap = new Map<string, Category>();

  posts
    .filter(postFilter)
    .flatMap(post => post.data.categories)
    .forEach(cat => {
      const slugName = slugifyStr(cat);
      if (catCountMap.has(slugName)) {
        // Existing
        const existing = catCountMap.get(slugName)!;
        existing.count += 1;
      } else {
        // New
        catCountMap.set(slugName, {
          category: slugName,
          categoryName: cat,
          count: 1,
        });
      }
    });

  const categories = Array.from(catCountMap.values()).sort((catA, catB) =>
    catA.category.localeCompare(catB.category)
  );
  return categories;
};

export default getUniqueCategories;
