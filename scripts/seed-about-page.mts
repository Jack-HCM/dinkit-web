import { config } from "dotenv";
import { createClient } from "next-sanity";
import { createReadStream } from "node:fs";
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

const publicImages = path.join(process.cwd(), "public", "images");

async function uploadImage(filename: string) {
  const asset = await client.assets.upload(
    "image",
    createReadStream(path.join(publicImages, filename)),
    { filename }
  );
  return { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
}

async function main() {
  const storyImage = await uploadImage("about-founder-photo.png");

  const doc = {
    _id: "aboutPage",
    _type: "aboutPage",
    hero: {
      badge: "About Us",
      heading: {
        text: "How Dink'It Golf gets built",
        highlight: "Dink'It Golf",
      },
      subtext:
        "From a rough idea to something you'll actually trust on the course: here's our process, and the story behind why we started.",
    },
    steps: [
      {
        _key: "designed-and-scoped",
        title: "Designed and scoped by humans",
        body: "Every feature starts with a real problem from a real round of golf. We scope it ourselves first, working out what a golfer actually needs, what data has to be accurate, and what can wait, before a single line of code gets written.",
      },
      {
        _key: "built-with-claude",
        title: "Built with Claude",
        body: "We build fast by pairing with Claude, Anthropic's AI. It writes and ships real production code, including the app, the CMS, and the tracking and stats engine, under our direction, so a small team can move at the pace of a much bigger one without cutting corners.",
      },
      {
        _key: "audited-and-refined",
        title: "Audited and refined by Claude (Fable) + Humans",
        body: "Nothing ships on the first pass. Every feature gets a second, independent review: Claude's Fable model checks the code and copy for bugs, edge cases and rough edges, then we go through it ourselves before it goes anywhere near the app.",
      },
      {
        _key: "tested-by-golfers",
        title: "Tested by real golfers.",
        body: "Before an update reaches you, we take it out onto the course ourselves and hand it to a small group of golfers who tell us straight when something doesn't work. Real rounds, real feedback, real fixes.",
      },
    ],
    story: {
      eyebrow: "Our Story",
      heading: "Why we built Dink'it Golf",
      image: storyImage,
      body: `My grandad's golf clubs sat in the garage for years after he passed. Then, at 32, I finally took them out for a round. I was hooked instantly. Golf became my way to switch off, get outside, and slow down.

That love for the game collided with my day job at Hive Creative Media, and Dink'it Golf was born: an app to help golfers like me find and rank nearby courses, so we could work our way up instead of getting thrown in the deep end.

It grew from there. Shot tracking and performance stats came next, so my friends and I could actually see ourselves improving, round after round.

I think I finally understand why my grandad loved this game so much.`,
    },
  };

  const result = await client.createOrReplace(doc);
  console.log("Seeded aboutPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
