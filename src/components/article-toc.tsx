"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

export function ArticleToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[120px] hidden w-[220px] shrink-0 flex-col gap-1 self-start lg:flex"
    >
      <span className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em] text-white/50 [font-family:var(--font-space-grotesk)]">
        On this page
      </span>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`border-l-2 py-1 pl-4 text-[14px] leading-[1.4] transition-colors [font-family:var(--font-42dot-sans)] ${
            activeId === item.id
              ? "border-[#87ffad] font-medium text-[#87ffad]"
              : "border-white/15 text-white/60 hover:border-white/35 hover:text-white/85"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
