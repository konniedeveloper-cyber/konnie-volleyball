"use client";

import DitherVeil from "@/components/DitherVeil";

export default function HeroVeil({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full">
      <DitherVeil
        src={src}
        inkColor="#120f17"
        paperColor="#f4f1ea"
        rimColor="#a78bfa"
        fit="contain"
        pattern="floyd"
        palette="duotone"
        pixelSize={1}
        levels={2}
        contrast={1.15}
        brightness={0}
        revealRadius={200}
        softness={0.6}
        linger={1}
        rim={0}
        reverse={false}
        wander={false}
        clickBurst={true}
      />
    </div>
  );
}