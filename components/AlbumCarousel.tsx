"use client";

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
/* ============================================================ */

export default function AlbumCarousel() {
  return (
    <div className="relative h-[260px] w-full md:h-[260px]">
      <CircularCarousel
        items={items}
        preset="cylinder"
        intro="rise"
        cardWidth={320}
      />
    </div>
  );
}