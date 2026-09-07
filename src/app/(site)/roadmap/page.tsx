import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { RoadmapGrid } from "@/components/roadmap-grid";
import { FeatureRequestSection } from "@/components/feature-request-section";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";
import { getRoadmapPage } from "@/sanity/lib/roadmap-page";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What we're building next for Dink'It — see what's in build, planned, and under consideration.",
  alternates: {
    canonical: "/roadmap",
  },
};

export default async function Roadmap() {
  const [{ footer }, roadmapPage] = await Promise.all([
    getLandingPage(),
    getRoadmapPage(),
  ]);
  const { hero, rows } = roadmapPage;

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-10 sm:gap-11">
        <div className="flex w-full flex-col items-center px-6 pt-[130px] pb-0 text-center sm:pt-[150px] sm:pb-14">
          <h1 className="max-w-[720px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
            {hero.heading}
          </h1>

          <p className="mt-[21px] max-w-[560px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            {hero.subtext}
          </p>

          <a
            href="#request-feature"
            className="mt-[24px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-[16px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)] sm:text-[18px]"
          >
            Request a feature
          </a>
        </div>

        <RoadmapGrid rows={rows} />

        <FeatureRequestSection />

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
