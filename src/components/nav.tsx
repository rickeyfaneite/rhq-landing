"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  { href: "#work", label: "What I build" },
  { href: "#projects", label: "Projects" },
  { href: "#background", label: "Background" },
  { href: "#newsletter", label: "Newsletter" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full glass" style={{ borderBottom: "1px solid var(--color-line)" }}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 sm:px-10">
        <a href="#top" className="flex h-11 items-center" aria-label="RHQ home">
          <Logo size={40} />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="label flex h-11 items-center hover:text-[color:var(--color-foreground)] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#newsletter" className="btn btn-primary">Work with me</a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-[color:var(--color-muted)]"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass" style={{ borderTop: "1px solid var(--color-line)" }}>
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="label py-3">
                {l.label}
              </a>
            ))}
            <a href="#newsletter" onClick={() => setOpen(false)} className="btn btn-primary mt-3 justify-center">
              Work with me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
