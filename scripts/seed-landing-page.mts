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
  const [
    heroTracking,
    heroStats,
    heroScorecards,
    heroCoaching,
    phoneFriends,
    phoneCourses,
    phoneStats,
    phoneTracking,
  ] = await Promise.all([
    uploadImage("hero-card-tracking.png"),
    uploadImage("hero-card-stats.png"),
    uploadImage("hero-card-scorecards.png"),
    uploadImage("hero-card-coaching.png"),
    uploadImage("feature-phone-friends.png"),
    uploadImage("feature-phone-courses.png"),
    uploadImage("feature-phone-stats.png"),
    uploadImage("feature-phone-tracking.png"),
  ]);

  const doc = {
    _id: "landingPage",
    _type: "landingPage",
    hero: {
      badge: "COMING SOON",
      heading: {
        text: "Track, Log, and Master Your Game from Your Phone.",
        highlight: "Master Your Game",
      },
      subtext:
        "Join the waitlist. The first 50 people who sign up for beta testing will be eligible for premium access for life*",
    },
    heroCarousel: {
      slides: [
        {
          _key: "gps-tracking",
          pill: "GPS Tracking",
          heading: "GPS tracking. Zero hardware.",
          body: "Track your shots and log your rounds in detail. No expensive attachments needed",
          image: heroTracking,
        },
        {
          _key: "performance",
          pill: "Performance",
          heading: "Track stats like a pro.",
          body: "We simplify advanced performance data. See your driving, approach, and putting broken down cleanly. Spot exactly where to improve.",
          image: heroStats,
        },
        {
          _key: "shot-patterns",
          pill: "Shot Patterns",
          heading: "See your true patterns.",
          body: "Stop guessing your natural miss. We map your historical shots automatically. Make smarter aiming decisions on every box.",
          image: heroScorecards,
        },
        {
          _key: "ai-coaching",
          pill: "AI Coaching",
          heading: "Coaching and Insights",
          body: "Our AI reads your raw numbers for you. Get straightforward summaries after your rounds. Focus your practice where it matters.",
          image: heroCoaching,
        },
      ],
    },
    featureCarousel: {
      sectionHeading: { text: "Golf Tracking, Simplified.", highlight: "Simplified." },
      slides: [
        {
          _key: "tracking",
          pill: "Free Plan",
          heading: "Easy GPS tracking, straight from your phone",
          body: "Stand by your ball and tap. Our app uses your phone's GPS to log every shot. No expensive hardware attachments required.",
          phoneImage: phoneTracking,
        },
        {
          _key: "friends",
          pill: "Free Plan",
          heading: "Play and compare with friends.",
          body: "Connect with your regular group easily. Compare your stats in one central place. Keep the friendly competition going between rounds.",
          phoneImage: phoneFriends,
        },
        {
          _key: "courses",
          pill: "No Plan Needed",
          heading: "Find your next course.",
          body: "Discover highly rated courses right near you. Get accurate local recommendations instantly. Explore new fairways and plan your next weekend round.",
          phoneImage: phoneCourses,
        },
        {
          _key: "stats",
          pill: "Premium Plan",
          heading: "Unlock your full data.",
          body: "Upgrade to access deeper performance metrics. Review detailed tendencies to lower your score. Get serious tools to fast-track your improvement.",
          phoneImage: phoneStats,
        },
      ],
    },
    pricing: {
      eyebrow: "Free tracking. Premium analytics.",
      heading: "Start free. Expand your insights when you’re ready.",
      subtext:
        "Start for free today, and explore premium when you want the additional analytics",
      ctaLabel: "Join waitlist",
      freePlan: {
        name: "Free",
        description: "Everything you need for casual tracking and logging rounds.",
        priceMain: "£0",
        featuresIntro: "All the tracking you need for free:",
        features: [
          {
            _key: "gps",
            title: "Phone GPS Tracking:",
            desc: "Real-time distances to greens and hazards on your phone.",
          },
          {
            _key: "shot-log",
            title: "Instant Shot Logging:",
            desc: "Stand by your ball and log shots instantly.",
          },
          {
            _key: "core-metrics",
            title: "Core Metrics:",
            desc: "Track your strokes, putts, and score vs par.",
          },
          {
            _key: "history",
            title: "Lifetime History:",
            desc: "View your total games, historical averages, and favourite courses.",
          },
        ],
      },
      premiumPlan: {
        name: "Premium",
        description: "Golfers looking to analyze data and lower their handicap.",
        priceMain: "£5",
        priceDecimal: ".99",
        annualBadgeMain: "£49",
        annualBadgeDecimal: ".99",
        annualBadgeLabel: "when billed annually",
        featuresIntro: "Everything in Free, plus:",
        features: [
          {
            _key: "strokes-gained",
            title: "Strokes Gained Analytics:",
            desc: "Tour-level breakdown of your driving, approach, short game, and putting.",
          },
          {
            _key: "dispersion",
            title: "Shot Dispersion Mapping:",
            desc: "See your true tendencies (short/long and left/right bias).",
          },
          {
            _key: "course-trends",
            title: "Course-Specific Trends:",
            desc: "Compare your history and progress on the exact same course over time.",
          },
          {
            _key: "ai-summaries",
            title: "AI Performance Summaries:",
            desc: "Receive 5 personalized, straightforward coaching reports every month.",
          },
        ],
      },
    },
    footer: {
      mobileHeading: "Track, Log, and Master Your Game from Your Phone.",
      desktopHeading: { text: "Golf Tracking, Simplified.", highlight: "Simplified." },
      subtext:
        "Join the waitlist. The first 50 people who sign up for beta testing will be eligible for premium access for life*",
      disclaimer:
        "*Taking part in beta testing will mean giving sufficient feedback based on your experience with using the app in a live setting. This will qualify for the ‘free for life’ premium access",
      copyright: "© Dink’it Golf 2026 | All rights reserved",
    },
  };

  const result = await client.createOrReplace(doc);
  console.log("Seeded landingPage document:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
