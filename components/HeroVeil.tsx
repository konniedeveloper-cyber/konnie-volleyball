"use client";

import DitherVeil from "@/components/DitherVeil";

export default function HeroVeil({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full">
      <DitherVeil src={src} pattern="floyd" pixelSize={2} />
    </div>
  );
}