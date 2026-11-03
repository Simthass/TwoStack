"use client";

import { useMemo, useState, type ReactNode } from "react";

type Item = { key: string; category: string; node: ReactNode };

export default function BlogGrid({
  items,
  categories,
}: {
  items: Item[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: items.length };
    for (const item of items)
      map[item.category] = (map[item.category] ?? 0) + 1;
    return map;
  }, [items]);

  const visible = useMemo(
    () =>
      active === "All" ? items : items.filter((i) => i.category === active),
    [items, active],
  );

  const tabs = ["All", ...categories];

  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 border-b border-black/10 bg-white/90 px-6 backdrop-blur lg:-mx-[35px] lg:px-[35px]">
        <div className="flex items-center justify-between gap-6 py-4">
          <h2 className="hidden font-satoshi text-2xl font-semibold sm:block">
            More articles
          </h2>
          <div
            role="tablist"
            aria-label="Filter articles by category"
            className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((tab) => {
              const isActive = tab === active;
              return (
                <button
                  key={tab}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-inter text-sm transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/15 text-black/70 hover:border-black hover:text-black"
                  }`}
                >
                  {tab}
                  <span
                    className={`text-xs ${isActive ? "text-white/60" : "text-black/40"}`}
                  >
                    {counts[tab] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-24 text-center font-inter text-sm text-black/50">
          No articles in this category yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article key={item.key}>{item.node}</article>
          ))}
        </div>
      )}
    </div>
  );
}
