import type { ReactNode } from "react";
import type { HeadingWithHighlight } from "@/sanity/lib/types";

export function renderHeading(
  { text, highlight }: HeadingWithHighlight,
  highlightClassName: string
): ReactNode {
  if (!highlight) return text;
  const index = text.indexOf(highlight);
  if (index === -1) return text;
  const before = text.slice(0, index);
  const after = text.slice(index + highlight.length);
  return (
    <>
      {before}
      <span className={highlightClassName}>{highlight}</span>
      {after}
    </>
  );
}
