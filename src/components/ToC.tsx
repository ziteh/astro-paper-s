import type { TocItem } from "@utils/toc";

interface Props {
  toc: TocItem[];
}

export default function ToC({ toc }: Props) {
  return (
    <div className="toc">
      <ul>
        {toc.map(item => (
          <li
            key={item.id}
            style={{ marginLeft: `${(item.level - 1) * 1.25}rem` }}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
