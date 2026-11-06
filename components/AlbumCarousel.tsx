"use client";

import { useEffect, useState } from "react";
import CircularCarousel from "@/components/CircularCarousel";

/* ============================================================
   EDIT HERE: your album photos
   ============================================================ */
const items = [
  { src: "/images/album/album-1.jpg", alt: "Konnie spiking the ball", title: "Spike" },
  { src: "/images/album/album-2.jpg", alt: "Konnie serving", title: "Serve" },
  { src: "/images/album/album-3.jpg", alt: "Konnie blocking at the net", title: "Block" },
  { src: "/images/album/album-4.jpg", alt: "Team huddle", title: "Team" },
  { src: "/images/album/album-5.jpg", alt: "Training session", title: "Training" },
  { src: "/images/album/album-6.jpg", alt: "Match day", title: "Match day" },
  { src: "/images/album/album-7.jpg", alt: "Match day", title: "Match day" },
  { src: "/images/album/album-8.jpg", alt: "Match day", title: "Match day" },
];

// EDIT HERE: sizes in pixels
const SIZE = {
  desktop: { cardWidth: 440, height: 300 },
  mobile: { cardWidth: 260, height: 230 },
};
/* ============================================================ */

export default function AlbumCarousel() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const size = isDesktop ? SIZE.desktop : SIZE.mobile;

  return (
    <div className="relative w-full" style={{ height: size.height }}>
      <CircularCarousel
        items={items}
        preset="cylinder"
        intro="rise"
        cardWidth={size.cardWidth}
      />
    </div>
  );
}