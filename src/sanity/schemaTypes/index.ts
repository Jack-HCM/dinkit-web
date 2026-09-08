import type { SchemaTypeDefinition } from "sanity";

import { landingPage } from "./landingPage";
import { headingWithHighlight } from "./headingWithHighlight";
import { heroSlide } from "./heroSlide";
import { featureSlide } from "./featureSlide";
import { plan } from "./plan";
import { planFeature } from "./planFeature";
import { featuresPage } from "./featuresPage";
import { featureItem } from "./featureItem";
import { roadmapPage } from "./roadmapPage";
import { roadmapRow } from "./roadmapRow";
import { roadmapFeature } from "./roadmapFeature";
import { aboutPage } from "./aboutPage";
import { aboutStep } from "./aboutStep";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    landingPage,
    headingWithHighlight,
    heroSlide,
    featureSlide,
    plan,
    planFeature,
    featuresPage,
    featureItem,
    roadmapPage,
    roadmapRow,
    roadmapFeature,
    aboutPage,
    aboutStep,
  ],
};
