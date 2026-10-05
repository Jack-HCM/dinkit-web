import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { UkCoverageMap } from "@/components/uk-coverage-map";
import { getLandingPage } from "@/sanity/lib/landing-page";
import { getCourseCoverage } from "@/lib/course-coverage";

export const metadata: Metadata = {
  title: "UK Golf Course Coverage",
  description:
    "Browse the UK golf courses Dink'It already tracks, see our live coverage map, and add a course if yours isn't listed yet.",
  alternates: {
    canonical: "/courses",
  },
};

const STEPS = [
  {
    title: "Search for your course",
    body: "Look it up by name or postcode. Most UK courses are already in the database and ready to play.",
  },
  {
    title: "Can't find it? Add it",
    body: "Drop a placeholder for your course in seconds. You can start logging rounds on it straight away — those rounds just won't count towards career stats until it's published.",
  },
  {
    title: "Play it in, and we'll review it",
    body: "As you and others play, Dink'It records tee and green positions hole by hole. Once there's enough data, our team reviews the course and publishes it for everyone.",
  },
];

export default async function CoursesPage() {
  const [{ footer }, coverage] = await Promise.all([getLandingPage(), getCourseCoverage()]);

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full flex-col items-center px-6 pt-[130px] pb-0 text-center sm:pt-[150px] sm:pb-6">
          <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
            UK Coverage
          </span>

          <h1 className="mt-[18px] max-w-[720px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
            <span className="text-[#87ffad]">{coverage.totalCourses.toLocaleString()}</span> golf
            courses, mapped across the UK
          </h1>

          <p className="mt-[21px] max-w-[560px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Every course below is searchable in Dink&apos;It by name or postcode — and the number
            keeps growing as we ingest new data and players add courses of their own.
          </p>
        </div>

        <section className="flex w-full max-w-[1220px] flex-col items-center gap-8 px-6">
          <UkCoverageMap points={coverage.points} />
          <p className="text-[14px] text-white/60 [font-family:var(--font-42dot-sans)]">
            Each dot is a course Dink&apos;It tracks today.
          </p>
        </section>

        <section className="flex w-full max-w-[1220px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Don&apos;t see your course? Help us map it.
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full w-full flex-col gap-5 rounded-[20px] border border-white/15 bg-white/[0.04] p-8"
              >
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#87ffad]/40 text-[16px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-3">
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

          <a
            href="https://app.dinkitgolf.com/dashboard"
            className="shrink-0 rounded-[4px] bg-[#56c186] px-[16px] py-[12px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
          >
            Add Your Course
          </a>
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
