import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  Images,
  Medal,
  Phone,
  Play,
  Send,
  Sparkles,
  Star,
  Trophy,
  TrendingUp,
  UserRound,
  Mail,
  MapPin,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import HeroVeil from "@/components/HeroVeil";
import ElectricLogo from "@/components/ElectricLogo";
import PageBackground from "@/components/PageBackground";
import AlbumCarousel from "@/components/AlbumCarousel";
import ExploreBackground from "@/components/ExploreBackground";
import AchievementsBackground from "@/components/AchievementsBackground";
import AlbumBackground from "@/components/AlbumBackground";
import HighlightsGrid from "@/components/HighlightsGrid";
import HighlightsBackground from "@/components/HighlightsBackground";
import ContactCrosshair from "@/components/ContactCrosshair";

/* ============================================================
   EDIT HERE: your photos and personal details
   ============================================================ */
const photos = {
  logo: "/images/konnie-logo.png",
  hero: "/images/hero-face.png",
  portrait: "/images/highlight-2.jpg",
  // title / subtitle show under each photo, accent is the glow color
  highlights: [
    { src: "/images/highlight-1.jpg", title: "Spike", subtitle: "Finals", accent: "#a855f7" },
    { src: "/images/highlight-2.jpg", title: "Serve", subtitle: "Training", accent: "#f59e0b" },
    { src: "/images/highlight-3.jpg", title: "Block", subtitle: "League match", accent: "#22d3ee" },
    { src: "/images/highlight-4.jpg", title: "Team", subtitle: "Celebration", accent: "#f472b6" },
  ],
};
// Album photos live in components/AlbumCarousel.tsx (public/images/album/)

const profile = {
  name: "ISHIMWE David",
  age: "13",
  position: "Outside Hitter",
  height: "1.92 m",
  jersey: "#00",
  team: "High School Volleyball Team",
};

const contact = {
  email: "dishimwe930@gmail.com",
  phone: "+250 796610761",
  location: "Rwanda",
};

const stats = [
  { label: "Matches", value: "00" },
  { label: "Points", value: "000" },
  { label: "Aces", value: "00" },
  { label: "Blocks", value: "00" },
];

// Each achievement has its own icon, tag and color
const achievements = [
  {
    year: "2026",
    tag: "TOURNAMENT",
    title: "Add your achievement",
    detail: "Champion, finalist or best player of a tournament.",
    icon: Trophy,
    tone: "bg-amber-400/10 text-amber-300",
  },
  {
    year: "2025",
    tag: "LEAGUE",
    title: "Add your achievement",
    detail: "League position, promotion or season result.",
    icon: Medal,
    tone: "bg-zinc-300/10 text-zinc-200",
  },
  {
    year: "2024",
    tag: "AWARD",
    title: "Add your achievement",
    detail: "Individual award or special recognition.",
    icon: Award,
    tone: "bg-purple-400/10 text-purple-300",
  },
  {
    year: "2023",
    tag: "MILESTONE",
    title: "Add your achievement",
    detail: "Selection, first match or personal milestone.",
    icon: Star,
    tone: "bg-fuchsia-400/10 text-fuchsia-300",
  },
];
/* ============================================================ */

const playerCards = [
  { number: "01", title: "Player Profile", description: "Discover the athlete behind the game.", href: "#profile", icon: UserRound },
  { number: "02", title: "Statistics", description: "Performance, skills and match records.", href: "#statistics", icon: TrendingUp },
  { number: "03", title: "Highlights", description: "Moments, matches and volleyball action.", href: "#highlights", icon: Play },
  { number: "04", title: "Album", description: "A rotating collection of my best photos.", href: "#album", icon: Images },
  { number: "05", title: "Achievements", description: "Milestones and sporting achievements.", href: "#achievements", icon: Trophy },
];

export default function Home() {
  return (
    <main className="relative min-h-screen scroll-smooth text-white">
      <PageBackground />

      {/* Gaps between cards let the mouse reach the dot field; cards stay interactive */}
      <div className="pointer-events-none relative z-10 mx-auto max-w-7xl px-5 py-6 md:px-10 [&_*]:pointer-events-auto">
        {/* NAVIGATION (with star border) */}
        <NavBar />

        {/* HERO */}
        <div className="mt-8 grid gap-5 lg:h-[420px] lg:grid-cols-3">
          {/* INTRO CARD (electric KONNIE logo on the right) */}
          <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#20152f]/90 via-[#15111e]/85 to-[#101014]/80 p-8 backdrop-blur-sm lg:col-span-2">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />

            {/* ELECTRIC LOGO (right side) */}
            <div className="absolute inset-y-0 right-0 z-10 hidden w-[42%] items-center justify-center md:flex">
              <div className="h-[300px] w-[300px] max-w-full overflow-hidden rounded-full">
                <ElectricLogo
                  src={photos.logo}
                  color="#ffffff"
                  glowColor="#a855f7"
                  intensity={0.5}
                  glow={0.5}
                  thickness={3}
                  strands={0.5}
                  crackle={0.5}
                  flicker={0.1}
                  arcs={0.5}
                  speed={1}
                  scale={0.9}
                />
              </div>
            </div>

            <div className="relative md:w-[56%]">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-[10px] tracking-widest text-purple-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                VOLLEYBALL PORTFOLIO
              </span>

              <h1 className="mt-10 text-3xl leading-[1.2] tracking-tight md:text-5xl">
                BUILT FOR
                <br />
                THE <span className="text-purple-400">GAME.</span>
              </h1>

              <p className="mt-6 max-w-sm text-xs leading-7 text-zinc-400 md:text-sm">
                Passion, discipline and determination. Every point tells a
                story. Every match is another opportunity to grow.
              </p>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 md:w-[56%]">
              <a
                href="#profile"
                className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-xs transition hover:bg-purple-400"
              >
                Explore my portfolio <ArrowUpRight size={16} />
              </a>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-widest text-zinc-500">
                <MapPin size={12} /> Rwandan Volleyball Player
              </span>
            </div>
          </div>

          {/* PLAYER IDENTITY CARD (dithered face) */}
          <div className="flex min-h-[380px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-purple-500/20 bg-[#111016]/80 p-6 backdrop-blur-sm">
            <div className="flex w-full items-center justify-between">
              <span className="text-[10px] tracking-[0.25em] text-zinc-400">PLAYER IDENTITY</span>
              <Sparkles size={16} className="text-purple-400" />
            </div>

            {/* FACE */}
            <div
              className="relative my-3 min-h-[240px] w-full flex-1"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)",
              }}
            >
              <HeroVeil src={photos.hero} />
            </div>

            <div className="text-center">
              <h2 className="text-sm tracking-[0.3em]">ISHIMWE David</h2>
              <p className="mt-2 text-[9px] tracking-[0.3em] text-zinc-500">VOLLEYBALL PLAYER</p>
            </div>
          </div>
        </div>

        {/* EXPLORE (big card with liquid chrome background) */}
        <section className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#09090c]">
          {/* animated chrome background */}
          <ExploreBackground />

          {/* dark tint so the text and cards stay readable */}
          <div className="!pointer-events-none absolute inset-0 bg-[#09090c]/60" />

          {/* content */}
          <div className="!pointer-events-none relative p-6 md:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-purple-300">EXPLORE</p>
                <h2 className="mt-2 text-xl md:text-2xl">Inside my world.</h2>
              </div>
              <span className="text-[10px] text-zinc-400">05 CATEGORIES</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {playerCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.number}
                    href={card.href}
                    className="group rounded-2xl border border-white/10 bg-[#121217]/70 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-[#191421]/90"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500">{card.number} / 05</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500 group-hover:text-white">
                        <Icon size={18} />
                      </span>
                    </div>
                    <h3 className="mt-12 text-sm">{card.title}</h3>
                    <p className="mt-2 text-[11px] leading-6 text-zinc-500">{card.description}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-[11px] text-purple-400">
                      Explore <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROFILE */}
        <section id="profile" className="mt-20 grid scroll-mt-28 gap-5 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#121217]/70 backdrop-blur-sm">
            <Image
              src={photos.portrait}
              alt={`${profile.name} portrait`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] tracking-widest backdrop-blur">
              {profile.jersey} · {profile.position.toUpperCase()}
            </span>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#21172d]/90 to-[#111016]/80 p-8 backdrop-blur-sm">
            <div>
              <p className="text-[10px] tracking-widest text-purple-300">ABOUT THE PLAYER</p>
              <h2 className="mt-4 text-xl md:text-2xl">Meet {profile.name}.</h2>
              <p className="mt-4 text-xs leading-7 text-zinc-400">
                A volleyball player driven by passion, hard work and the desire
                to become better with every game. This is where the journey
                continues.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-xs">
              {[
                ["Age", profile.age],
                ["Position", profile.position],
                ["Height", profile.height],
                ["Jersey", profile.jersey],
                ["Team", profile.team],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <dt className="text-[9px] tracking-widest text-zinc-500">{k.toUpperCase()}</dt>
                  <dd className="mt-2">{v}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 text-lg leading-snug">
              PLAY WITH <span className="text-purple-400">PURPOSE.</span>
            </h3>
          </div>
        </section>

        {/* STATISTICS */}
        <section id="statistics" className="mt-20 scroll-mt-28">
          <p className="text-[10px] tracking-[0.3em] text-purple-400">PERFORMANCE</p>
          <h2 className="mt-2 text-xl md:text-2xl">Season statistics.</h2>

          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-[#121217]/70 p-6 backdrop-blur-sm transition hover:border-purple-400/50"
              >
                <p className="text-3xl text-purple-400">{s.value}</p>
                <p className="mt-3 text-[10px] tracking-widest text-zinc-500">{s.label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS (big card with ghost fibers background) */}
        <section
          id="highlights"
          className="relative mt-20 scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[#09090c]"
        >
          {/* animated fibers background */}
          <HighlightsBackground />

          {/* light dark tint so the photos and text stay readable */}
          <div className="!pointer-events-none absolute inset-0 bg-[#09090c]/35" />

          {/* content */}
          <div className="relative p-6 md:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-purple-300">ON THE COURT</p>
                <h2 className="mt-2 text-xl md:text-2xl">Highlights.</h2>
              </div>
              <span className="text-[10px] text-zinc-400">MOVE YOUR CURSOR</span>
            </div>

            <div className="mt-6">
              <HighlightsGrid highlights={photos.highlights} />
            </div>
          </div>
        </section>

        {/* ALBUM (big card with letter glitch background) */}
        <section
          id="album"
          className="relative mt-20 scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[#09090c]"
        >
          {/* animated letters background */}
          <AlbumBackground />

          {/* dark tint so the carousel and text stay readable */}
          <div className="!pointer-events-none absolute inset-0 bg-[#09090c]/55" />

          {/* content */}
          <div className="relative p-6 md:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-purple-300">THE COLLECTION</p>
                <h2 className="mt-2 text-xl md:text-2xl">Album.</h2>
              </div>
              <span className="text-[10px] text-zinc-400">DRAG TO ROTATE</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl py-2">
              <AlbumCarousel />
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS (big card with shape grid background) */}
        <section
          id="achievements"
          className="relative mt-20 scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[#09090c]"
        >
          {/* animated grid background */}
          <AchievementsBackground />

          {/* content */}
          <div className="!pointer-events-none relative p-6 md:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-purple-400">MILESTONES</p>
                <h2 className="mt-2 text-xl md:text-2xl">Achievements.</h2>
              </div>
              <span className="text-[10px] text-zinc-500">
                {String(achievements.length).padStart(2, "0")} HIGHLIGHTS
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.year + a.tag}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121217]/75 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-400/50"
                  >
                    {/* big faded year in the background */}
                    <span className="pointer-events-none absolute -bottom-4 -right-2 text-6xl text-white/[0.04] transition group-hover:text-purple-400/10">
                      {a.year}
                    </span>

                    <div className="relative flex items-center justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.tone}`}>
                        <Icon size={20} />
                      </span>
                      <span className="text-[10px] text-zinc-500">{a.year}</span>
                    </div>

                    <span className="relative mt-8 inline-block rounded-full border border-white/10 px-3 py-1 text-[9px] tracking-widest text-zinc-400">
                      {a.tag}
                    </span>
                    <h3 className="relative mt-4 text-sm leading-6">{a.title}</h3>
                    <p className="relative mt-2 text-[11px] leading-6 text-zinc-500">{a.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT (card with crosshair cursor) */}
        <section id="contact" className="mt-20 scroll-mt-28">
          <ContactCrosshair className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#2a1a40]/90 via-[#15111e]/90 to-[#101014]/90 p-8 backdrop-blur-sm md:p-12">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-purple-300">GET IN TOUCH</p>
                <h2 className="mt-4 text-2xl leading-[1.3] md:text-4xl">
                  LET&apos;S TALK
                  <br />
                  <span className="text-purple-400">VOLLEYBALL.</span>
                </h2>
                <p className="mt-6 max-w-md text-xs leading-7 text-zinc-400">
                  Coach, club or scout? I&apos;m open to trials, collaborations and
                  new opportunities. Send me a message and let&apos;s talk.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-xs transition hover:bg-purple-400"
                  >
                    <Send size={14} /> Email me
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs transition hover:border-purple-400/60 hover:bg-white/5"
                  >
                    <Phone size={14} /> Call
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  { icon: UserRound, label: "NAME", value: profile.name },
                  { icon: Mail, label: "EMAIL", value: contact.email },
                  { icon: Phone, label: "PHONE", value: contact.phone },
                  { icon: MapPin, label: "LOCATION", value: contact.location },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] tracking-widest text-zinc-500">{item.label}</p>
                        <p className="mt-1 truncate text-xs">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ContactCrosshair>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.3em]">
                KONNIE<span className="text-purple-400">.</span>
              </p>
              <p className="mt-2 text-[10px] text-zinc-500">{profile.name} · Volleyball Player</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-zinc-400">
              <a href="#profile" className="transition hover:text-white">Profile</a>
              <a href="#highlights" className="transition hover:text-white">Highlights</a>
              <a href="#album" className="transition hover:text-white">Album</a>
              <a href="#achievements" className="transition hover:text-white">Achievements</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>

            <a
              href="#"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-purple-300 transition hover:border-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <ArrowUp size={16} />
            </a>
          </div>

          <p className="mt-8 text-center text-[10px] text-zinc-600">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}