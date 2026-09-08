import { client } from "./client";
import { featuresPageQuery } from "./queries";
import type { FeaturesPageData } from "./types";

export async function getFeaturesPage(): Promise<FeaturesPageData> {
  return client.fetch<FeaturesPageData>(featuresPageQuery, {}, {
    next: { revalidate: 5 },
  });
}
