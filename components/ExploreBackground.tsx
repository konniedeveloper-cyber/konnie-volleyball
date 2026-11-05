"use client";

import LiquidChrome from "@/components/LiquidChrome";

export default function ExploreBackground() {
  return (
    <div className="absolute inset-0">
      <LiquidChrome
        color="#a78bfa"
        speed={0.2}
        amplitude={0.3}
        detail={4}
        thickness={1}
        interactive
      />
    </div>
  );
}