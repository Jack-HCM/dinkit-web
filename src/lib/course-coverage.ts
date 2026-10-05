const COVERAGE_API_URL =
  process.env.COURSE_COVERAGE_API_URL ?? "https://app.dinkitgolf.com/api/public/course-coverage";

export type CourseCoverage = {
  generatedAt: string;
  totalCourses: number;
  publishedUserCourses: number;
  pendingUserCourses: number;
  points: [number, number][];
};

const FALLBACK: CourseCoverage = {
  generatedAt: new Date(0).toISOString(),
  totalCourses: 0,
  publishedUserCourses: 0,
  pendingUserCourses: 0,
  points: [],
};

// Pulled live from the app on every revalidation rather than hardcoded —
// course count grows continuously as the ingest pipeline and user
// submissions add to it, so a static number would go stale immediately.
export async function getCourseCoverage(): Promise<CourseCoverage> {
  try {
    const res = await fetch(COVERAGE_API_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK;
    return (await res.json()) as CourseCoverage;
  } catch {
    return FALLBACK;
  }
}
