"use client";

import LetterGlitch from "@/components/LetterGlitch";

export default function AlbumBackground() {
  return (
    <div className="absolute inset-0 bg-[#09090c]">
      <LetterGlitch
        backgroundColor="#09090c"
        baseColor="#c4b5fd"
        glitchColors={["#ffffff", "#a855f7", "#e9d5ff"]}
        fontSize={10}
        baseOpacity={1.5}
        glitchAmount={0.4}
        speed={0.8}
        flow={1}
        edgeFade={0.2}
        interactive
        cursorRadius={140}
        clickEffect="none"
      />
    </div>
  );
}