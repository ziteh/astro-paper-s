import * as cheerio from "cheerio";

export interface TocTree {
  id: string;
  text: string;
  level: number;
  children: TocTree[];
}

export function getTocFromHtml(content: string): TocTree[] {
  const toc: TocTree[] = [];
  const $ = cheerio.load(content);

  $("h1, h2, h3").each((_, element) => {
    const level = parseInt(element.tagName[1], 10);
    const text = $(element).text();
    const id = $(element).attr("id") || getAnchorText(text);

    if (id === "footnote-label") {
      return;
    }

    const newItem: TocTree = { id, text, level, children: [] };

    // If there are existing items, find the appropriate parent
    if (toc.length > 0) {
      let currentLevel = level;
      let parent = toc;

      while (currentLevel > 1) {
        const lastItem = parent[parent.length - 1];
        if (lastItem.level < currentLevel) {
          lastItem.children.push(newItem);
          return; // Exit after adding to the correct parent
        }
        parent = lastItem.children;
        currentLevel--;
      }

      // If we reach here, it means the new item is at the same level as the top level
      toc.push(newItem);
    } else {
      toc.push(newItem);
    }
  });

  return toc;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function getTocFromMarkdown(content: string) {
  const toc: TocItem[] = [];
  const regex = /^(#{1,3})\s(.+)$/gm; // Match header 1~3
  let match;

  while ((match = regex.exec(content)) !== null) {
    const [_, hashes, title] = match;
    const linkRegex = /\[(.+)\]\([^)]+\)/g;
    const fmtTitle = title.replace(linkRegex, "$1");
    const item: TocItem = {
      id: getAnchorText(fmtTitle),
      text: fmtTitle,
      level: hashes.length,
    };
    toc.push(item);
  }

  return toc;
}

function getAnchorText(ori: string) {
  return ori
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
