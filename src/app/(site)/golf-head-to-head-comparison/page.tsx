import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Head-to-Head Comparison | Dink'It",
  description:
    "Add a friend, unlock it with Premium, and compare 5 real stats side by side: best score, longest drive, longest putt, handicap and strokes gained.",
  alternates: {
    canonical: "/golf-head-to-head-comparison",
  },
};

const HOW_IT_WORKS = [
  {
    title: "Add a friend to compare against",
    body: "Head-to-Head only works between accepted friends. Send a request from Find Friends, and once they accept, they show up with their own live handicap.",
    image: "/images/howto-h2h-0-friends.jpg",
    alt: "Dink'It Friends screen showing three accepted friends with handicaps and last-played dates, including Jamie Carter at a Handicap of 11.3",
  },
  {
    title: "Unlock it with Premium",
    body: "Head-to-Head is a Premium feature on the viewing account only, your friend doesn't need Premium for you to compare against them.",
    image: "/images/howto-h2h-2-premium-gate.jpg",
    alt: "Dink'It Upgrade to Premium modal listing Strokes Gained Analytics, Shot Dispersion Mapping, Course-Specific Trends and AI Performance Summaries, with monthly and annual pricing",
  },
  {
    title: "See exactly where you compare",
    body: "Five numbers, side by side, pulled from both of your tracked rounds: Best Score, Longest Drive, Longest Putt, Handicap, and Strokes Gained.",
    image: "/images/howto-h2h-1-comparison.jpg",
    alt: "Dink'It head-to-head comparison showing You vs Jamie across Best Score, Longest Drive, Longest Putt, Handicap and Strokes Gained",
  },
];

const FAQS = [
  {
    q: "Is Head-to-Head free?",
    a: "No. Head-to-Head is a Premium feature for the account viewing it. The friend you're comparing against doesn't need Premium.",
  },
  {
    q: "Do we both need to be friends in the app?",
    a: "Yes. Head-to-Head only works with a friend who has accepted your friend request in Dink'It.",
  },
  {
    q: "What stats does it compare?",
    a: "Five: Best Score, Longest Drive, Longest Putt, Handicap, and Strokes Gained, shown side by side across your whole history, not a single round.",
  },
  {
    q: "Is the Strokes Gained number broken down by category?",
    a: "No. Head-to-Head shows one overall Strokes Gained figure for each of you. For a full category breakdown, use Strokes Gained on your own rounds.",
  },
  {
    q: "Can I compare just one round instead of all-time stats?",
    a: "Head-to-Head is all-time. To compare a single shared round hole by hole, use Compare Rounds from that scorecard instead.",
  },
];

export default async function GolfHeadToHeadComparison() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Head-to-Head
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              See exactly how you <span className="text-[#87ffad]">compare</span> to your friends
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              Add a friend, unlock it with Premium, and see five real numbers side by side: best
              score, longest drive, longest putt, handicap and strokes gained, pulled straight
              from both of your tracked rounds.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              Compare With a Friend
            </a>
          </div>

          <div className="relative aspect-[838/768] w-full overflow-hidden rounded-[20px] md:w-[46%]">
            <Image
              src="/images/hero-golf-head-to-head-comparison.jpg"
              alt="Two golfers beside a phone showing a Head to Head comparison of Best Score, Longest Drive, Longest Putt, Handicap and Strokes Gained"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            How Dink&apos;It builds Head-to-Head
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full w-full flex-col gap-5 overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.04]"
              >
                <div className="relative flex w-full justify-center pt-8">
                  <span className="absolute left-4 top-4 z-10 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-[#87ffad]/60 bg-[#212121] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative aspect-[390/844] w-[62%] max-w-[230px] overflow-hidden rounded-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="230px"
                      className="object-contain object-top"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-8 pb-8">
                  <h3 className="text-[20px] leading-[1.15] font-medium tracking-[-0.4px] text-white [font-family:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-white/80 [font-family:var(--font-42dot-sans)]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-full max-w-[920px] flex-col items-center gap-6 px-6 text-center">
          <h2 className="max-w-[640px] text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Built on your own stats
          </h2>
          <p className="max-w-[640px] text-[16px] leading-[1.5] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Head-to-Head pulls from the same rated rounds and tracked shots behind your{" "}
            <a href="/golf-handicap-tracker" className="text-[#87ffad] underline underline-offset-2">
              Handicap Index
            </a>{" "}
            and{" "}
            <a href="/strokes-gained" className="text-[#87ffad] underline underline-offset-2">
              Strokes Gained
            </a>
            , so the numbers you see when comparing against a friend always match your own stats
            pages.
          </p>
          <a
            href="/golf-stats-app"
            className="text-[15px] font-medium text-[#87ffad] underline underline-offset-2 [font-family:var(--font-space-grotesk)]"
          >
            See the free Golf Stats App →
          </a>
        </section>

        <section className="flex w-full max-w-[820px] flex-col gap-8 px-6 pb-4">
          <h2 className="text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Questions about Head-to-Head
          </h2>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="flex flex-col gap-2 rounded-[16px] border border-white/15 bg-white/[0.04] p-6"
              >
                <h3 className="text-[16px] font-medium text-white [font-family:var(--font-space-grotesk)]">
                  {faq.q}
                </h3>
                <p className="text-[15px] leading-[1.5] text-white/75 [font-family:var(--font-42dot-sans)]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AboutSection
          mobileHeading={footer.mobileHeading}
          desktopHeading={footer.desktopHeading}
          subtext={footer.subtext}
          disclaimer={footer.disclaimer}
          copyright={footer.copyright}
        />
      </main>
    </div>
  );
}
