const projects = [
  {
    name: "Hermes Agent",
    description: "AI assistant framework.",
    status: "active",
    href: "https://github.com/NousResearch/hermes-agent",
  },
  {
    name: "Settled",
    description: "Contracts and booking.",
    status: "live",
    href: "https://settledapp.work",
  },
  {
    name: "Planofy",
    description: "AI estimating for contractors.",
    status: "live",
    href: "https://planofy.app",
  },
  {
    name: "Tenue",
    description: "Wardrobe recommendations.",
    status: "prototype",
  },
];

const notes = [
  {
    title: "Agents that do less",
    date: "June 2026",
  },
  {
    title: "The last 5% is the product",
    date: "May 2026",
  },
  {
    title: "Interfaces after chat",
    date: "April 2026",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="section-label">{children}</h2>;
}

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-7 sm:px-6 sm:py-6">
      <article className="mx-auto w-full max-w-[292px] sm:max-w-[292px]">
        <header className="-mx-10 text-center sm:-mx-12">
          <h1 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-primary">
            Ricardo HQ
          </h1>
          <p className="mt-1 text-[14px] leading-[1.35] text-secondary">
            Builds AI products that ship.
          </p>

          <p className="mx-auto mt-4 max-w-[360px] text-pretty text-[12px] font-medium leading-[1.25] text-primary sm:text-[13px]">
            <span className="font-serif italic">Today</span>, I&apos;m building AI agents,
            creative tools, and product experiments. Working fast, keeping the craft.
          </p>

          <p className="mt-4 font-mono text-[11px] leading-[1.4] text-muted">
            Last shipped: hermes-agent, 2 days ago
          </p>
        </header>

        <section aria-labelledby="building" className="mt-6">
          <SectionLabel>building</SectionLabel>
          <div className="mt-2 space-y-0.5">
            {projects.map((project) => {
              const content = (
                <>
                  <span className="min-w-0 truncate">
                    <span className="font-semibold text-primary">{project.name}</span>
                    <span className="text-secondary"> — {project.description}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[10px] text-muted">{project.status}</span>
                </>
              );

              return project.href ? (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="quiet-row grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 rounded-[6px] py-1 text-[11px] leading-[1.3] -mx-2 px-2"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={project.name}
                  className="quiet-row grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 rounded-[6px] py-1 text-[11px] leading-[1.3] -mx-2 px-2"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="notes" className="mt-3">
          <SectionLabel>notes</SectionLabel>
          <div className="mt-2 space-y-0.5">
            {notes.map((note) => (
              <a
                key={note.title}
                href={`#${note.title.toLowerCase().replaceAll(" ", "-")}`}
                className="quiet-row grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 rounded-[6px] py-1 text-[11px] leading-[1.3] -mx-2 px-2"
              >
                <span className="truncate font-semibold text-primary">{note.title}</span>
                <time className="font-mono text-[10px] leading-[1.4] text-muted">{note.date}</time>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="now" className="mt-3">
          <SectionLabel>now</SectionLabel>
          <div className="mt-2 font-serif text-[11px] leading-[1.22] text-primary sm:text-[11px]">
            <p>
              Right now I&apos;m thinking about what AI products actually look like when the hype
              settles. Most of what I build is smaller and stranger than the discourse suggests —
              tools that do one thing well, agents that don&apos;t try to replace judgment, interfaces
              that stay out of the way.
            </p>
          </div>
        </section>

        <footer className="mt-6 text-center text-[11px] leading-[1.35] text-secondary">
          <p>Ricardo HQ, 2026</p>
          <p className="mt-1">
            Made by hand. Questions:{" "}
            <a className="underline-offset-4 hover:underline" href="mailto:hello@ricardohq.com">
              hello@ricardohq.com
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
