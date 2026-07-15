<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Workflow — RHQ dev platform (mandatory)

- `origin` = GitHub (`rickeyfaneite/rhq-landing`), the single source of truth.
- Never commit or push directly to `main` (or `master`) or `release`. Every change ships as branch + PR:
  `feat/*` (humans + Codex), `agent/*` (fleet), `wip/*` (machine-handoff parking, no PR).
- `release` is the production branch where it exists; only Ricardo moves it. Merging to `main` never deploys production.
- Before opening a PR: run `npm run test` (and `npm run test:e2e:local` if that script exists) and get it green. If the repo has no test script yet, say how you verified the change in the PR body.
- Dev database = local Supabase (`supabase start`) where the repo has `supabase/`. Never develop or test against production. Migrations are human-applied.
- Secrets never go in code, commits, PR bodies, or agent prompts. Real env lives in Vercel (+ Vaultwarden).
- Review gate is model-decorrelated: code authored by a Codex-family model gets a Claude-family (or human) reviewer, and vice versa.
- Tier A (internal, no real users): PRs merge when the gate is green or by Ricardo. DB migrations and auth changes are always human.
