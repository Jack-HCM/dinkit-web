import { client } from "./client";
import { aboutPageQuery } from "./queries";
import type { AboutPageData } from "./types";

export async function getAboutPage(): Promise<AboutPageData> {
  return client.fetch<AboutPageData>(aboutPageQuery, {}, {
    next: { revalidate: 5 },
  });
}
