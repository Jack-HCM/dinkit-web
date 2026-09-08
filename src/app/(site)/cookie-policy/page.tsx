import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Dink'It uses cookies and similar technologies on dinkitgolf.com.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

const linkClass =
  "text-[#347e55] underline underline-offset-2 hover:opacity-80";

export default async function CookiePolicy() {
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
            heading="Cookie Policy"
            intro="Last updated: 8 September 2026. This policy explains how Dink'It uses cookies and similar technologies on dinkitgolf.com, and how you can control them."
          >
            <LegalSection title="What are cookies?">
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They&rsquo;re widely used to make sites
                work, remember your preferences, and understand how the site
                is used. We also use your browser&rsquo;s local storage in
                the same way for one purpose below.
              </p>
            </LegalSection>

            <LegalSection title="Cookies we use">
              <p>
                We only set analytics cookies if you accept them via the
                cookie banner. If you reject or dismiss the banner, only the
                strictly necessary entry below is stored.
              </p>

              <div className="mt-2 overflow-x-auto rounded-[12px] border border-[#eeeeee]">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[#eeeeee] bg-[#f8f8f8]">
                      <th className="px-4 py-3 font-medium text-black">Name</th>
                      <th className="px-4 py-3 font-medium text-black">Category</th>
                      <th className="px-4 py-3 font-medium text-black">Purpose</th>
                      <th className="px-4 py-3 font-medium text-black">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#f0f0f0]">
                      <td className="px-4 py-3 font-mono text-[13px]">
                        dinkit-cookie-consent
                      </td>
                      <td className="px-4 py-3">Strictly necessary</td>
                      <td className="px-4 py-3">
                        Remembers your cookie preference (stored in local
                        storage, not a cookie)
                      </td>
                      <td className="px-4 py-3">Until you clear site data</td>
                    </tr>
                    <tr className="border-b border-[#f0f0f0]">
                      <td className="px-4 py-3 font-mono text-[13px]">_ga</td>
                      <td className="px-4 py-3">Analytics (Google Analytics)</td>
                      <td className="px-4 py-3">Distinguishes unique visitors</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-[#f0f0f0]">
                      <td className="px-4 py-3 font-mono text-[13px]">
                        _ga_9WFHXLHYKP
                      </td>
                      <td className="px-4 py-3">Analytics (Google Analytics)</td>
                      <td className="px-4 py-3">
                        Persists session state for this site
                      </td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-[13px]">_gid</td>
                      <td className="px-4 py-3">Analytics (Google Analytics)</td>
                      <td className="px-4 py-3">Distinguishes unique visitors</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </LegalSection>

            <LegalSection title="How to control cookies">
              <p>
                You can accept or reject analytics cookies from the banner
                shown on your first visit. To change your choice, clear
                dinkitgolf.com&rsquo;s site data (or local storage) in your
                browser settings and reload the page — the banner will
                appear again.
              </p>
              <p>
                Most browsers also let you block or delete cookies directly
                in their settings. You can find out more, and opt out of
                Google Analytics specifically, at{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  tools.google.com/dlpage/gaoptout
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="Changes to this policy">
              <p>
                We may update this policy as the site changes. Significant
                changes will be reflected in the &ldquo;last updated&rdquo;
                date above.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                Questions about this policy? Email{" "}
                <a href="mailto:hello@dinkitgolf.com" className={linkClass}>
                  hello@dinkitgolf.com
                </a>
                .
              </p>
            </LegalSection>
          </LegalPageShell>
        </AboutSection>
      </main>
    </div>
  );
}
