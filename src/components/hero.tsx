import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const stats = [
  { k: "10+ yrs", v: "Enterprise eng" },
  { k: "3 live", v: "Products shipped" },
  { k: "EN / ES", v: "Bilingual" },
  { k: "Bare metal", v: "Self-hosted lab" },
];

// 21st.dev RetroGrid — animated perspective grid, themed warm orange.
function RetroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-40 [perspective:200px]">
      <div className="absolute inset-0 [transform:rotateX(60deg)]">
        <div className="animate-grid [background-image:linear-gradient(to_right,rgba(210,86,47,0.45)_1px,transparent_0),linear-gradient(to_bottom,rgba(210,86,47,0.45)_1px,transparent_0)] [background-repeat:repeat] [background-size:46px_46px] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent to-80%" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative z-10 isolate overflow-hidden">
      {/* background image + scrim */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-orange.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-55"
          style={{ objectPosition: "center 42%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,10,9,0.96) 0%, rgba(11,10,9,0.78) 48%, rgba(11,10,9,0.42) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, var(--color-background) 2%, transparent 55%), linear-gradient(180deg, rgba(11,10,9,0.85) 0%, transparent 30%)",
          }}
        />
      </div>

      <RetroGrid />

      {/* warm radial accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] h-[520px] w-[640px]"
        style={{ background: "radial-gradient(ellipse at 82% 0%, rgba(210,86,47,0.20), transparent 60%)" }}
      />

      <div
        className="relative z-10 mx-auto flex min-h-[78vh] max-w-[1280px] flex-col justify-center px-6 py-32 sm:px-10"
        style={{ borderInline: "1px solid var(--color-line)" }}
      >
        <Reveal>
          <span
            className="label inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: "var(--color-line-strong)", background: "rgba(20,18,15,0.5)", backdropFilter: "blur(8px)" }}
          >
            <span className="text-orange">/</span> ONE FOUNDER · NO VC · ALL AI
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="display text-[clamp(2.6rem,8vw,6rem)] pt-7">
            Your AI product,
            <br />
            built and <span className="text-orange">shipped.</span>
          </h1>
        </Reveal>

        <Reveal delay={170} className="max-w-2xl pt-8">
          <p className="text-[17px] leading-relaxed text-[color:var(--color-muted)]">
            I&apos;m Ricardo, a senior engineer running a one-person studio in Miami. Bring me an
            idea and I take it from spec to a live app that real users pay for, in weeks. No
            agency layers, no hand-offs, no vendor runaround.
          </p>
        </Reveal>

        <Reveal delay={250} className="flex flex-wrap gap-3 pt-9">
          <a href="#newsletter" className="btn btn-primary">
            Work with me <ArrowUpRight size={16} />
          </a>
          <a href="#projects" className="btn btn-ghost">See what I&apos;ve shipped</a>
        </Reveal>
      </div>

      {/* stat strip */}
      <div className="relative z-10" style={{ borderBlock: "1px solid var(--color-line)" }}>
        <div
          className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4"
          style={{ borderInline: "1px solid var(--color-line)", background: "var(--color-background)" }}
        >
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
    </section>
  );
}

export default Hero;
