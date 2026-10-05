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
- **No em dashes in page copy.** Standing rule since 2026-10-05 — rewrite with periods, commas, or
  colons instead. Applies to all body copy, headings, and metadata on every page in this batch.

## Template standard (set 2026-10-05, applies to all future Phase 1 pages)
- **Split hero**: text left / image right (`md:flex-1` + `aspect-[838/768]` image container,
  pattern copied from `about-teaser.tsx`). User supplies the hero image per page.
- **"How it works" 1/2/3 boxes use real app screenshots**, not plain numbered text cards —
  captured live from `fairway-finder` via a disposable test account + Playwright (signup → approve
  via direct DB flip, since new accounts land unapproved behind the closed-beta gate → populate My
  Bag club distances → tee off at Highgate Golf Club (`cmriy0uv80004de62tsgmy73m`, fully mapped,
  multiple tees) → screenshot the relevant screens with `context.setGeolocation` mocking GPS).
  **Local dev and prod share one Neon DB** — any signup/round this produces is a real prod row.
  One test account remains live (`seo-test-13219133@dinkitgolf.com`) — **flag for deletion once all
  Phase 1 pages' screenshot batches are done**, per explicit user sign-off, not before. Reuse this
  single account for future pages' captures rather than signing up fresh each time.
  - **Shot placement**: interpolate along the hole's real `Hole.path` fairway polyline (arc-length,
    not straight tee-green `lerp`) with a small perpendicular lateral offset, so the shot markers
    trace a natural-looking route rather than a dead-straight line.
  - **Before every screenshot**, dismiss in-app coaching tips (`button[aria-label="Dismiss"]`) —
    the general shot tip opens a "Just this once" confirm sub-dialog (two clicks), the aim-mode tip
    closes directly (one click).
  - **Image display**: show the full, uncropped phone screenshot (390:844 aspect, `object-contain`),
    inset/centered within the card rather than cropped full-bleed — matches how the homepage's
    feature-carousel phone shots read, without needing the same bespoke 3D-tilt PNG assets.
- `/golf-shot-tracker` is the reference implementation of this template.

## Deferred until all feature pages are finished
- Educational article pages (e.g. `/strokes-gained/what-is-strokes-gained`) get a left-hand
  sticky/scroll-spy TOC + right-hand content layout, under the H1/subhead, modeled on
  https://www.tryprofound.com/aeo-guide/chapter-6 — **do not start until the feature-page batch is
  done**, per explicit user instruction 2026-10-05. **Exception already shipped**: the one
  strokes-gained sub-article above got its TOC early (user asked for it directly, same day), using
  `src/components/article-toc.tsx`. Its sticky positioning required `overflow-x: hidden` →
  `overflow-x: clip` on `html`/`body` in `globals.css` (hidden silently breaks `position: sticky`
  on descendants) — apply that same TOC component to future article pages without re-deferring.

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
- **2026-10-05 — `/golf-stats-app/`** (`dinkit-web` `staging`): split hero (image is a **placeholder
  box**, user to supply a bespoke image later), 3-box "how it works" using real screenshots of
  `/dashboard` (Career Stats), `/scorecards/[id]` (hole-by-hole scorecard), and `/bag` (My Bag club
  distances) captured from the shared `seo-test-13219133@dinkitgolf.com` test account. Copy is
  grounded in what the app actually shows: Average Score, Rounds Played, Best Score, Total Play
  Time, Courses Played, per-round hole-by-hole breakdown, and free/non-gated club distances in My
  Bag; Premium is scoped to Strokes Gained + round comparison only. Deliberately does **not**
  invent fairways-hit%, GIR%, or putts-per-round-average stats — none of those exist anywhere in
  the app. While capturing screenshots, found and fixed two pre-existing data artifacts on the test
  account's single Highgate round (both DB-level, not app bugs): the dashboard showed a blank Total
  Play Time because the round's `finishedAt` was never set, and the Driver's tracked distance in My
  Bag read 82 yards because the shot's GPS position had been placed too close to the next shot
  (both fixed directly against the test account's data).

## In progress: the playbook's actual Phase 1
The strategy doc's own "Phase 1 — first 15 pages" (commercial + educational pillar around Shot
Tracking / Stats / Strokes Gained / Dispersion / Club Distances — see source doc lines 1231–1250)
is the thing the playbook calls P0. The coverage page above is useful and user-requested, but it's
playbook P1–P2 territory, not P0 — this list is the real priority order.

Phase 1 list (playbook's own order):
1. `/golf-shot-tracker/` — commercial pillar, P0 — **shipped to `staging` 2026-10-05**
2. `/golf-stats-app/` — commercial pillar, P0 — **shipped to `staging` 2026-10-05**
3. `/golf-performance-analysis/` — commercial pillar, P0
4. `/strokes-gained/` — pillar, P0 (not yet built — the article below currently stands alone,
   cross-linked from the shot tracker page instead of from a parent pillar)
5. `/golf-shot-dispersion/` — commercial pillar, P0
6. `/golf-club-distance-tracker/` — commercial pillar, P0
7. `/data-driven-golf/` — P1
8. `/strokes-gained/what-is-strokes-gained/` — P0 — **shipped to `staging` 2026-10-05**
9. `/blog/how-does-strokes-gained-work/` — P0
10. `/blog/how-is-strokes-gained-calculated/` — P0
11. `/blog/how-to-track-golf-shots/` — P1
12. `/blog/which-golf-stats-should-i-track/` — P1
13. `/blog/how-to-find-where-you-lose-strokes/` — P0 ("basically Dink'it's value proposition
    expressed as a search query" per the source doc)
14. `/blog/what-is-golf-shot-dispersion/` — P1
15. `/blog/how-to-measure-golf-club-distance/` — P1

Playbook's own Month 1 Week 1 (the literal starting point): **Golf Shot Tracker landing page** +
**What Is Strokes Gained? article** — both shipped as plain static routes (same pattern as
`/features`/`/courses`), on `dinkit-web` `staging`, pending user review before merging to `main`.
Content is grounded in the live `featuresPage` Sanity doc (GPS shot tracking, Strokes Gained
categories, AI coaching caveats) — no invented product claims.

Content-type infra decision made: items 1–8 (landing pages + the one strokes-gained sub-article)
are plain static routes, no new infra needed. Items 9–15 are explicitly `/blog/...` URLs in the
source doc and *do* need a blog index + post template that doesn't exist yet — that's a real
upcoming decision (static TSX per post vs. a new Sanity schema) when this batch is reached.

## Open questions / not yet decided
- Content-type infra: these will need either new static page routes (like `/courses`) or a Sanity
  schema for blog-style articles — not yet decided which, since the 15-page list mixes commercial
  landing pages (more like `/features`) and blog articles (need a list/index + individual post
  template that doesn't exist yet in `dinkit-web`).
- GSC/Bing verification — user believes GSC is already set up (plausible via DNS/GA, not
  verifiable from the repo); no action unless they hand over a verification code.
