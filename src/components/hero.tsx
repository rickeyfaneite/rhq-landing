import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const stats = [
  { k: "10+ yrs", v: "Enterprise eng" },
  { k: "3 live", v: "Products shipped" },
  { k: "EN / ES", v: "Bilingual" },
  { k: "Bare metal", v: "Self-hosted lab" },
];

export function Hero() {
  return (
    <section id="top" className="relative z-10 pt-32 sm:pt-36">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10" style={{ borderInline: "1px solid var(--color-line)" }}>
        {/* meta row */}
        <div
          className="flex items-center justify-between py-4"
          style={{ borderBottom: "1px solid var(--color-line)" }}
        >
          <span className="label"><span className="text-orange">/</span> RICARDOHQ</span>
          <span className="label hidden sm:block">MIAMI · EST. 2026</span>
        </div>

        {/* headline */}
        <Reveal className="pt-12 sm:pt-16">
          <h1 className="display text-[clamp(2.7rem,9vw,6.5rem)]">
            One founder.
            <br />
            No VC.
            <br />
            <span className="text-orange">All AI.</span>
          </h1>
        </Reveal>

        <Reveal delay={120} className="max-w-2xl pt-8">
          <p className="text-[17px] leading-relaxed text-[color:var(--color-muted)]">
            I build small, fast, focused software products. Solo, in Miami, powered by
            custom-orchestrated AI agents running on bare-metal hardware. No board meetings,
            no vendor bloat. Just direct code and clean tools that solve real problems.
          </p>
        </Reveal>

        <Reveal delay={200} className="flex flex-wrap gap-3 pt-8 pb-16">
          <a href="#newsletter" className="btn btn-primary">
            Work with me <ArrowUpRight size={16} />
          </a>
          <a href="#projects" className="btn btn-ghost">See what I&apos;ve shipped</a>
        </Reveal>
      </div>

      {/* stat grid, full-bleed bordered */}
      <div style={{ borderBlock: "1px solid var(--color-line)" }}>
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4" style={{ borderInline: "1px solid var(--color-line)" }}>
          {stats.map((s, i) => (
            <div
              key={s.k}
              className="px-6 py-7 sm:px-8"
              style={{ borderRight: i < stats.length - 1 ? "1px solid var(--color-line)" : "none" }}
            >
              <div className="text-2xl font-medium tracking-tight">{s.k}</div>
              <div className="label pt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* framed hero image */}
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-10" style={{ borderInline: "1px solid var(--color-line)" }}>
        <Reveal className="glass overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-orange.png"
            alt="Dark home-office workspace with a mini PC and warm orange accent lighting"
            className="w-full object-cover"
            style={{ aspectRatio: "16 / 7", objectPosition: "center 40%" }}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
