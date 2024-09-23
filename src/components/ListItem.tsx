import type { CollectionEntry } from "astro:content";

function Datetime({ date }: { date: string | Date }) {
  return (
    <span>
      {new Date(date).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}
    </span>
  );
}

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
}

export default function ListItem({ href, frontmatter }: Props) {
  const { title, subtitle, date, updated } = frontmatter;

  return (
    <li className="my-1">
      <a
        href={href}
        className="group flex flex-row space-x-4 rounded-md p-2 hover:bg-skin-card/30"
      >
        <Datetime date={updated ?? date} />
        <span>{title}</span>
        <span className="hidden opacity-50 md:block">{subtitle}</span>
      </a>
    </li>
  );
}
