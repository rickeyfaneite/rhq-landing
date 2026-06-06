import { Reveal } from "@/components/reveal";

const stack = [
  "Next.js + Vercel",
  "Supabase + Postgres",
  "Cloudflare",
  "Proxmox + Docker",
  "Self-hosted AI agents",
  "TypeScript + Python",
];

export function Experience() {
  return (
    <section id="background" className="relative z-10">
      <div className="mx-auto max-w-[1280px]" style={{ borderInline: "1px solid var(--color-line)", borderTop: "1px solid var(--color-line)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal className="px-6 sm:px-10 py-20" style={{ borderRight: "1px solid var(--color-line)" }}>
            <span className="label">Background</span>
            <h2 className="display text-[clamp(1.7rem,3.6vw,2.6rem)] pt-5 leading-tight">
              10+ years moving enterprise systems from architecture to{" "}
              <span className="text-orange">production</span>.
            </h2>
            <p className="text-base leading-relaxed text-[color:var(--color-muted)] pt-6 max-w-md">
              Pre-sales and solutions engineering across MSP and cybersecurity, with roots in
              network engineering and clinical IT. Bilingual EN/ES. I run a bare-metal homelab
              and orchestrate my own AI agents end to end.
            </p>
          </Reveal>

          <div className="grid grid-cols-2">
            {stack.map((c, i) => (
              <Reveal
                key={c}
                delay={(i % 2) * 70}
                className="flex items-center px-6 sm:px-8 py-8"
                style={{
                  borderBottom: i < stack.length - 2 ? "1px solid var(--color-line)" : "none",
                  borderRight: i % 2 === 0 ? "1px solid var(--color-line)" : "none",
                }}
              >
                <span className="text-base font-medium tracking-tight">
                  <span className="text-orange">/</span> {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
