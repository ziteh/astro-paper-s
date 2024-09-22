import { SITE } from "@config";

const getDescription = (markdownContent: string) => {
  // Match everything until `<!-- more -->` tag
  const tagMoreRegex = /^(.*?)<!--\s*more\s*-->/s;
  const tegMoreResult = markdownContent.match(tagMoreRegex);

  const short =
    tegMoreResult === null
      ? markdownContent.substring(0, SITE.genDescriptionCount)
      : tegMoreResult[1];

  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  const clean = short.replace(imageRegex, "$1").replace(linkRegex, "$1");
  return clean;
};

export default getDescription;
