"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import StarBorder from "@/components/StarBorder";
import GooeyNav from "@/components/GooeyNav";

const items = [
  { label: "Profile", href: "#profile" },
  { label: "Statistics", href: "#statistics" },
  { label: "Highlights", href: "#highlights" },
  { label: "Album", href: "#album" },
  { label: "Achievements", href: "#achievements" },
];

export default function NavBar() {
  return (
    <div className="sticky top-4 z-50">
      <StarBorder
        as="div"
        color="#e9d5ff"
        trailColor="#a855f7"
        duration={5}
        direction="clockwise"
        thickness={2}
        radius={32}
        backgroundColor="#121217"
        className="w-full"
      >
        <nav className="flex w-full items-center justify-between px-4 py-1">
          <a href="#" className="text-sm tracking-[0.3em]">
            KONNIE<span className="text-purple-400">&exec</span>
          </a>

          <div className="hidden lg:block">
            <GooeyNav
              items={items}
              frame={false}
              size="sm"
              color="#a855f7"
              activeTextColor="#ffffff"
              style={
                {
                  "--gn-font": "11px",
                  "--gn-x": "12px",
                  "--gn-y": "8px",
                } as CSSProperties
              }
            />
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[11px] text-black transition hover:bg-purple-300"
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
        </nav>
      </StarBorder>
    </div>
  );
}