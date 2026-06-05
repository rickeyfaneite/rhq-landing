const certifications = [
  { name: "AWS Cloud Practitioner", abbr: "AWS CP" },
  { name: "Microsoft Azure AZ-900", abbr: "AZ-900" },
  { name: "Cisco CCNA", abbr: "CCNA" },
  { name: "Cisco CCNP", abbr: "CCNP" },
  { name: "CWNA", abbr: "CWNA" },
  { name: "Fortinet", abbr: "Fortinet" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-sm tracking-wider text-teal uppercase">
              Experience
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              10+ years of building
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I have 10+ years in enterprise pre-sales and solutions
                engineering, with roots in network engineering and cybersecurity.
                I move projects from architecture through production. I write
                reliable systems and ship customer-facing products.
              </p>
              <p>
                I operate a self-hosted agent lab and build integrations end to
                end for development and testing.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
              Certifications
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.abbr}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/30 px-4 py-3 transition-colors hover:border-teal/30"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-teal/10 font-mono text-xs font-semibold text-teal">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
