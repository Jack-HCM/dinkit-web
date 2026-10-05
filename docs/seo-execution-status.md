# Dink'It SEO — execution status

Source strategy doc: [`seo-content-strategy-source.md`](./seo-content-strategy-source.md) — a full
SEO audit + 18-cluster, ~150-URL content map, provided by the user 2026-10-05. Read that file for
the full reasoning/keyword tables. This file tracks what's actually been done against it, so it
survives context resets.

## Workflow rules for this workstream
- **Staging first.** All SEO/content changes land on the `staging` branch (both `dinkit-web` and
  `fairway-finder` have one) and only merge to `main` once the user has reviewed and approved —
  isolated, non-public infra (like read-only APIs) can be an exception if explicitly cleared.
- **Claude drafts, user reviews.** For the content batch, Claude writes the copy; the user
  reviews/approves before it's considered final.
- **No hardcoded numbers that will go stale.** Anything citing live counts (course totals, etc.)
  must fetch live from the app, not be hand-typed — see `src/lib/course-coverage.ts` for the
  pattern (ISR fetch with `revalidate`, not a static figure).

## Shipped
- **2026-10-05 — Phase 1 technical SEO** (`dinkit-web` `main`): sitemap completion (all 8 real
  pages), `SoftwareApplication` JSON-LD with real pricing, `next/image` conversion for the 3 logo
  instances, canonical tags already in place.
- **2026-10-05 — `app.dinkitgolf.com` set to `noindex`** (`fairway-finder` `main`): the app was
  getting indexed instead of the marketing site; now only `dinkitgolf.com` is crawlable.
- **2026-09-23 — USGA → WHS handicap copy fix** (Sanity CMS `featuresPage` doc, live): caught while
  reviewing the strategy doc's claims against the real site; the live copy said "USGA-style"
  handicap when the product is actually WHS-style.
- **2026-10-05 — UK Course Coverage page** (`/courses`): not part of the official priority list
  below — built ahead of schedule at the user's explicit request, roughly covering the ground of
  Cluster 16/17 (UK Golf / Individual Course Pages, both P1–P2 in the playbook's own stack).
  - `fairway-finder` `main`: `GET /api/public/course-coverage` — public, read-only, live course
    count + coordinates, no names/ids. Revalidates hourly.
  - `dinkit-web` `staging` (not yet merged to `main`): `/courses` page — live course count (not
    hardcoded), SVG dot map plotted from real coordinates, honest "add a course → play it in → we
    review and publish" explainer. Deliberately does **not** claim any existing crowdsourced
    geometry or user-published-course numbers — those are real, shipped product capabilities but
    have **zero production usage so far** (confirmed via DB query 2026-10-05: 0 rows in
    `HoleGeometrySample`, 0 courses ever published via `/admin/course-submissions`). Revisit this
    copy once that changes.

## Not yet started: the playbook's actual Phase 1
The strategy doc's own "Phase 1 — first 15 pages" (commercial + educational pillar around Shot
Tracking / Stats / Strokes Gained / Dispersion / Club Distances — see source doc lines 1231–1250)
is the thing the playbook calls P0 and hasn't been touched yet. The coverage page above is useful
and user-requested, but it's playbook P1–P2 territory, not P0. **This is the real "next thing."**

Phase 1 list (playbook's own order):
1. `/golf-shot-tracker/` — commercial pillar, P0
2. `/golf-stats-app/` — commercial pillar, P0
3. `/golf-performance-analysis/` — commercial pillar, P0
4. `/strokes-gained/` — pillar, P0
5. `/golf-shot-dispersion/` — commercial pillar, P0
6. `/golf-club-distance-tracker/` — commercial pillar, P0
7. `/data-driven-golf/` — P1
8. `/strokes-gained/what-is-strokes-gained/` — P0
9. `/blog/how-does-strokes-gained-work/` — P0
10. `/blog/how-is-strokes-gained-calculated/` — P0
11. `/blog/how-to-track-golf-shots/` — P1
12. `/blog/which-golf-stats-should-i-track/` — P1
13. `/blog/how-to-find-where-you-lose-strokes/` — P0 ("basically Dink'it's value proposition
    expressed as a search query" per the source doc)
14. `/blog/what-is-golf-shot-dispersion/` — P1
15. `/blog/how-to-measure-golf-club-distance/` — P1

Playbook's own Month 1 Week 1 (the literal starting point): **Golf Shot Tracker landing page** +
**What Is Strokes Gained? article**.

## Open questions / not yet decided
- Content-type infra: these will need either new static page routes (like `/courses`) or a Sanity
  schema for blog-style articles — not yet decided which, since the 15-page list mixes commercial
  landing pages (more like `/features`) and blog articles (need a list/index + individual post
  template that doesn't exist yet in `dinkit-web`).
- GSC/Bing verification — user believes GSC is already set up (plausible via DNS/GA, not
  verifiable from the repo); no action unless they hand over a verification code.
