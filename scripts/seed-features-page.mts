import { config } from "dotenv";
import { createClient } from "next-sanity";
import path from "node:path";

config({ path: path.join(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const token = process.env.SANITY_API_TOKEN!;

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity env vars (project id, dataset, or token)");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  token,
  useCdn: false,
});

async function main() {
  const doc = {
    _id: "featuresPage",
    _type: "featuresPage",
    hero: {
      badge: "App features",
      heading: {
        text: "Everything you get with Dink’It",
        highlight: "Dink’It",
      },
      subtext:
        "Free covers everything a golfer needs to log and understand a round. Premium adds the analysis you’d otherwise need separate hardware or a $50–100/yr subscription to get.",
    },
    freeSection: {
      heading: "Free forever",
      subtext: "Everything to log and understand a round — no subscription required.",
      features: [
        {
          _key: "course-search",
          title: "Course search",
          desc: "Search live UK course data by postcode or town; filter by difficulty and sort results.",
          tag: "No account needed",
        },
        {
          _key: "course-details",
          title: "Course details",
          desc: "Full course page — tees, par, opening hours, distance from home location.",
        },
        {
          _key: "favourite-courses",
          title: "Favourite courses",
          desc: "Save courses to a personal list, with rounds-played and last-played stats.",
        },
        {
          _key: "gps-shot-tracking",
          title: "GPS shot tracking",
          desc: "Log each stroke's GPS position, club used, and penalties live during a round.",
          note: "Tap-to-track per shot, not continuous background GPS.",
        },
        {
          _key: "shot-log-map",
          title: "Shot log & map",
          desc: "Per-hole map of every tracked shot, with distances and drop reasons.",
          note: "Shareable via a direct link.",
        },
        {
          _key: "manual-round-logging",
          title: "Manual round logging",
          desc: "Log a finished round's score without live GPS tracking.",
        },
        {
          _key: "round-history",
          title: "Round history",
          desc: "List of every past round, with resume-in-progress support.",
        },
        {
          _key: "per-round-stats",
          title: "Per-round stats",
          desc: "Strokes, putts, score vs. par, and play time for a single round.",
        },
        {
          _key: "lifetime-stats",
          title: "Lifetime stats",
          desc: "Career averages, best score, total rounds and play time, most-played course.",
        },
        {
          _key: "handicap-index",
          title: "Handicap index",
          desc: "USGA-style handicap calculated automatically from rated rounds.",
        },
        {
          _key: "highlight-badges",
          title: "Highlight badges",
          desc: "Best score, longest drive, and longest putt badges on the dashboard.",
        },
        {
          _key: "friends-social",
          title: "Friends & social",
          desc: "Add friends, manage requests, view a friend's stats and rounds.",
        },
        {
          _key: "multiplayer-games",
          title: "Multiplayer games",
          desc: "Host a round with a join code, QR, or link — or join a friend's.",
          note: "Direct friend invites too, not just code/link joins.",
        },
        {
          _key: "practice-round-mode",
          title: "Practice round mode",
          desc: "Play at a course without full slope/rating data.",
          note: "Doesn't count toward career stats.",
        },
        {
          _key: "first-run-tour",
          title: "First-run tour",
          desc: "Guided 5-step walkthrough shown automatically the first time you play Hole 1.",
          note: "Replayable any time from Help.",
        },
        {
          _key: "account-profile",
          title: "Account & profile",
          desc: "Edit profile, upload a photo, manage subscription and billing.",
          note: "Also the entry point to upgrade to Premium.",
        },
        {
          _key: "help-support",
          title: "Help & support",
          desc: "FAQ plus a direct contact form to the team.",
        },
      ],
    },
    premiumSection: {
      heading: "Premium — £5.99/month",
      subtext: "The analysis competitors paywall or need separate hardware for.",
      features: [
        {
          _key: "strokes-gained-analysis",
          title: "Strokes Gained analysis",
          desc: "Performance broken down by driving, approach, short game, and putting.",
          note: "Benchmarked against a handicap-relative baseline.",
        },
        {
          _key: "strokes-gained-history",
          title: "Strokes Gained history",
          desc: "Trend log of Strokes Gained by category across every tracked round.",
        },
        {
          _key: "shot-dispersion-analysis",
          title: "Shot dispersion analysis",
          desc: "Where shots actually land vs. target — short/long and left/right bias by club.",
        },
        {
          _key: "ai-coaching-narrative",
          title: "AI coaching narrative",
          desc: "AI-written coaching summary of a single round's Strokes Gained and dispersion data.",
          note: "5 AI analyses/month, shared with comparison narratives; needs GPS data on ≥50% of a round's shots.",
        },
        {
          _key: "round-comparison",
          title: "Round comparison",
          desc: "Side-by-side, hole-by-hole comparison of two rounds on the same course.",
        },
        {
          _key: "ai-comparison-narrative",
          title: "AI comparison narrative",
          desc: "AI-written head-to-head coaching summary between two rounds.",
          note: "Draws from the same 5/month AI cap.",
        },
        {
          _key: "my-bag",
          title: "My Bag",
          desc: "Average distance per club, calculated from tracked shots, with manual override.",
        },
        {
          _key: "premium-badge",
          title: "Premium badge",
          desc: "A visible badge next to your name on the dashboard and friend profiles.",
          note: "Toggle it on/off in Account settings.",
        },
      ],
    },
  };

  const result = await client.createOrReplace(doc);
  console.log("Seeded featuresPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
