import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getPostsByCategory = (
  posts: CollectionEntry<"blog">[],
  category: string
) =>
  getSortedPosts(
    posts.filter(post => slugifyAll(post.data.categories).includes(category))
  );

export default getPostsByCategory;
