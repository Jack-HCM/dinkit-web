import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern using dinkitgolf.com and the Dink'it Golf app.",
  alternates: {
    canonical: "/terms",
  },
};

const linkClass =
  "text-[#347e55] underline underline-offset-2 hover:opacity-80";

export default async function TermsPage() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center">
        <AboutSection
          mobileHeading={footer.mobileHeading}
          desktopHeading={footer.desktopHeading}
          subtext={footer.subtext}
          disclaimer={footer.disclaimer}
          copyright={footer.copyright}
        >
          <LegalPageShell
            badge="Legal"
            heading="Terms of Service"
            intro={`Effective date: 8 September 2026. Please read these Terms of Service ("Terms") carefully before using dinkitgolf.com or the Dink'it Golf app (together, the "Service"). By using either, you agree to be bound by these Terms.`}
          >
            <LegalSection title="1. Who we are">
              <p>
                Dink&rsquo;it Golf is owned, developed, and operated by{" "}
                <strong className="text-black">Hive Creative Media Ltd</strong>
                , a private limited company registered in England and Wales
                (Company No. 14699478), trading as{" "}
                <strong className="text-black">Hive Creator Studio</strong>{" "}
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). All legal notices,
                billing statements, contractual obligations, and
                intellectual property rights associated with Dink&rsquo;it
                Golf reside solely with Hive Creative Media Ltd.
              </p>
            </LegalSection>

            <LegalSection title="2. Scope of these Terms">
              <p>
                These Terms cover two things run by the same company:{" "}
                <strong className="text-black">dinkitgolf.com</strong>, the
                marketing website you&rsquo;re on now, and{" "}
                <strong className="text-black">the Dink&rsquo;it Golf app</strong>,
                the golf tracking product it promotes. Section 3 covers using
                the website; section 4 covers using the app. By using either,
                you also agree to our{" "}
                <a href="/privacy" className={linkClass}>
                  Privacy Policy
                </a>
                . If you don&rsquo;t agree, please don&rsquo;t use the
                Service.
              </p>
            </LegalSection>

            <LegalSection title="3. Using this website">
              <p>
                dinkitgolf.com is a marketing site: it describes the
                Dink&rsquo;it Golf app, lets you join the launch waitlist,
                and lets you contact us or submit feature requests. No
                account or payment is required to use it. You agree not to
                misuse the site — including scraping content, attempting to
                disrupt the service, or submitting false or abusive
                information through its forms.
              </p>
              <p>
                Everything on the site — logos, copy, design, and code — is
                the property of Hive Creative Media Ltd unless otherwise
                credited. The app is currently in development; nothing on
                this site is a guarantee of a specific launch date or
                feature set, and both may change before release.
              </p>
            </LegalSection>

            <LegalSection title="4. Using the Dink'it Golf app">
              <p>
                The rest of these Terms apply once you create an account and
                use the app itself.
              </p>
            </LegalSection>

            <LegalSection title="4.1 The service">
              <p>
                Dink&rsquo;it Golf provides digital golf tracking: course
                search, GPS shot logging, round and score history, handicap
                estimation, performance analytics, multiplayer rounds, and
                related mapping features. The app is provided solely for
                personal, non-commercial, recreational purposes.
              </p>
            </LegalSection>

            <LegalSection title="4.2 Your account">
              <p>
                You&rsquo;re responsible for keeping your login details
                secure and for activity under your account. Provide accurate
                information when signing up, and tell us straight away if
                you think your account has been compromised. We may suspend
                or revoke access where these Terms are breached.
              </p>
            </LegalSection>

            <LegalSection title="4.3 Subscriptions, billing and refunds">
              <p>
                Premium features are offered on a recurring subscription,
                billed monthly or annually at the price shown in the app at
                the point of purchase, processed securely by Stripe. Where a
                free trial is offered, you won&rsquo;t be charged until it
                ends. Charges appear on your bank statement as{" "}
                <strong className="text-black">DINKIT GOLF</strong>.
              </p>
              <p>
                Subscriptions renew automatically unless cancelled before
                the end of the current billing period. You can cancel any
                time from Account &rarr; Manage subscription; you keep
                Premium access until the period you&rsquo;ve paid for ends.
                Purchases are otherwise non-refundable except where
                mandatory UK consumer law (including the Consumer Contracts
                Regulations) requires it.
              </p>
            </LegalSection>

            <LegalSection title="4.4 Acceptable use">
              <p>Within the app, you agree not to:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Use it unlawfully, or to harass or harm other users</li>
                <li>Access another user&rsquo;s account or bypass access controls</li>
                <li>
                  Reverse engineer, decompile, or extract source code, or
                  use automated tools or scrapers to harvest course data or
                  content
                </li>
                <li>Upload false, abusive, or infringing content, or submit false scores with intent to mislead</li>
                <li>Resell or commercially exploit the app or its data</li>
                <li>Attempt to disrupt the service</li>
              </ul>
              <p>We may suspend or terminate accounts that breach this section.</p>
            </LegalSection>

            <LegalSection title="4.5 On-course safety — assumption of risk">
              <p>
                <strong className="text-black">
                  Golf carries inherent risks of physical injury and property
                  damage
                </strong>{" "}
                — erratic shots, cart collisions, uneven ground, severe
                weather. You agree that using the app while on a golf course
                is entirely at your own risk. Prioritise safety, follow the
                course&rsquo;s safety rules, and don&rsquo;t operate your
                device while taking shots, driving a cart, or in any
                situation where it could distract you from hazards. The app
                is a scoring and tracking aid, not a safety device.
              </p>
            </LegalSection>

            <LegalSection title="4.6 GPS, course data and accuracy">
              <p>
                GPS positions, yardages, course layouts, maps, statistics,
                and handicap indexes generated by the app are{" "}
                <strong className="text-black">estimates only</strong>.
                Device GPS can be off by several metres, and course data
                comes from third-party sources that may be incomplete or out
                of date. We make no representation as to geographic accuracy
                or official regulatory validity — the handicap index is not
                a certified USGA or R&amp;A handicap.
              </p>
            </LegalSection>

            <LegalSection title="4.7 Third-party services">
              <p>
                The app is built on services operated by third parties, each
                governed by its own terms, and we&rsquo;re not responsible
                for their availability: Stripe (payments), Google (optional
                sign-in and location search), Esri/ArcGIS (satellite
                imagery), OpenStreetMap contributors, golfapi.uk,
                postcodes.io, and GeoNames (course and place data),
                Anthropic (AI coaching summaries), and Vercel and Neon
                (hosting, storage, and our database). How these handle
                personal data is covered in our{" "}
                <a href="/privacy" className={linkClass}>
                  Privacy Policy
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="4.8 Not professional coaching">
              <p>
                Statistics, comparisons, and AI-generated coaching feedback
                are for informational and entertainment purposes only. They
                are not a substitute for advice from a qualified golf coach,
                and we make no guarantee they&rsquo;ll improve your game.
              </p>
            </LegalSection>

            <LegalSection title="4.9 Your content">
              <p>
                You keep ownership of the scores, shots, and photos you add.
                You grant us a licence to store and display that content to
                you — and, where you connect with friends or join
                multiplayer games, to those users — solely to operate the
                app. You&rsquo;re responsible for having the right to upload
                anything you add, such as a profile photo.
              </p>
            </LegalSection>

            <LegalSection title="4.10 Intellectual property">
              <p>
                All rights in the app — logos, software, UI design,
                trademarks (including &ldquo;Dink&rsquo;it Golf&rdquo; and
                &ldquo;Hive Creator Studio&rdquo;), course graphics, and
                content — are the exclusive property of Hive Creative Media
                Ltd. Unauthorised reproduction, modification, or
                distribution is prohibited.
              </p>
            </LegalSection>

            <LegalSection title="4.11 Termination">
              <p>
                You can stop using the app and ask us to delete your account
                at any time from Account settings or by emailing{" "}
                <a href="mailto:hello@dinkitgolf.com" className={linkClass}>
                  hello@dinkitgolf.com
                </a>
                . We may suspend or terminate access for breach of these
                Terms, or discontinue the service with reasonable notice.
              </p>
            </LegalSection>

            <LegalSection title="4.12 Disclaimer of warranties">
              <p>
                The app is provided on an{" "}
                <strong className="text-black">&ldquo;as is&rdquo;</strong> and{" "}
                <strong className="text-black">&ldquo;as available&rdquo;</strong>{" "}
                basis without warranties of any kind, express or implied,
                including implied warranties of merchantability, fitness for
                a particular purpose, non-infringement, or uninterrupted
                availability.
              </p>
            </LegalSection>

            <LegalSection title="4.13 Limitation of liability">
              <p>To the maximum extent permitted by the law of England and Wales:</p>
              <p>
                <strong className="text-black">No indirect losses.</strong>{" "}
                Neither Hive Creative Media Ltd nor its directors, officers,
                employees, affiliates, or trading brands (including Hive
                Creator Studio) shall be liable for any indirect, incidental,
                special, consequential, punitive, or exemplary damages —
                including loss of profits, data loss, equipment damage, or
                business interruption — arising from your use of, or
                inability to use, the Service.
              </p>
              <p>
                <strong className="text-black">Liability cap.</strong>{" "}
                Our total cumulative liability for all claims arising out of or
                relating to the Service or these Terms shall not exceed the
                greater of (i) the amount you paid us for the app in the
                twelve months before the claim, or (ii) &pound;50.
              </p>
              <p className="text-[14px]">
                Nothing in these Terms excludes or limits liability for
                death or personal injury caused by our negligence, for
                fraud, or for any statutory rights that cannot lawfully be
                excluded under UK law.
              </p>
            </LegalSection>

            <LegalSection title="4.14 Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Hive
                Creative Media Ltd, its officers, directors, employees, and
                agents against claims, damages, losses, liabilities, costs,
                or expenses (including reasonable legal fees) arising out of
                your breach of these Terms, misuse of the Service, or
                violation of any third-party rights.
              </p>
            </LegalSection>

            <LegalSection title="5. Changes to these Terms">
              <p>
                We may update these Terms as the website and app evolve.
                We&rsquo;ll update the effective date above and make a
                reasonable effort to notify active users of material changes
                before they take effect.
              </p>
            </LegalSection>

            <LegalSection title="6. Governing law and jurisdiction">
              <p>
                These Terms are governed by the laws of England and Wales,
                and the courts of England and Wales have exclusive
                jurisdiction over any dispute arising out of or in
                connection with these Terms or the Service.
              </p>
            </LegalSection>

            <LegalSection title="7. Contact">
              <p>
                Support and account queries:{" "}
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
