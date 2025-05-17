import { SITE } from "@/config";

// `<!-- more -->` tag
const tagMoreRegex = /^(.*?)<!--\s*more\s*-->/s;

const regexReplacers: { [key: string]: [RegExp, string] } = {
  // # Header 1 / ## Header 2
  header: [/#{1,6} (.*?)/g, "$1 "],

  // *italic* / **bold** / ***bold italic***
  star: [/\*{1,3}(.*?)\*{1,3}/g, "$1"],

  // _italic_ / __bold__ / ___bold italic___
  underscore: [/_{1,3}(.*?)_{1,3}/g, "$1"],

  // ~~~strikethrough~~~
  strikeout: [/~~~[\s\S]*?~~~/g, ""],

  // --- or ***
  horizontalRule: [/^(-{3,}|\*{3,})$/gm, ""],

  // > Blockquote
  quote: [/> (.*?)/g, "$1"],

  // `inline code`
  codeInline: [/`(.*?)`/g, "$1"],

  // ```code block```
  codeBlock: [/```[\s\S]*?```/g, ""],

  // $ inline LaTeX $
  latexInline: [/\$(.*?)\$/g, ""],

  // $$ block LaTeX $$
  latexBlock: [/\$\$[\s\S]*?\$\$/g, ""],

  // ![alt text](url)
  image1: [/!\[(.*?)\]\((.*?)\)/g, ""],

  // ![alt text][ref]
  image2: [/!\[(.*?)\]\[(.*?)\]/g, ""],

  // [link text](url)
  link1: [/\[(.*?)\]\((.*?)\)/g, "$1 "],

  // [link text][ref]
  link2: [/\[(.*?)\]\[(.*?)\]/g, "$1 "],

  // [ref]: url
  linkRef: [/\[(.*?)\]: (.*?)/g, ""],
};

/**
 * Get the description from markdown content.
 * @param markdownContent The markdown content.
 * @returns The description.
 */
const getDescription = (markdownContent: string): string => {
  // Limit the number of lines to process
  const lines = markdownContent
    .split(/\r?\n/)
    .slice(0, SITE.genDescriptionMaxLines);
  let processedContent = lines.join("");

  // Remove Markdown syntax
  for (const patternKey in regexReplacers) {
    const [pattern, replacement] = regexReplacers[patternKey];
    processedContent = processedContent.replace(pattern, replacement);
  }

  // Find the first occurrence of the 'more' tag
  const moreTagMatch = processedContent.match(tagMoreRegex);

  // If the 'more' tag is found, use the content before it
  // Otherwise, use the first `SITE.genDescriptionCount` characters
  const desc = moreTagMatch
    ? moreTagMatch[1]
    : processedContent.substring(0, SITE.genDescriptionCount) + " ...";

  return desc;
};

export default getDescription;
