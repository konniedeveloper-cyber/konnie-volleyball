"use client";

import DotField from "@/components/DotField";

export default function PageBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 bg-[#09090c]">
      <DotField
        gradientFrom="#6d28d9"
        gradientTo="#e879f9"
        dotRadius={1.5}
        dotSpacing={14}
        cursorRadius={240}
        bulgeStrength={0.6}
        glowRadius={160}
      />

      {/* vignette: keeps text readable and fades the edges to black */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#09090c_100%)]" />
    </div>
  );
}