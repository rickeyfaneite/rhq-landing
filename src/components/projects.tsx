import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    name: "Settled",
    status: "Live · iOS + Web",
    statusColor: "var(--color-orange)",
    blurb: "Contract signing and booking for freelance pros. Live on the App Store and the web, taking real payments on both.",
    img: "/assets/settled-hero.png",
    href: "https://settledapp.work",
  },
  {
    name: "The RHQ Fleet",
    status: "12 agents",
    statusColor: "var(--color-orange)",
    blurb: "Twelve specialized AI agents with named roles: engineer, designer, QA, research, red team. They plan, build, and review RHQ's products end to end.",
    img: "/assets/fleet-real.png",
    href: undefined,
  },
  {
    name: "Bookalo",
    status: "Building",
    statusColor: "var(--color-yellow)",
    blurb: "Booking software for any profession, fully bilingual in English and Spanish. Scheduling, CRM, and checkout in one clean flow.",
    img: "/assets/bookalo-real.png",
    href: "https://getbookalo.com",
  },
  {
    name: "Traced",
    status: "In development",
    statusColor: "var(--color-yellow)",
    blurb: "A job-hunt copilot. Forward your alerts, get a scored shortlist and ATS-clean resumes that never invent a line.",
    img: "/assets/traced-real.png",
    href: "https://usetraced.vercel.app",
  },
  {
    name: "Planofy",
    status: "Live · Nightcity",
    statusColor: "var(--color-orange)",
    blurb: "AI estimating for residential contractors: reads the plan package and prices the bid. Built with a co-founder under Nightcity Innovations.",
    img: "/assets/planofy-real.png",
    href: "https://planofy.app",
  },
  {
    name: "MACA",
    status: "Live · Client build",
    statusColor: "var(--color-orange)",
    blurb: "Bilingual site and booking system for a Miami makeup artist. Design, infrastructure, and a Square-backed gift card and payments flow.",
    img: "/assets/maca-real.png",
    href: "https://www.macasoto.com",
  },
  {
    name: "Auto Service Ally",
    status: "Live · Client build",
    statusColor: "var(--color-orange)",
    blurb: "Spanish-first landing and CRM for an auto-repair consultant who reviews dealership estimates line by line.",
    img: "/assets/serviceally-real.png",
    href: "https://auto-service-ally.vercel.app",
  },
  {
    name: "Tenue",
    status: "Prototype",
    statusColor: "var(--color-yellow)",
    blurb: "AI wardrobe app that organizes and recommends outfits from your own closet.",
    img: "/assets/tenue-real.png",
    href: "https://tenueapp.com",
  },
  {
    name: "LegalEase",
    status: "Private beta",
    statusColor: "var(--color-muted)",
    blurb: "Client intake for immigration attorneys. Takes the interview in Spanish, Mandarin, or Portuguese, hands back a structured summary in English.",
    img: "/assets/legalease-real.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderTop: "1px solid var(--color-line)" }}>
          {projects.map((p, i) => {
            // ponytail: odd card count would leave a dead half-row, so the last one goes full width.
            const wide = i === projects.length - 1 && projects.length % 2 === 1;
            return (
            <Reveal
              key={p.name}
              delay={(i % 2) * 90}
              className={`group flex flex-col ${wide ? "md:col-span-2" : i % 2 === 0 ? "md:[border-right:1px_solid_var(--color-line)]" : ""}`}
              style={{ borderBottom: "1px solid var(--color-line)" }}
            >
              <div className={`relative overflow-hidden ${wide ? "aspect-[16/10] md:aspect-[32/9]" : "aspect-[16/10]"}`} style={{ borderBottom: "1px solid var(--color-line)" }}>
                <Image
                  src={p.img}
                  alt={`${p.name}: ${p.blurb}`}
                  fill
                  sizes={wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 sm:px-8 py-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                  <span className="label" style={{ color: p.statusColor, letterSpacing: "0.14em" }}>
                    {p.status}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-[color:var(--color-muted)] pt-2 flex-1">
                  {p.blurb}
                </p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label mt-4 inline-flex min-h-11 items-center gap-1 hover:text-orange transition-colors"
                  >
                    Visit <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
