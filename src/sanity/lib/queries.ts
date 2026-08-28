import { groq } from "next-sanity";

export const landingPageQuery = groq`
  *[_type == "landingPage"][0]{
    hero{
      badge,
      heading{text, highlight},
      subtext
    },
    heroCarousel{
      slides[]{pill, heading, body, "image": image.asset->url}
    },
    featureCarousel{
      sectionHeading{text, highlight},
      slides[]{pill, heading, body, "phoneImage": phoneImage.asset->url}
    },
    pricing{
      eyebrow,
      heading,
      subtext,
      ctaLabel,
      freePlan{
        name, description, priceMain, priceDecimal,
        annualBadgeMain, annualBadgeDecimal, annualBadgeLabel,
        featuresIntro, features[]{title, desc}
      },
      premiumPlan{
        name, description, priceMain, priceDecimal,
        annualBadgeMain, annualBadgeDecimal, annualBadgeLabel,
        featuresIntro, features[]{title, desc}
      }
    },
    footer{
      mobileHeading,
      desktopHeading{text, highlight},
      subtext,
      disclaimer,
      copyright
    }
  }
`;

export const featuresPageQuery = groq`
  *[_type == "featuresPage"][0]{
    hero{
      badge,
      heading{text, highlight},
      subtext
    },
    freeSection{
      heading,
      subtext,
      features[]{title, desc, note, tag}
    },
    premiumSection{
      heading,
      subtext,
      features[]{title, desc, note, tag}
    }
  }
`;
