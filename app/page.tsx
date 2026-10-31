import Image from "next/image";
import {
  ArrowUpRight,
  Images,
  Medal,
  Play,
  Sparkles,
  Trophy,
  TrendingUp,
  UserRound,
  Mail,
  MapPin,
} from "lucide-react";
import ElectricLogo from "@/components/ElectricLogo";
import PageBackground from "@/components/PageBackground";
import AlbumCarousel from "@/components/AlbumCarousel";

/* ============================================================
   EDIT HERE: your photos and personal details
   ============================================================ */
const photos = {
  logo: "/images/konnie-logo.png",
  portrait: "/images/konnie-portrait.jpg",
  highlights: [
    { src: "/images/highlight-1.jpg", caption: "Spike · Finals" },
    { src: "/images/highlight-2.jpg", caption: "Serve · Training" },
    { src: "/images/highlight-3.jpg", caption: "Block · League match" },
    { src: "/images/highlight-4.jpg", caption: "Team celebration" },
  ],
};
// Album photos live in components/AlbumCarousel.tsx (public/images/album/)

const profile = {
  position: "Outside Hitter",
  height: "1.92 m",
  jersey: "#00",
  team: "Your Team Name",
};

const stats = [
  { label: "Matches", value: "00" },
  { label: "Points", value: "000" },
  { label: "Aces", value: "00" },
  { label: "Blocks", value: "00" },
];

const achievements = [
  { year: "2026", title: "Add your achievement", detail: "Tournament, league or award." },
  { year: "2025", title: "Add your achievement", detail: "Tournament, league or award." },
  { year: "2024", title: "Add your achievement", detail: "Tournament, league or award." },
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
        {/* NAVIGATION */}
        <nav className="sticky top-4 z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-[#121217]/80 px-6 py-4 backdrop-blur-md">
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

        {/* HERO */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#20152f]/90 via-[#15111e]/85 to-[#101014]/80 p-8 backdrop-blur-sm lg:col-span-2">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-[10px] tracking-widest text-purple-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                VOLLEYBALL PORTFOLIO
              </span>

              <h1 className="mt-10 text-3xl leading-[1.2] tracking-tight md:text-5xl">
                BUILT FOR
                <br />
                THE <span className="text-purple-400">GAME.</span>
              </h1>

              <p className="mt-6 max-w-md text-xs leading-7 text-zinc-400 md:text-sm">
                Passion, discipline and determination. Every point tells a
                story. Every match is another opportunity to grow.
              </p>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#profile"
                className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-xs transition hover:bg-purple-400"
              >
                Explore my portfolio <ArrowUpRight size={16} />
              </a>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-widest text-zinc-500">
                <MapPin size={12} /> RWANDA · VOLLEYBALL
              </span>
            </div>
          </div>

          {/* LOGO CARD */}
          <div className="flex min-h-[380px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-purple-500/20 bg-[#111016]/80 p-6 backdrop-blur-sm">
            <div className="flex w-full items-center justify-between">
              <span className="text-[10px] tracking-[0.25em] text-zinc-400">PLAYER IDENTITY</span>
              <Sparkles size={16} className="text-purple-400" />
            </div>

            <div className="h-[190px] w-full">
              <ElectricLogo src={photos.logo} />
            </div>

            <div className="text-center">
              <h2 className="text-sm tracking-[0.3em]">KONNIE</h2>
              <p className="mt-2 text-[9px] tracking-[0.3em] text-zinc-500">VOLLEYBALL PLAYER</p>
            </div>
          </div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="mt-14 flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-purple-400">EXPLORE</p>
            <h2 className="mt-2 text-xl md:text-2xl">Inside my world.</h2>
          </div>
          <span className="text-[10px] text-zinc-500">05 CATEGORIES</span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {playerCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.number}
                href={card.href}
                className="group rounded-2xl border border-white/10 bg-[#121217]/70 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-[#191421]/90"
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

        {/* PROFILE */}
        <section id="profile" className="mt-20 grid scroll-mt-28 gap-5 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#121217]/70 backdrop-blur-sm">
            <Image
              src="/images/highlight-2.jpg"
              alt="Konnie portrait"
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
              <h2 className="mt-4 text-xl md:text-2xl">Meet Konnie.</h2>
              <p className="mt-4 text-xs leading-7 text-zinc-400">
                A volleyball player driven by passion, hard work and the desire
                to become better with every game. This is where the journey
                continues.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-xs">
              {[
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

        {/* HIGHLIGHTS GALLERY */}
        <section id="highlights" className="mt-20 scroll-mt-28">
          <p className="text-[10px] tracking-[0.3em] text-purple-400">ON THE COURT</p>
          <h2 className="mt-2 text-xl md:text-2xl">Highlights.</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {photos.highlights.map((p) => (
              <figure
                key={p.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#121217]/70"
              >
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-wider">
                  {p.caption}
                  <Play size={14} className="text-purple-400" />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ALBUM */}
        <section id="album" className="mt-20 scroll-mt-28">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-purple-400">THE COLLECTION</p>
              <h2 className="mt-2 text-xl md:text-2xl">Album.</h2>
            </div>
            <span className="text-[10px] text-zinc-500">DRAG TO ROTATE</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#121217]/50 py-6 backdrop-blur-sm">
            <AlbumCarousel />
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="mt-20 scroll-mt-28">
          <p className="text-[10px] tracking-[0.3em] text-purple-400">MILESTONES</p>
          <h2 className="mt-2 text-xl md:text-2xl">Achievements.</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {achievements.map((a) => (
              <div
                key={a.year + a.title}
                className="rounded-2xl border border-white/10 bg-[#121217]/70 p-6 backdrop-blur-sm transition hover:border-purple-400/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500">{a.year}</span>
                  <Medal size={20} className="text-purple-400" />
                </div>
                <h3 className="mt-8 text-sm">{a.title}</h3>
                <p className="mt-2 text-[11px] leading-6 text-zinc-500">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="mt-20 flex scroll-mt-28 flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center sm:flex-row"
        >
          <p className="text-xs tracking-widest">
            KONNIE<span className="text-purple-400">.</span>
          </p>
          <p className="text-[10px] text-zinc-500">© 2026 Konnie Volleyball Portfolio.</p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300"
          >
            <Mail size={14} /> Contact <ArrowUpRight size={14} />
          </a>
        </footer>
      </div>
    </main>
  );
}