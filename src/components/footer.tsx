import { Logo } from "@/components/logo";

const links = [
  { href: "#work", label: "What I build" },
  { href: "#projects", label: "Projects" },
  { href: "#background", label: "Background" },
  { href: "#newsletter", label: "Newsletter" },
];

export function Footer() {
  return (
    <footer className="relative z-10" style={{ borderTop: "1px solid var(--color-line)" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-12" style={{ borderInline: "1px solid var(--color-line)" }}>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo size={38} />
            <span className="text-[15px] font-semibold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              RicardoHQ
            </span>
          </a>
          <nav className="flex flex-wrap gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="label hover:text-[color:var(--color-foreground)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="mailto:hello@ricardohq.com" className="btn btn-ghost">hello@ricardohq.com</a>
        </div>
        <div className="flex flex-col gap-2 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <span className="label">Built solo in Miami · One founder. No VC. All AI.</span>
          <span className="label">© 2026 RicardoHQ</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
