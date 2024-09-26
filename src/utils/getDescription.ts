import { SITE } from "@config";

const tagMoreRegex = /^(.*?)<!--\s*more\s*-->/s;

const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
const imageRegex2 = /!\[(.*?)\]\[(.*?)\]/g;
const linkRegex = /\[(.*?)\]\((.*?)\)/g;
const linkRegex2 = /\[(.*?)\]\[(.*?)\]/g;
const linkRefRegex = /\[(.*?)\]: (.*?)[\r\n]/g;
const starRegex = /\*{1,3}(.*?)\*{1,3}/g;
const quoteRegex = /> (.*?)[\r\n]/g;
const headerRegex = /#{1,6} (.*?)[\r\n]/g;

const getDescription = (markdownContent: string) => {
  // Match everything until `<!-- more -->` tag
  const tegMoreResult = markdownContent.match(tagMoreRegex);

  const short =
    tegMoreResult === null
      ? markdownContent.substring(0, SITE.genDescriptionCount) + " ..."
      : tegMoreResult[1];

  const clean = short
    .replace(headerRegex, "$1:")
    .replace(starRegex, "$1")
    .replace(quoteRegex, "$1")
    .replace(imageRegex, "")
    .replace(imageRegex2, "")
    .replace(linkRefRegex, "")
    .replace(linkRegex2, "$1")
    .replace(linkRegex, "$1");
  return clean;
};

export default getDescription;
