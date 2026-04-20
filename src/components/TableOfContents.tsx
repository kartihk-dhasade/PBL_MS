"use client";
import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-24 self-start" id="table-of-contents" aria-label="Table of contents">
      <p className="text-xs font-medium uppercase tracking-wider text-muted mb-4">On this page</p>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={`block text-sm pl-4 py-1 border-l-2 -ml-px transition-colors duration-200 text-left w-full ${
                activeId === item.id
                  ? "border-foreground text-foreground font-medium"
                  : "border-transparent text-muted hover:text-foreground hover:border-border"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
