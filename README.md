# Fable Café — design-first business website

A Next.js starter for pitching and iterating on local business sites.

**Workflow this repo is built for**

1. Ship a polished design preview with almost no backend.
2. Ask the client what they actually need (menu, reservations, events, multi-location, etc.).
3. Grow the same codebase into a full product without a rewrite.

## Why Next.js for this

| Need | How Next.js helps |
| --- | --- |
| Design-first brochure sites | App Router pages + Tailwind + shadcn/ui |
| Later features (forms, booking, CMS, auth) | Route Handlers, Server Actions, easy API/CMS hooks |
| Local SEO for cafés / shops | Strong defaults for metadata, SSG/SSR |
| Many businesses, varying complexity | One stack from “pretty homepage” → “full operations site” |

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## What’s in this preview

- Full-bleed hero for **Fable Café & Bar** (Mumbai)
- Story, menu tease, visit / locations, and a “what do you need?” preference form
- No auth, database, or live booking — intentional for the discovery phase

## Next build ideas (after client input)

- Live menu from CMS or Google Sheet
- Reservation / inquiry form with email or WhatsApp handoff
- Per-location pages + Google Maps embeds
- Events calendar, gallery, or Instagram feed
