# ricardohq.com

Personal site for RICARDOHQ LLC. Built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4 + shadcn/ui (base-nova theme, neutral palette)
- **Icons:** Lucide React
- **Node:** 18+ required

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Serve production build locally
npm run start

# Lint
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + shadcn theme tokens
│   ├── layout.tsx       # Root layout (Geist font)
│   └── page.tsx         # Home page
├── components/
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # cn() helper
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

<!-- dry run: testing GitHub -> Vercel preview flow, safe to delete -->
