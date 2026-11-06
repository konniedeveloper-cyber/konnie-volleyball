"use client";

import { useRef, type ReactNode } from "react";
import Crosshair from "@/components/Crosshair";

export default function ContactCrosshair({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={className}>
      <Crosshair containerRef={containerRef} color="#c084fc" targetEffect="lock" />
      {children}
    </div>
  );
}