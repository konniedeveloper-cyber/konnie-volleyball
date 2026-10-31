"use client";

import { ArrowUpRight } from "lucide-react";
import StarBorder from "@/components/StarBorder";

export default function NavBar() {
  return (
    <div className="sticky top-4 z-50">
      <StarBorder
        color="#e9d5ff"
        trailColor="#a855f7"
        duration={5}
        direction="clockwise"
        className="block w-full rounded-2xl"
      >
        <nav className="flex w-full items-center justify-between px-2 py-1">
          <a href="#" className="text-sm tracking-[0.3em]">
            KONNIE<span className="text-purple-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-[13px] tracking-wider text-zinc-400 md:flex">
            <a href="#profile" className="transition hover:text-white">Profile</a>
            <a href="#statistics" className="transition hover:text-white">Statistics</a>
            <a href="#highlights" className="transition hover:text-white">Highlights</a>
            <a href="#album" className="transition hover:text-white">Album</a>
            <a href="#achievements" className="transition hover:text-white">Achievements</a>
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