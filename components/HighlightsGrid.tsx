"use client";

import { useEffect, useState } from "react";
import ChromaGrid from "@/components/ChromaGrid";

type Highlight = {
  src: string;
  title: string;
  subtitle: string;
  accent: string;
};

// EDIT HERE: minimum height of one row of cards, in pixels
const ROW_HEIGHT = 250;

export default function HighlightsGrid({ highlights }: { highlights: Highlight[] }) {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setColumns(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const items = highlights.map((h) => ({
    image: h.src,
    title: h.title,
    subtitle: h.subtitle,
    accent: h.accent,
  }));

  const rows = Math.ceil(items.length / columns);

  return (
    <div className="relative w-full" style={{ minHeight: rows * ROW_HEIGHT }}>
      <ChromaGrid items={items} columns={columns} rows={rows} />
    </div>
  );
}