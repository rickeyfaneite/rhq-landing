"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-card/50 p-8 text-center md:p-12">
          <p className="mb-3 font-mono text-sm tracking-wider text-teal uppercase">
            Newsletter
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            The AI Builder newsletter
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Practical notes on shipping AI products. Brief case studies,
            engineering decisions, and deployment lessons. No hype. One short
            issue weekly.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="h-10 flex-1 bg-background/50"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="h-10 shrink-0"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-sm text-teal">
              You&apos;re in! Check your inbox to confirm.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-destructive">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
