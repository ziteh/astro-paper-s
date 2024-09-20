import * as cheerio from "cheerio";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function getTocFromHtml(content: string) {
  const toc: TocItem[] = [];
  const $ = cheerio.load(content);

  $("h1, h2, h3").each((_, element) => {
    const level = parseInt(element.tagName[1], 10);
    const text = $(element).text();
    const id = $(element).attr("id") || getAnchorText(text);
    toc.push({ id, text, level });
  });

  return toc;
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
