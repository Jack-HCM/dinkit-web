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
  const [swingAnalysisImage, smartwatchImage] = await Promise.all([
    uploadImage("roadmap-swing-analysis.png"),
    uploadImage("roadmap-smartwatch.png"),
  ]);

  const doc = {
    _id: "roadmapPage",
    _type: "roadmapPage",
    hero: {
      heading: "Our Development Roadmap",
      subtext:
        "A look at what we're building next, from features already in progress to ideas we're still exploring. Got a request? Let us know below.",
    },
    rows: [
      {
        _key: "swing-analysis",
        layout: "imageLeft",
        image: swingAnalysisImage,
        features: [
          {
            _key: "swing-analysis",
            title: "Swing Analysis",
            description:
              "Analyse your swing using AI and your phone camera to get feedback to make adjustments",
            status: "futureConsideration",
          },
        ],
      },
      {
        _key: "beginner-social",
        layout: "twoColumn",
        features: [
          {
            _key: "beginner-mode",
            title: "Beginner Mode",
            description:
              "New to golf? Beginner mode explains rules and suggests courses and clubs to suit your experience",
            status: "planned",
          },
          {
            _key: "social-feed",
            title: "Social Feed",
            description:
              "Share your game highlights to a social feed with images, comments, scorecards or shot logs",
            status: "planning",
          },
        ],
      },
      {
        _key: "smartwatch",
        layout: "imageRight",
        image: smartwatchImage,
        features: [
          {
            _key: "smartwatch-integration",
            title: "Smart watch integration",
            description:
              "In-game connectivity with your smart watch for easy shot logging, club selection and GPS positioning.",
            status: "futureConsideration",
          },
        ],
      },
      {
        _key: "export-swing",
        layout: "twoColumn",
        features: [
          {
            _key: "export-data",
            title: "Export Data",
            description:
              "Export your rounds and stats whenever you like, so your data is always yours. No lock-in.",
            status: "futureConsideration",
          },
          {
            _key: "swing-analysis-2",
            title: "Swing Analysis",
            description:
              "Analyse your swing using AI and your phone camera to get feedback to make adjustments",
            status: "futureConsideration",
          },
        ],
      },
    ],
  };

  const result = await client.createOrReplace(doc);
  console.log("Seeded roadmapPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
