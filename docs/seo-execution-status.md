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
- **2026-10-05 — `/golf-stats-app/` expanded with a Premium section** (`dinkit-web` `staging`):
  seeded 2 more rounds onto `seo-test-13219133@dinkitgolf.com` (3 total), including one fully
  GPS-tracked round built to produce realistic, braggable Shot Highlights (245-yard Longest Drive,
  11-yard Longest Putt) and a "tracked" (not "estimated") Strokes Gained result. Re-captured SS1
  (`/dashboard`, stats expanded) and SS2 (`/scorecards/[id]`, Show Shots expanded) against the new
  data; SS3 (My Bag) left untouched. Added a second 3-box section, "Three Premium stats features",
  duplicating the existing card pattern, with 3 new screenshots: Strokes Gained by category for a
  real tracked round (`/scorecards/[id]/game-stats`), club-by-club distances from the dashboard's
  Club and total stats panel, and an AI coaching narrative from `/scorecards/[id]/analyse`.
- **2026-10-06 — `/golf-performance-analysis/` hero image** (`dinkit-web` `staging`): user supplied
  the real hero (claymation golfer teeing off into a 250-yard drive arc, next to the Premium Stats
  dashboard panel), `hero-golf-performance-analysis.jpg`. Wired in with `object-contain` (not
  `cover`) since the image's 4:3 ratio doesn't match the `aspect-[838/768]` card and `cover` would
  crop the phone panel's top icons or the golfer depending on crop side; contain letterboxes
  top/bottom instead, which reads fine against the card background.
- **2026-10-05 — `/golf-performance-analysis/`** (`dinkit-web` `staging`): split hero (image is a
  **placeholder box**, user to supply later, same as `/golf-stats-app/`), 3-box "how it works"
  using real screenshots of `/scorecards/[id]/analyse` (AI coaching narrative, Overall Play and
  category breakdown) and `/scorecards/[id]/compare` (side-by-side scorecard + Strokes Gained)
  captured from the shared `seo-test-13219133@dinkitgolf.com` test account, reusing its 2 existing
  fully GPS-tracked Highgate rounds (same course, required for Compare Rounds) rather than seeding
  new ones. Copy is grounded in the live `featuresPage` Sanity doc's premium section: Analyse Round
  and Compare Rounds are both scoped to Premium (£5.99/month), the AI coaching narrative's 5 real
  section labels (Overall Play, Driving, Approach, Short Game, Putting), the 5 AI analyses/month
  cap shared between coaching and comparison narratives, the GPS-data-on-≥50%-of-shots requirement
  for Analyse Round, and the same-course-only constraint on Compare Rounds (confirmed directly in
  `compare/page.tsx`'s candidate query). Deliberately does not claim cross-course comparison or a
  free tier for this feature, since neither exists. Test account's password was reset to a known
  value directly in the DB (bcrypt) to allow Playwright login; left set for reuse in future capture
  batches, per the standing single-test-account rule.
- **2026-10-06 — `/strokes-gained/`** (`dinkit-web` `staging`): the pillar page (distinct from the
  already-shipped `/strokes-gained/what-is-strokes-gained/` sub-article), same commercial-pillar
  template as the other P0 pages, **not** blog content, no new infra, and no nav change needed
  since `site-nav.tsx`'s mega-menu already had a `/strokes-gained` entry from earlier nav work.
  Split hero (placeholder image, user to supply later). 3-box "how it works" reuses
  `howto-stats-4-strokes-gained.jpg` (single-round by-category breakdown, already captured for
  `/golf-stats-app/`) for card 1, plus 2 new screenshots of the previously-unshipped **Strokes
  Gained log/history** feature at `/premium-stats?tab=strokes-gained` (`PremiumStatsTabs` →
  `StrokesGainedPanel` in `fairway-finder`): one showing the default "Strokes Gained" (total)
  category log across the test account's 3 Highgate rounds, one showing the log filtered to
  Putting. FAQ's "tracked vs Estimated" answer is copied near-verbatim from the real in-app
  explainer text under the log (confirmed exact wording via screenshot) rather than paraphrased.
  Also updated the 3 existing cross-links on `/golf-shot-tracker/`, `/golf-stats-app/`, and
  `/golf-performance-analysis/` that previously pointed directly at
  `/strokes-gained/what-is-strokes-gained` (the sub-article) to point at `/strokes-gained` (the
  new parent pillar) instead, matching the feature-to-pillar cross-link convention used elsewhere;
  the pillar itself still links down to the sub-article for the deep dive.
- **2026-10-06 — `/golf-shot-dispersion/`** (`dinkit-web` `staging`): same commercial-pillar
  template, placeholder hero image (user to supply later, same as the other hero-pending pages).
  Copy grounded directly in `fairway-finder/src/lib/shot-dispersion.ts` and `geo.ts` (the real
  algorithm), **not** the live Sanity `featuresPage` CMS doc or the in-app `upgrade-modal.tsx`
  paywall copy, both of which overclaim: they describe Shot Dispersion as covering short/long
  *and* left/right bias, and the Sanity copy additionally claims a by-club breakdown. The shipped
  feature only computes **left/right (lateral) bias, grouped by category** (Driving, Approach,
  Short Game), with no short/long dimension and no per-club breakdown anywhere in the code — same
  class of issue as the 2026-09-23 USGA→WHS fix above, flagged here rather than silently
  corrected since the CMS/in-app copy is out of scope for this page-building pass. `site-nav.tsx`'s
  existing `/golf-shot-dispersion` mega-menu entry had the same "every club in the bag" overclaim
  in its body text; corrected to "Driving, Approach, and Short Game" while here. 3-box "how it
  works" uses 3 new screenshots from the shared `seo-test-13219133@dinkitgolf.com` test account:
  one round's shots had their GPS coordinates deliberately nudged (via a geo-math patch script,
  not fabricated numbers) to produce a legible non-zero left/right bias for card 1, contrasted
  with the other existing round's untouched "On line" result for card 2, plus the dashboard-level
  "Shot placement (GPS-tracked holes)" teaser card (`expandable-career-stats.tsx`, gated behind a
  collapsed-by-default "See all stats" toggle) for card 3. Also caught and fixed a self-introduced
  bug before shipping: the cached AI coaching narrative for the nudged round still described shots
  as landing on line (generated before the GPS patch); cleared the stale `aiAnalysisUsage` cache
  row and regenerated it live so the narrative text matches the new pills.
- **2026-10-06 — `/golf-club-distance-tracker/`** (`dinkit-web` `staging`): same commercial-pillar
  template, placeholder hero image (user to supply later). Unlike the two prior pages, the
  underlying feature (**My Bag**, `fairway-finder/src/app/bag/page.tsx` +
  `src/lib/club-distances.ts`) is **free, not Premium** — confirmed via the live Sanity
  `featuresPage` doc's own `my-bag` entry, which already matched the real code ("Average distance
  per club, calculated from tracked shots, with manual override. Suggests the right club for a
  target distance...") so no CMS discrepancy this time. `site-nav.tsx`'s existing
  `/golf-club-distance-tracker` entry did have a minor overclaim ("not guesses") for clubs with no
  tracked shots yet, which still show a generic estimate; softened to "Average distance per club,
  from your tracked shots." Test account's `/bag` data was unrealistic for screenshots (per-club
  averages like a 55-yard 6 Iron, left over from early synthetic seeding never meant to represent
  real swings) — patched via a new geo-math script (`computeClubDistancesFromShots`-compatible:
  rescales the existing shot-to-shot direction vector per hole to a target yardage per club,
  processed in-order per hole so chained target clubs compound correctly) to realistic, properly
  ordered distances for Driver, 4–7 and 9 Iron, Pitching Wedge, and Sand Wedge, leaving
  never-tracked clubs on their existing generic estimates. 3-box "how it works" uses 2 new `/bag`
  screenshots (top-of-bag with manual override visible; wedges/short-irons with the
  exclude-from-suggestions checkbox visible on Sand Wedge) plus a reused
  `howto-shot-tracker-2-aim-mode.jpg` (already captured for `/golf-shot-tracker/`, and it already
  showed the live aim-mode club recommendation, so no new capture needed for that card).

- **2026-10-07 — `/golf-handicap-tracker/` and `/golf-head-to-head-comparison/`** (`dinkit-web`
  `staging`): not part of the official Phase 1 list below — built at the user's explicit request
  to round the `site-nav.tsx` "App features" mega-menu out to 8 entries (a clean 4x2 grid), after
  which the plan is to ship this whole features-umbrella batch to `staging` for review before
  merging to `main`, rather than continuing straight into non-feature pillar pages like
  `/data-driven-golf/`. Both use the same commercial-pillar template, placeholder hero image (user
  to supply later), and `site-nav.tsx`'s `APP_FEATURES` array grew from 6 to 8 entries (new
  `IconHandicap` and `IconHeadToHead` inline SVGs added alongside the existing icon set).
  - **`/golf-handicap-tracker/`**: grounded in `fairway-finder/src/lib/handicap.ts`'s
    `computeHandicapIndex()` — WHS-style differential, best-N-of-last-20 average with the standard
    adjustment table, minimum 3 rated rounds before a computed index appears, and a **hard
    cutover** (`?? user.currentHandicap`, no blending) once that threshold is hit. Free feature, no
    Premium gate anywhere in the code. A "rated round" only needs a logged score against a rated
    tee (course rating + slope); GPS shot tracking isn't required. 3-box "how it works" uses one
    new screenshot of the first-run `HandicapPromptModal` (captured by temporarily nulling the test
    account's `currentHandicap`/`handicapPromptDismissedAt` in the DB, screenshotting, then
    restoring both — reversible, same account) plus the existing dashboard and account-page
    screenshots showing the computed badge next to the self-reported field.
  - **`/golf-head-to-head-comparison/`**: grounded in `head-to-head-stats.tsx` — hard-gated to
    accepted friends only, Premium-gated on the **viewing** account's status only (the friend being
    compared against doesn't need Premium), exactly 5 compared stats (Best Score, Longest Drive,
    Longest Putt, Handicap, one overall Strokes Gained figure), all-time/career scope rather than
    tied to a single shared round. **CMS discrepancy found, not fixed**: the live Sanity
    `featuresPage` doc's `head-to-head` entry overclaims "...using the same categories as your own
    Strokes Gained breakdown" — the real feature only shows one total Strokes Gained number, no
    category breakdown. Flagged here per the established pattern (same as the 2026-09-23 USGA→WHS
    and 2026-10-06 Shot Dispersion overclaims), not silently corrected. **Separate production bug
    found, not fixed**: `fairway-finder/src/app/friends/[id]/page.tsx:240` renders a literal
    leftover dev label, `"Head to Head (prem)"`, as the section heading shown to every user above
    the real stats/paywall — worth a real cleanup pass outside this SEO workstream. Needed a new
    disposable friend account (`seo-friend-13219133@dinkitgolf.com`, "Jamie Carter") seeded with a
    GPS-tracked round and an accepted `Friendship` row to the existing test account, since
    Head-to-Head requires two distinct users. Hit and fixed a seeding bug along the way: computing
    "longest drive" depends on each hole's chronologically-*first* non-putt shot, so shots seeded
    across separate `createMany` calls at different times let old putts outrank new drives and
    nulled the result — fixed by rebuilding the whole round's shots in one call, drive before putts
    per hole. 3-box "how it works" uses 3 new screenshots: the friends list, the Premium upgrade
    gate (captured by temporarily flipping the test account's `betaTester` flag off, screenshotting,
    then restoring it), and the full 5-stat comparison card.
  - **2026-10-08 screenshot revision pass** (user feedback on the above): the test account's
    auto-generated identity (`seotest13219133` as both name fallback and username) read as obviously
    synthetic, so it's now `Ryan Mitchell` / `ryan_mitchell` — re-fixes the "Hello there" dashboard
    greeting, the dashboard avatar initial, and the account page's "User ID" line, all of which
    derive from `name`/`username`. Re-captured both handicap screenshots. Separately, the
    Head-to-Head screenshots had drifted from this project's full-phone-frame convention (two were
    tight `clip`-based crops) — fixed by recapturing all three at the standard uncropped 390x844.
    Seeded two more disposable friend accounts (`seo-friend-2-13219133@dinkitgolf.com` "Sophie
    Clarke", `seo-friend-3-13219133@dinkitgolf.com` "Tom Richardson", each with one rated `ScoreCard`
    at Highgate for a "Last played" date) so the friends-list screenshot shows three friends instead
    of one; their handicap column reads "—" since WHS needs 3 rated rounds, which is real app
    behavior, not a seeding gap. The premium-gate screenshot now captures the actual `UpgradeModal`
    popup (triggered live via Playwright click) instead of the static inline locked card, full
    screen. The comparison screenshot is now scrolled to the bottom of the real friend-profile page
    instead of being `clip`-cropped to just the stat rows, so it shows real surrounding chrome
    (header, "Head to Head" section, Remove Friend link, bottom nav) — the leftover `"(prem)"` dev
    label (still an open, separately-flagged production bug, see above) was patched to plain "Head
    to Head" client-side for this capture only, not touched on disk or in the DB. Updated the
    friends-list and premium-gate `alt` text in `golf-head-to-head-comparison/page.tsx` to match.

The strategy doc's own "Phase 1 — first 15 pages" (commercial + educational pillar around Shot
Tracking / Stats / Strokes Gained / Dispersion / Club Distances — see source doc lines 1231–1250)
is the thing the playbook calls P0. The coverage page above is useful and user-requested, but it's
playbook P1–P2 territory, not P0 — this list is the real priority order.

Phase 1 list (playbook's own order):
1. `/golf-shot-tracker/` — commercial pillar, P0 — **shipped to `staging` 2026-10-05**
2. `/golf-stats-app/` — commercial pillar, P0 — **shipped to `staging` 2026-10-05**
3. `/golf-performance-analysis/` — commercial pillar, P0 — **shipped to `staging` 2026-10-05**
4. `/strokes-gained/` — pillar, P0 — **shipped to `staging` 2026-10-06**
5. `/golf-shot-dispersion/` — commercial pillar, P0 — **shipped to `staging` 2026-10-06**
6. `/golf-club-distance-tracker/` — commercial pillar, P0 — **shipped to `staging` 2026-10-06**
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
