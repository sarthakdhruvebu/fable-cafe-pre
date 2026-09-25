"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type MenuSection = {
  id: string;
  title: string;
  pages: number;
  covers: string[];
};

const sections: MenuSection[] = [
  {
    id: "food",
    title: "Food",
    pages: 11,
    covers: [
      "/menu/food-cover.jpg",
      "/menu/food-page-1.jpg",
      "/menu/food-page-2.jpg",
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    pages: 2,
    covers: ["/menu/beverages-cover.jpg", "/menu/bev-page-1.jpg"],
  },
];

function PageStack({
  pages,
  covers,
  title,
}: {
  pages: number;
  covers: string[];
  title: string;
}) {
  // Show one sheet per page; keep offset modest so tall stacks stay readable.
  const offset = pages > 6 ? 3.5 : 7;
  const stackPeek = (pages - 1) * offset;

  const sheets = useMemo(
    () =>
      Array.from({ length: pages }, (_, index) => ({
        index,
        // Cycle covers for depth; top sheet is always the primary cover.
        src: covers[Math.min(index, covers.length - 1)],
        isTop: index === pages - 1,
      })),
    [pages, covers]
  );

  return (
    <div
      className="relative w-full"
      style={{ paddingTop: stackPeek }}
      aria-hidden={false}
    >
      <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
        {sheets.map((sheet) => {
          const depthFromTop = pages - 1 - sheet.index;
          return (
            <div
              key={sheet.index}
              className={cn(
                "absolute inset-x-0 overflow-hidden rounded-2xl border border-ink/10 bg-foam shadow-[0_10px_28px_rgba(20,37,28,0.10)]",
                sheet.isTop ? "ring-1 ring-ink/5" : "bg-[#f3f0ea]"
              )}
              style={{
                top: -(depthFromTop * offset),
                bottom: depthFromTop * offset,
                zIndex: sheet.index + 1,
              }}
            >
              {sheet.isTop ? (
                <Image
                  src={sheet.src}
                  alt={`${title} menu preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-[#f7f4ee] via-[#efeae2] to-[#e7e1d7]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MenuBrowser() {
  const [tab, setTab] = useState<"menu" | "book">("menu");

  return (
    <div className="mx-auto max-w-7xl">
      <div className="border-b border-ink/10">
        <div className="flex gap-8">
          {(
            [
              { id: "menu", label: "Menu" },
              { id: "book", label: "Book a Table" },
            ] as const
          ).map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "relative pb-3 text-base font-medium transition-colors sm:text-lg",
                  active ? "text-wine" : "text-ink/45 hover:text-ink/70"
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-wine" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {tab === "menu" ? (
        <div className="mt-12 grid gap-12 sm:mt-14 sm:grid-cols-2 sm:gap-16 lg:gap-24">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className="group text-left outline-none transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-wine/40 focus-visible:ring-offset-4"
              onClick={() => {
                // Placeholder until real menu pages are wired.
              }}
            >
              <PageStack
                pages={section.pages}
                covers={section.covers}
                title={section.title}
              />
              <div className="mt-5">
                <p className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {section.title}
                </p>
                <p className="mt-1 text-sm text-ink/45 sm:text-base">
                  {section.pages} {section.pages === 1 ? "page" : "pages"}
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-ink/10 bg-foam/80 px-6 py-12 text-center sm:mt-14 sm:px-10">
          <p className="font-display text-3xl text-ink sm:text-4xl">
            Book a table
          </p>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Reservations come next. For now, tell us what you need in the
            section below — or plan a visit from the header.
          </p>
          <a
            href="#needs"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-wine px-4 text-sm font-medium text-foam transition hover:bg-wine/90"
          >
            Share preferences
          </a>
        </div>
      )}
    </div>
  );
}
