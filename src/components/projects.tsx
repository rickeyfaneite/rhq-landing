import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    name: "Settled",
    status: "Live",
    statusColor: "var(--color-orange)",
    blurb: "Digital contracts and booking for freelance pros. Live and taking real payments.",
    img: "/assets/settled-hero.png",
    href: "https://settledapp.work",
  },
  {
    name: "Tenue",
    status: "Prototype",
    statusColor: "var(--color-yellow)",
    blurb: "AI wardrobe app that organizes and recommends outfits from your own closet.",
    img: "/assets/tenue-warm.png",
    href: undefined,
  },
  {
    name: "LegalEase",
    status: "MVP",
    statusColor: "var(--color-muted)",
    blurb: "Immigration-law automation for document-heavy case workflows.",
    img: "/assets/legalease-warm.png",
    href: undefined,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10">
      <div className="mx-auto max-w-[1280px]" style={{ borderInline: "1px solid var(--color-line)", borderTop: "1px solid var(--color-line)" }}>
        <div className="px-6 sm:px-10 pt-20 pb-10">
          <span className="label">What I&apos;ve shipped</span>
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] pt-4">Real products, in the wild.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid var(--color-line)" }}>
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 90}
              className="group flex flex-col"
              style={{ borderRight: i < projects.length - 1 ? "1px solid var(--color-line)" : "none", borderBottom: "1px solid var(--color-line)" }}
            >
              <div className="overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.blurb}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ aspectRatio: "16 / 10" }}
                />
              </div>
              <div className="flex flex-1 flex-col px-6 sm:px-8 py-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                  <span className="label" style={{ color: p.statusColor, letterSpacing: "0.14em" }}>
                    {p.status}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-[color:var(--color-muted)] pt-2 flex-1">
                  {p.blurb}
                </p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label inline-flex items-center gap-1 pt-5 hover:text-orange transition-colors"
                  >
                    Visit <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
