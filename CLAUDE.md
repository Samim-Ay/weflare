# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

`weflare` is a Next.js 16 (App Router) marketing site for a software agency, built with React 19, Tailwind CSS v4, and shadcn/ui (`new-york` style). All user-facing copy is in German.

## Commands

```bash
npm run dev      # start dev server (Next.js, Turbopack by default)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite configured in this repo.

## Architecture

**Routing**: App Router under `app/`. Each route is a thin wrapper that composes section components — pages themselves contain no markup logic, e.g. `app/about/page.tsx` just renders `<AboutSection />` + `<TeamSection />`. Routes: `/` (home), `/about`, `/services`, `/projects`, `/contact`.

**Global chrome**: `app/layout.tsx` renders `HeroHeader` (`components/header.tsx`) and `FooterSection` (`components/footer.tsx`) around every page — do not re-add header/footer inside individual pages.

**Section components vs. UI primitives**:
- `components/*.tsx` — page-level sections (hero, about, services, team, stats, contact, footer, header). These are the building blocks pages compose.
- `components/ui/*.tsx` — shadcn/ui primitives (button, card, dialog, form, etc.), generated via the shadcn CLI. Config lives in `components.json` (style: `new-york`, base color: `neutral`, icon library: `lucide`, no class prefix). Prefer adding new primitives via `npx shadcn add <name>` over hand-rolling them, to stay consistent with existing generated components.

**Content/data separation**: Structured content for the services page (feature list, service cards, stats) lives in `lib/service-data.tsx`, not inline in components — follow this pattern when adding similarly repetitive/structured content rather than hardcoding arrays inside JSX.

**Styling**: Tailwind v4 with CSS-based theme config in `app/globals.css` (`@theme inline` block + OKLCH CSS custom properties for light/dark palettes, `.dark` variant via `@custom-variant`). No `tailwind.config.*` file — theme tokens are defined directly in CSS. Use the `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) when conditionally composing class names.

**Path aliases**: `@/*` maps to the repo root (see `tsconfig.json` / `components.json` aliases) — import as `@/components/...`, `@/lib/...`, `@/hooks/...`.

**Animation**: Section components use `motion/react` (Motion, the framer-motion successor) with shared `transitionVariants` objects (container/item stagger patterns) for scroll-triggered reveals — see `components/contact-section.tsx` or `components/hero-section.tsx` for the established pattern.

**Client vs. server components**: Most interactive section components (header, contact form, animated sections) are explicitly `"use client"` due to state, effects, or motion. Keep new interactive components marked accordingly; default to server components where no interactivity is needed.

**Forms**: `react-hook-form` + `zod` (`@hookform/resolvers`) and shadcn's `components/ui/form.tsx` are available as dependencies for form handling. Note the current contact form (`components/contact-section.tsx`) is a static/disabled placeholder (no submit handler wired up yet).

## Git workflow authorization

You are authorized to `git commit` and `git push` to `origin main` automatically, without asking for confirmation first, as long as:
- The change set is something the user asked for or is a direct, expected consequence of the current task (e.g. deploying a feature, fixing a build).
- You are not force-pushing, rewriting history, or touching any branch other than `main`.

Still confirm before any destructive or history-rewriting operation (force-push, reset --hard, branch deletion, amending pushed commits).
