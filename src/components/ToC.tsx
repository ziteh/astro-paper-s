import type { TocTree } from "@utils/toc";

interface Props {
  toc: TocTree[];
}

function TreeNode({ item }: { item: TocTree }) {
  return (
    <div className={`toc-lv-${item.level}`}>
      <li key={item.id}>
        <a href={`#${item.id}`}>{item.text}</a>
        {item.children.length > 0 && <SubTree toc={item.children} />}
      </li>
    </div>
  );
}

function SubTree({ toc }: Props) {
  return (
    <ul>
      {toc.map(item => (
        <TreeNode item={item} />
      ))}
    </ul>
  );
}

export default function ToC({ toc }: Props) {
  return (
    <nav className="toc">
      <SubTree toc={toc} />
    </nav>
  );
}
