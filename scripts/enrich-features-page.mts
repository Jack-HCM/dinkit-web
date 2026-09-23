import { config } from "dotenv";
import { createClient } from "next-sanity";
import path from "node:path";

config({ path: path.join(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-01-01",
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

async function main() {
  const result = await client
    .patch("featuresPage")
    .set({
      'freeSection.features[_key=="gps-shot-tracking"].desc':
        "Log each stroke's GPS position, club used, and penalties live during a round, on a satellite map that rotates to your play direction.",
      'freeSection.features[_key=="gps-shot-tracking"].note':
        "Tap-to-track per shot, not continuous background GPS. Pinch-to-zoom, twist-to-rotate, and one-tap recenter.",
      'freeSection.features[_key=="course-search"].desc':
        "Search live UK course data by postcode or town; filter by difficulty and sort results. Coverage refreshes automatically every day, with duplicate listings filtered out.",
      'freeSection.features[_key=="course-details"].desc':
        "Full course page — tees, par, opening hours, green fees, hole-by-hole par/stroke-index/yardage, and distance from home location.",
      'freeSection.features[_key=="my-bag"].desc':
        "Average distance per club, calculated from tracked shots, with manual override. Suggests the right club for a target distance, and nearby courses that suit your bag.",
      'freeSection.features[_key=="handicap-index"].desc':
        "USGA-style handicap calculated automatically from rated rounds. Self-report a starting handicap at signup so it's useful from day one — automatically replaced once you've logged 3+ rated rounds.",
      'freeSection.features[_key=="practice-round-mode"].note':
        "Full live GPS tracking still included — just excluded from career stats.",
    })
    .insert("after", "premiumSection.features[-1]", [
      {
        _key: "head-to-head",
        _type: "featureItem",
        title: "Head-to-Head",
        desc: "Directly compare your stats against any friend's, using the same categories as your own Strokes Gained breakdown.",
      },
    ])
    .commit();

  console.log("Patched featuresPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
