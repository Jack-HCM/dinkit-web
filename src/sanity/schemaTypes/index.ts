import type { SchemaTypeDefinition } from "sanity";

import { landingPage } from "./landingPage";
import { headingWithHighlight } from "./headingWithHighlight";
import { heroSlide } from "./heroSlide";
import { featureSlide } from "./featureSlide";
import { plan } from "./plan";
import { planFeature } from "./planFeature";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, headingWithHighlight, heroSlide, featureSlide, plan, planFeature],
};
