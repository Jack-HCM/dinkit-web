import type { Metadata } from "next";
import { db } from "@/lib/db";
import { adminLogout } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Waitlist Dashboard",
  robots: { index: false, follow: false },
};

const PREMIUM_COHORT_SIZE = 50;

type Signup = {
  id: string;
  name: string;
  email: string;
  wantsBetaTesting: boolean;
  createdAt: Date;
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function AdminDashboard() {
  const signups = await db.waitlistSignup.findMany({
    orderBy: { createdAt: "asc" },
  });

  const betaTesters = signups.filter((s) => s.wantsBetaTesting);
  const premiumCohort = betaTesters.slice(0, PREMIUM_COHORT_SIZE);
  const premiumIds = new Set(premiumCohort.map((s) => s.id));

  return (
    <div className="flex min-h-full flex-1 flex-col gap-10 bg-[#347e55] px-6 py-12 sm:px-12">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-medium text-white [font-family:var(--font-space-grotesk)] sm:text-[28px]">
          Waitlist Dashboard
        </h1>
        <form action={adminLogout}>
          <button
            type="submit"
            className="rounded-[8px] border border-white/30 px-4 py-2 text-[14px] text-white transition-opacity hover:opacity-80 [font-family:var(--font-space-grotesk)]"
          >
            Log out
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total signups" value={signups.length} />
        <StatCard label="Want beta testing" value={betaTesters.length} />
        <StatCard
          label={`Premium cohort (first ${PREMIUM_COHORT_SIZE})`}
          value={premiumCohort.length}
        />
      </div>

      <Section title={`Beta testers (${betaTesters.length})`}>
        <p className="text-[13px] text-[#707070] [font-family:var(--font-42dot-sans)]">
          Ordered by signup date. The first {PREMIUM_COHORT_SIZE} are marked for Premium
          access.
        </p>
        <SignupTable signups={betaTesters} premiumIds={premiumIds} showRank />
      </Section>

      <Section title={`All signups (${signups.length})`}>
        <SignupTable signups={signups} premiumIds={premiumIds} />
      </Section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-1 rounded-[24px] bg-white px-6 py-5">
      <span className="text-[14px] text-[#707070] [font-family:var(--font-42dot-sans)]">
        {label}
      </span>
      <span className="text-[32px] font-medium text-[#347e55] [font-family:var(--font-space-grotesk)]">
        {value}
      </span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[24px] bg-white p-6">
      <h2 className="text-[20px] font-medium text-[#347e55] [font-family:var(--font-space-grotesk)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SignupTable({
  signups,
  premiumIds,
  showRank,
}: {
  signups: Signup[];
  premiumIds: Set<string>;
  showRank?: boolean;
}) {
  if (signups.length === 0) {
    return (
      <p className="text-[14px] text-[#707070] [font-family:var(--font-42dot-sans)]">
        No signups yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-[14px] [font-family:var(--font-42dot-sans)]">
        <thead>
          <tr className="border-b border-[#dedede] text-[#707070]">
            {showRank && <th className="py-2 pr-4 font-medium">#</th>}
            <th className="py-2 pr-4 font-medium">Name</th>
            <th className="py-2 pr-4 font-medium">Email</th>
            <th className="py-2 pr-4 font-medium">Beta?</th>
            <th className="py-2 pr-4 font-medium">Premium access</th>
            <th className="py-2 pr-4 font-medium">Signed up</th>
          </tr>
        </thead>
        <tbody>
          {signups.map((s, i) => (
            <tr key={s.id} className="border-b border-[#f0f0f0] text-[#212121]">
              {showRank && <td className="py-2 pr-4">{i + 1}</td>}
              <td className="py-2 pr-4">{s.name}</td>
              <td className="py-2 pr-4">{s.email}</td>
              <td className="py-2 pr-4">{s.wantsBetaTesting ? "Yes" : "No"}</td>
              <td className="py-2 pr-4">
                {premiumIds.has(s.id) ? (
                  <span className="rounded-[24px] border border-[#347e55] px-[8px] py-[2px] text-[12px] font-bold text-[#347e55]">
                    Premium
                  </span>
                ) : (
                  "—"
                )}
              </td>
              <td className="py-2 pr-4 whitespace-nowrap">{formatDate(s.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
