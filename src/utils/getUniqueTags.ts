import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Tag {
  tag: string;
  tagName: string;
  count: number;
}

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tagCountMap = new Map<string, Tag>();

  posts
    .filter(postFilter)
    .flatMap(post => post.data.tags)
    .forEach(tag => {
      const slugTag = slugifyStr(tag);
      if (tagCountMap.has(slugTag)) {
        // Tag existing
        const existingTag = tagCountMap.get(slugTag)!;
        existingTag.count += 1;
      } else {
        // New Tag
        tagCountMap.set(slugTag, {
          tag: slugTag,
          tagName: tag,
          count: 1,
        });
      }
    });

  // 將 Map 轉換為數組並按 tag 名字排序
  const tags = Array.from(tagCountMap.values()).sort((tagA, tagB) =>
    tagA.tag.localeCompare(tagB.tag)
  );

  return tags;
};

export default getUniqueTags;
