import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const projects = [
  {
    title: "Settled",
    description: "Digital contracts and booking for freelance pros.",
    status: "Live",
    link: "https://settledapp.work",
    image: "/assets/settled-hero.png",
  },
  {
    title: "Tenue",
    description: "AI wardrobe app that recommends and organizes outfits.",
    status: "Prototype",
    link: null,
    image: "/assets/tenue-mockup.png",
  },
  {
    title: "LegalEase",
    description: "Immigration-law automation MVP for document workflows.",
    status: "Early pilot",
    link: null,
    image: "/assets/legalease-mockup.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm tracking-wider text-teal uppercase">
            Projects
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve shipped
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl bg-card/50 ring-1 ring-foreground/5 transition-all hover:ring-teal/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.description}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal">
                    {project.status}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "sm", variant: "ghost" }) + " text-teal hover:text-teal-light"}
                  >
                    Visit site →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
