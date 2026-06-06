"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setError(false);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setDone(true);
    } catch {
      setError(true);
    }
  }

  return (
    <section id="newsletter" className="relative z-10 bg-orange text-[#0a0a0a]" style={{ borderTop: "1px solid var(--color-line)" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-20">
        <span className="label" style={{ color: "rgba(10,10,10,0.7)" }}>The AI Builder newsletter</span>
        <h2 className="display text-[clamp(2.2rem,6vw,4.2rem)] pt-4 max-w-3xl">
          Notes from the build.
        </h2>
        <p className="text-[16px] leading-relaxed pt-5 max-w-xl" style={{ color: "rgba(10,10,10,0.78)" }}>
          Short notes on shipping AI products solo. The engineering calls, the deployment
          lessons, and what actually worked. One issue a week, no hype.
        </p>

        {done ? (
          <p className="text-lg font-medium pt-8">You&apos;re in. Talk soon.</p>
        ) : (
          <div className="max-w-lg">
            <form onSubmit={submit} className="flex flex-wrap gap-3 pt-8">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="flex-1 min-w-[220px] rounded-full px-5 py-3 text-[15px] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a0a0a]"
                style={{ background: "rgba(10,10,10,0.08)", border: "1px solid rgba(10,10,10,0.25)", color: "#0a0a0a" }}
              />
              <button type="submit" className="btn rounded-full px-6 py-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a0a0a]" style={{ background: "#0a0a0a", color: "#fff" }}>
                Subscribe
              </button>
            </form>
            {error && (
              <p className="pt-3 text-sm" style={{ color: "#0a0a0a" }} role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
