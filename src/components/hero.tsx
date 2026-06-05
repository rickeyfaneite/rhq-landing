import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <Image
        src="/assets/hero.png"
        alt="Dark studio workspace with teal-lit laptop and abstract interface glow"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-sm tracking-wider text-teal uppercase">
            The AI Builder
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The AI Builder who ships production products.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I design, build, and launch AI-native web apps and automations with
            engineering rigor. Solo or as your technical partner.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:hello@ricardohq.com"
              className={buttonVariants({ size: "lg", variant: "default" })}
            >
              Work with me
            </a>
            <a
              href="#newsletter"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Join The AI Builder newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
