import createImageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImage } from "sanity";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
