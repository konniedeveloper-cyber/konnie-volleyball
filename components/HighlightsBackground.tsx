"use client";

import GhostFibers from "@/components/GhostFibers";

export default function HighlightsBackground() {
  return (
    <div className="!pointer-events-none absolute inset-0 bg-[#09090c]">
      <GhostFibers />
    </div>
  );
}