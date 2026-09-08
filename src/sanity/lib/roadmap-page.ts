import { client } from "./client";
import { roadmapPageQuery } from "./queries";
import type { RoadmapPageData } from "./types";

export async function getRoadmapPage(): Promise<RoadmapPageData> {
  return client.fetch<RoadmapPageData>(roadmapPageQuery, {}, {
    next: { revalidate: 5 },
  });
}
