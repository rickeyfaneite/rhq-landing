import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Newsletter", href: "#newsletter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo-concept.png"
              alt="The AI Builder logo"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span className="font-heading text-sm font-medium text-foreground">
              The AI Builder
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@ricardohq.com"
                  className="text-sm font-medium text-teal transition-colors hover:text-teal-light"
                >
                  Work with me
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/30 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ricardo Faneite. Built with engineering rigor.
          </p>
        </div>
      </div>
    </footer>
  );
}
