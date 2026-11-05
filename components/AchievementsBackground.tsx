"use client";

import ShapeGrid from "@/components/ShapeGrid";

export default function AchievementsBackground() {
  return (
    <div className="absolute inset-0">
      <ShapeGrid
        shape="square"
        direction="diagonal"
        lineColor="#2a2734"
        hoverColor="#a855f7"
        hoverFillColor="#a855f7"
        fillOpacity={0.15}
        cellSize={40}
      />
    </div>
  );
}