import { client } from "./client";
import { landingPageQuery } from "./queries";
import type { LandingPageData } from "./types";

export async function getLandingPage(): Promise<LandingPageData> {
  return client.fetch<LandingPageData>(landingPageQuery, {}, {
    next: { revalidate: 5 },
  });
}
