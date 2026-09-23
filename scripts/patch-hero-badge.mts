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

const newBadge = "BETA TESTING LIVE";

async function main() {
  const result = await client
    .patch("landingPage")
    .set({ "hero.badge": newBadge })
    .commit();
  console.log("Patched landingPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
