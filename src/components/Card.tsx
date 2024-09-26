import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  fallbackDescription?: string;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  fallbackDescription = "",
}: Props) {
  const { title, subtitle, tags, categories, date, updated, description } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        // className="inline-block text-lg font-medium text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <div className="inline-block text-lg font-medium text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </div>
        {subtitle && <h6 className="text-sm">{subtitle}</h6>}
        <p className="hover:text-skin-accent">
          {description ? description : fallbackDescription}
        </p>
      </a>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        {/* Datetime */}
        <div className="flex items-center space-x-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mt-0.5 h-4 w-4 opacity-80"
          >
            <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 15h-6v-6h6v6zm1-10H5V7h14v2z"></path>
          </svg>
          <Datetime date={date} updated={updated} />
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex items-center space-x-0.5 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mt-0.5 h-4 w-4"
            >
              <path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"></path>
            </svg>
            <span className="text-sm">{categories}</span>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex items-center space-x-0.5 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mt-1 h-4 w-4"
            >
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 9z"></path>
            </svg>
            <div className="flex flex-wrap">
              {tags.map((tag: string) => (
                <p className="mr-2 text-sm" key={tag}>
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
