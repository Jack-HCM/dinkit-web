export type HeadingWithHighlight = {
  text: string;
  highlight?: string | null;
};

export type HeroSlide = {
  pill: string;
  heading: string;
  body: string;
  image: string;
};

export type FeatureSlide = {
  pill: string;
  heading: string;
  body: string;
  phoneImage: string;
};

export type PlanFeature = {
  title: string;
  desc: string;
};

export type Plan = {
  name: string;
  description: string;
  priceMain: string;
  priceDecimal?: string | null;
  annualBadgeMain?: string | null;
  annualBadgeDecimal?: string | null;
  annualBadgeLabel?: string | null;
  featuresIntro: string;
  features: PlanFeature[];
};

export type LandingPageData = {
  hero: {
    badge?: string | null;
    heading: HeadingWithHighlight;
    subtext: string;
  };
  heroCarousel: {
    slides: HeroSlide[];
  };
  featureCarousel: {
    sectionHeading: HeadingWithHighlight;
    slides: FeatureSlide[];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    subtext: string;
    ctaLabel: string;
    freePlan: Plan;
    premiumPlan: Plan;
  };
  footer: {
    mobileHeading: string;
    desktopHeading: HeadingWithHighlight;
    subtext: string;
    disclaimer: string;
    copyright: string;
  };
};
