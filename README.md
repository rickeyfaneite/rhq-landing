# rhq-landing

Static landing page for [ricardohq.com](https://ricardohq.com), the
RicardoHQ LLC venture studio site.

## What's here

- `landing/index.html` — single-page site, hand-rolled HTML/CSS, no
  build step.
- `landing/hero-bg.jpg` — hero background, ~340KB.

That's the whole repo. Deliberately framework-free so it loads fast
and is trivial to maintain.

## Deploy

Vercel pulls `main` automatically. Production at `ricardohq.com`,
`www.ricardohq.com`. No CI, no preview env config beyond Vercel
defaults.

To deploy a change: edit `landing/index.html`, push to `main`. Done.

## Why this is public

The rest of my GitHub is intentionally light. This site is the public
face of RHQ; recruiters and visitors landing here can read the source
of what they see at ricardohq.com. The studio's actual product code
(Settled, Planofy, etc.) lives in private repos.
