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
  const landingResult = await client
    .patch("landingPage")
    .set({
      "hero.subtext":
        "Join beta testing today for GPS shot tracking, live round stats, and AI-powered coaching insights, straight from your phone with no extra hardware needed.",
      "footer.subtext":
        "Join beta testing today for GPS shot tracking, live round stats, and AI-powered coaching insights, straight from your phone with no extra hardware needed.",
      "footer.disclaimer":
        "We're actively building, so join beta testing today and help shape the app as it grows.",
    })
    .commit();
  console.log("Patched landingPage:", landingResult._id);

  const featuresResult = await client
    .patch("featuresPage")
    .set({
      "freeSection.subtext":
        "Everything to log and understand a round, no subscription required.",
      'freeSection.features[_key=="course-details"].desc':
        "Full course page: tees, par, opening hours, green fees, hole-by-hole par/stroke-index/yardage, and distance from home location.",
      'freeSection.features[_key=="handicap-index"].desc':
        "USGA-style handicap calculated automatically from rated rounds. Self-report a starting handicap at signup so it's useful from day one, automatically replaced once you've logged 3+ rated rounds.",
      'freeSection.features[_key=="multiplayer-games"].desc':
        "Host a round with a join code, QR, or link, or join a friend's.",
      'freeSection.features[_key=="practice-round-mode"].note':
        "Full live GPS tracking still included, just excluded from career stats.",
      'premiumSection.features[_key=="shot-dispersion-analysis"].desc':
        "Where shots actually land vs. target: short/long and left/right bias by club.",
      "premiumSection.heading": "Premium (£5.99/month)",
    })
    .commit();
  console.log("Patched featuresPage:", featuresResult._id);

  const roadmapResult = await client
    .patch("roadmapPage")
    .set({
      'rows[_key=="export-swing"].features[_key=="smart-club-recommendation"].description':
        "Get a suggested club for every shot, calculated from your real logged distances and the distance to the pin, surfaced live during your round and not buried in a menu.",
    })
    .commit();
  console.log("Patched roadmapPage:", roadmapResult._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
