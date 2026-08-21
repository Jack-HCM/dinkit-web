import { WaitlistForm } from "@/components/waitlist-form";
import { HeroImageSection } from "@/components/hero-image-section";
import { FeatureCarouselSection } from "@/components/feature-carousel-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";
import { renderHeading } from "@/lib/heading";

export default async function Home() {
  const { hero, heroCarousel, featureCarousel, pricing, footer } =
    await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <main className="flex flex-1 flex-col items-center gap-10 pt-10 sm:gap-11 sm:pt-14">
        <div className="flex w-full flex-col items-center px-6 pb-0 text-center sm:pb-14">
          <div className="mb-[42px] h-[64px] w-[163px] sm:mb-12 sm:h-[70px] sm:w-[200px] md:h-[82px] md:w-[236px]">
            <img
              src="/images/dinkit-logo.svg"
              alt="Dink'it Golf"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-0 sm:gap-[22px]">
            {hero.badge && (
              <span className="hidden rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:inline-block sm:text-[16px]">
                {hero.badge}
              </span>
            )}

            <h1 className="max-w-[925px] text-[36px] leading-[48px] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:leading-[1.05] sm:tracking-[-0.9px] md:text-[66px] md:leading-[68px] md:tracking-[-1.32px]">
              {renderHeading(hero.heading, "text-[#87ffad]")}
            </h1>

            <p className="mt-[21px] max-w-[503px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:mt-0 sm:text-[18px] sm:leading-normal">
              {hero.subtext}
            </p>

            <div className="mt-[33px] w-full max-w-[503px] sm:mt-0">
              <WaitlistForm collapsible />
            </div>
          </div>
        </div>

        <HeroImageSection slides={heroCarousel.slides} />

        <FeatureCarouselSection
          sectionHeading={featureCarousel.sectionHeading}
          slides={featureCarousel.slides}
        />

        <PricingSection
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          subtext={pricing.subtext}
          ctaLabel={pricing.ctaLabel}
          freePlan={pricing.freePlan}
          premiumPlan={pricing.premiumPlan}
        />

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
