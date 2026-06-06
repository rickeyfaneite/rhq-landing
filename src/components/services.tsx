import { Boxes, Bot, Workflow, Compass } from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    icon: Boxes,
    title: "Product builds",
    desc: "From idea to launch: full-stack web apps that take real users and real payments.",
  },
  {
    icon: Bot,
    title: "Agents & automation",
    desc: "Custom AI agents and workflows that run reliably in production, not just demos.",
  },
  {
    icon: Workflow,
    title: "Systems & integrations",
    desc: "APIs, data plumbing, and secure integrations that make products work at scale.",
  },
  {
    icon: Compass,
    title: "Fractional builder",
    desc: "Short-term technical leadership to scope, prototype, and ship the priority work.",
  },
];

export function Services() {
  return (
    <section id="work" className="relative z-10">
      <div className="mx-auto max-w-[1280px]" style={{ borderInline: "1px solid var(--color-line)" }}>
        <div className="px-6 sm:px-10 pt-20 pb-10">
          <span className="label">What I build</span>
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] pt-4 max-w-3xl">
            Services for teams that want it <span className="text-orange">shipped</span>, not slide-decked.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderTop: "1px solid var(--color-line)" }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={(i % 2) * 80}
                className={`group px-6 sm:px-10 py-10 ${i % 2 === 0 ? "md:[border-right:1px_solid_var(--color-line)]" : ""}`}
                style={{ borderBottom: "1px solid var(--color-line)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-12 place-items-center rounded-xl border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:[border-color:var(--color-orange)] group-hover:[box-shadow:0_10px_34px_rgba(210,86,47,0.18)]"
                    style={{ borderColor: "var(--color-line-strong)", background: "linear-gradient(160deg, rgba(210,86,47,0.16), rgba(210,86,47,0.03))" }}
                  >
                    <Icon size={22} strokeWidth={1.6} className="text-orange" />
                  </span>
                  <span
                    className="text-xs tracking-widest text-[color:var(--color-faint)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight pt-6">{s.title}</h3>
                <p className="text-base leading-relaxed text-[color:var(--color-muted)] pt-2 max-w-md">
                  {s.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
