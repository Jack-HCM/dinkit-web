import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Dink'It Golf collects, uses, and protects personal data across dinkitgolf.com and the Dink'it Golf app.",
  alternates: {
    canonical: "/privacy",
  },
};

const linkClass =
  "text-[#347e55] underline underline-offset-2 hover:opacity-80";

export default async function PrivacyPage() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center">
        <div className="pt-[130px] sm:pt-[150px]" />

        <AboutSection
          mobileHeading={footer.mobileHeading}
          desktopHeading={footer.desktopHeading}
          subtext={footer.subtext}
          disclaimer={footer.disclaimer}
          copyright={footer.copyright}
        >
          <LegalPageShell
            badge="Legal"
            heading="Privacy Policy"
            intro="Effective date: 8 September 2026. This policy explains what personal data we collect across dinkitgolf.com and the Dink'it Golf app, why, who it's shared with, and the rights you have over it."
          >
            <LegalSection title="1. Who we are">
              <p>
                Dink&rsquo;it Golf is operated by{" "}
                <strong className="text-black">Hive Creative Media Ltd</strong>
                , a private limited company registered in England and Wales
                (Company No. 14699478), trading as{" "}
                <strong className="text-black">Hive Creator Studio</strong>{" "}
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). Hive Creative Media Ltd is the data
                controller for the personal data described in this policy.
                Contact us about anything here at{" "}
                <a href="mailto:hello@dinkitgolf.com" className={linkClass}>
                  hello@dinkitgolf.com
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="2. Scope of this policy">
              <p>
                This single policy covers two things run by the same company:{" "}
                <strong className="text-black">dinkitgolf.com</strong>, the
                marketing website you&rsquo;re on now, and{" "}
                <strong className="text-black">the Dink&rsquo;it Golf app</strong>,
                the golf tracking product it promotes. The two collect
                different data, so they&rsquo;re described separately below —
                section 3 covers the website, section 4 covers the app.
              </p>
            </LegalSection>

            <LegalSection title="3. This website (dinkitgolf.com)">
              <p>
                <strong className="text-black">What we collect.</strong>{" "}
                If you join the waitlist: your name, email address, and whether
                you&rsquo;d like to beta test. If you use the contact or
                feature request forms: your name, email address, and message.
                If you accept the cookie banner: Google Analytics usage data
                — see our{" "}
                <a href="/cookie-policy" className={linkClass}>
                  Cookie Policy
                </a>{" "}
                for details.
              </p>
              <p>
                <strong className="text-black">Why.</strong>{" "}
                To add you to the launch waitlist and let you know when the app is ready,
                to respond to your enquiry or feature request, and — only
                with your consent — to understand how visitors use the site.
              </p>
              <p>
                <strong className="text-black">Who we share it with.</strong>{" "}
                Resend, to deliver confirmation and notification emails;
                Vercel and Neon, who host the site and store submissions in
                our database; Google Analytics, only if you accept cookies.
                We don&rsquo;t sell this data or use it for advertising.
              </p>
              <p>
                <strong className="text-black">Who can see it.</strong>{" "}
                Only us. Waitlist, contact, and feature request submissions are
                visible solely through a password-protected admin dashboard —
                never to other visitors.
              </p>
              <p>
                <strong className="text-black">How long we keep it.</strong>{" "}
                Waitlist entries are kept until the app launches publicly or
                you ask us to delete yours; contact and feature request
                submissions are kept until your enquiry is resolved. Email us
                at any time to have your details removed sooner.
              </p>
            </LegalSection>

            <LegalSection title="4. The Dink'it Golf app">
              <p>
                Once you create an account, this is the data the app itself
                collects and processes:
              </p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>
                  <strong className="text-black">Account data</strong>{" "}
                  — email address, username, name, a securely hashed password
                  (if you sign up with email/password), an optional profile
                  photo, and optional details like years playing and home
                  location.
                </li>
                <li>
                  <strong className="text-black">Google account data</strong>{" "}
                  — if you sign in with Google, we receive your name, email
                  address, and profile photo from Google. We never see your
                  Google password.
                </li>
                <li>
                  <strong className="text-black">Location data</strong>{" "}
                  — the precise GPS position of each shot you log with the shot
                  tracker. This is captured only when you tap to log a shot,
                  never in the background, and only after your browser asks
                  for your permission.
                </li>
                <li>
                  <strong className="text-black">Golf activity data</strong>{" "}
                  — scorecards, scores, shots, clubs used, penalties, rounds,
                  favourite courses, and statistics derived from them
                  (handicap index, Strokes Gained, club distances).
                </li>
                <li>
                  <strong className="text-black">Social data</strong>{" "}
                  — friend requests and connections, game invites, and
                  multiplayer rounds you host or join.
                </li>
                <li>
                  <strong className="text-black">Subscription data</strong>{" "}
                  — if you subscribe to Premium, your Stripe customer reference
                  and subscription status. Your card details go directly to
                  Stripe; we never see or store them.
                </li>
                <li>
                  <strong className="text-black">Technical data</strong>{" "}
                  — an essential session cookie that keeps you signed in, and
                  standard hosting logs.
                </li>
              </ul>
              <p>
                <strong className="text-black">Why we process it.</strong>{" "}
                To provide the app (running your account, recording rounds,
                computing stats, multiplayer, and subscriptions); with your
                consent for GPS shot tracking, which you can decline or
                revoke any time; for legitimate interests such as security
                and fixing problems; and to meet legal obligations like
                retaining billing records. We don&rsquo;t sell your data, and
                there is no advertising or tracking of any kind in the app.
              </p>
              <p>
                <strong className="text-black">AI coaching.</strong>{" "}
                If you&rsquo;re a Premium subscriber and request an AI coaching
                analysis, the statistics of the round(s) you choose are sent
                to <strong className="text-black">Anthropic</strong>{" "}
                (our AI provider) to generate written feedback. This happens only
                when you actively request it — never automatically.
              </p>
              <p>
                <strong className="text-black">Who we share it with.</strong>{" "}
                Stripe (payments), Google (Google sign-in and location
                search fallback), Anthropic (AI coaching, as above), Vercel
                and Neon (hosting, storage, and our database), and Esri
                (ArcGIS), whose servers your browser loads satellite map
                imagery from directly. Course and hole data comes from
                golfapi.uk, OpenStreetMap, and GeoNames — your personal data
                is not sent to them.
              </p>
              <p>
                <strong className="text-black">What other users can see.</strong>{" "}
                Your username, display name, and profile photo are visible
                to other users in friend search and multiplayer games.
                Friends you accept can see your stats, rounds, and
                highlights. Players in a multiplayer round can see each
                other&rsquo;s scores and shot counts for that round. Your
                email address is never shown to other users.
              </p>
              <p>
                <strong className="text-black">Where your data lives.</strong>{" "}
                Our database is hosted in the United Kingdom. Some providers
                may process data outside the UK/EEA, including in the United
                States; where that happens we rely on approved transfer
                safeguards such as the UK International Data Transfer
                Agreement or Standard Contractual Clauses.
              </p>
              <p>
                <strong className="text-black">How long we keep it.</strong>{" "}
                Account and activity data is kept while your account is
                active. If you delete your account, everything that
                identifies you is removed immediately, any subscription is
                cancelled, and round and shot records are retained in
                anonymised form so aggregate statistics stay accurate.
                Billing records are kept where the law requires.
              </p>
            </LegalSection>

            <LegalSection title="5. Your rights">
              <p>Under UK GDPR, across both the website and the app, you have the right to:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Have your data deleted (&ldquo;right to be forgotten&rdquo;)</li>
                <li>Restrict or object to certain processing</li>
                <li>Receive a portable export of your data</li>
                <li>Withdraw consent (e.g. location permission or analytics cookies) at any time</li>
              </ul>
              <p>
                To exercise any of these, email{" "}
                <a href="mailto:hello@dinkitgolf.com" className={linkClass}>
                  hello@dinkitgolf.com
                </a>
                . You also have the right to complain to the UK Information
                Commissioner&rsquo;s Office (
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ico.org.uk
                </a>
                ) if you think we&rsquo;ve mishandled your data.
              </p>
            </LegalSection>

            <LegalSection title="6. Cookies">
              <p>
                The website uses essential and, only with your consent,
                analytics cookies. The app uses a single essential session
                cookie to keep you signed in. See our{" "}
                <a href="/cookie-policy" className={linkClass}>
                  Cookie Policy
                </a>{" "}
                for the full list.
              </p>
            </LegalSection>

            <LegalSection title="7. Children">
              <p>
                Dink&rsquo;it Golf is not directed at children and does not
                knowingly collect data from anyone under 16, on the website
                or in the app.
              </p>
            </LegalSection>

            <LegalSection title="8. Security">
              <p>
                Passwords are stored as one-way cryptographic hashes, never
                in plain text. All traffic is encrypted in transit (HTTPS),
                access to our database and hosting infrastructure is
                restricted, and sign-in attempts are rate-limited. No system
                is 100% secure, but we take steps appropriate to the data we
                hold and review them as the app grows.
              </p>
            </LegalSection>

            <LegalSection title="9. Changes to this policy">
              <p>
                We&rsquo;ll update this page as the website and app change,
                and update the effective date above when we do. For material
                changes affecting the app, we&rsquo;ll make a reasonable
                effort to notify active users directly.
              </p>
            </LegalSection>

            <LegalSection title="10. Contact">
              <p>
                Questions about this policy or your data:{" "}
                <a href="mailto:hello@dinkitgolf.com" className={linkClass}>
                  hello@dinkitgolf.com
                </a>
                <br />
                Legal notices:{" "}
                <a
                  href="mailto:legal@hivecreativemedia.co.uk"
                  className={linkClass}
                >
                  legal@hivecreativemedia.co.uk
                </a>
              </p>
            </LegalSection>
          </LegalPageShell>
        </AboutSection>
      </main>
    </div>
  );
}
