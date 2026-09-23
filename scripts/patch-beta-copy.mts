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

const sharedSubtext =
  "Join beta testing today for GPS shot tracking, live round stats, and AI-powered coaching insights — straight from your phone, no extra hardware needed.";

async function main() {
  const result = await client
    .patch("landingPage")
    .set({
      "hero.subtext": sharedSubtext,
      "footer.subtext": sharedSubtext,
      "footer.disclaimer":
        "We're actively building — join beta testing today and help shape the app as it grows.",
      "pricing.ctaLabel": "Join Beta Testing",
    })
    .commit();
  console.log("Patched landingPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
