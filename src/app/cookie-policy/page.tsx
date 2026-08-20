import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Dink'It uses cookies and similar technologies on dinkitgolf.com.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col gap-8 px-6 py-16 text-white [font-family:var(--font-42dot-sans)] sm:py-20">
        <Link
          href="/"
          className="text-[14px] text-[#87ffad] underline underline-offset-2 hover:opacity-80"
        >
          &larr; Back to Dink&rsquo;It
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-medium tracking-[-0.4px] [font-family:var(--font-space-grotesk)] sm:text-[40px]">
            Cookie Policy
          </h1>
          <p className="text-[14px] text-white/70">Last updated: 31 July 2026</p>
        </div>

        <p className="text-[16px] leading-relaxed">
          This policy explains how Dink&rsquo;It (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) uses cookies and similar technologies on
          dinkitgolf.com, and how you can control them.
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-medium [font-family:var(--font-space-grotesk)]">
            What are cookies?
          </h2>
          <p className="text-[16px] leading-relaxed text-white/90">
            Cookies are small text files placed on your device when you visit
            a website. They&rsquo;re widely used to make sites work, remember
            your preferences, and understand how the site is used. We also
            use your browser&rsquo;s local storage in the same way for one
            purpose below.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-medium [font-family:var(--font-space-grotesk)]">
            Cookies we use
          </h2>
          <p className="text-[16px] leading-relaxed text-white/90">
            We only set analytics cookies if you accept them via the cookie
            banner. If you reject or dismiss the banner, only the strictly
            necessary entry below is stored.
          </p>

          <div className="mt-2 overflow-x-auto rounded-[12px] border border-white/15">
            <table className="w-full border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-white/15 bg-white/5">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Purpose</th>
                  <th className="px-4 py-3 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody className="text-white/90">
                <tr className="border-b border-white/10">
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
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3 font-mono text-[13px]">_ga</td>
                  <td className="px-4 py-3">Analytics (Google Analytics)</td>
                  <td className="px-4 py-3">
                    Distinguishes unique visitors
                  </td>
                  <td className="px-4 py-3">2 years</td>
                </tr>
                <tr className="border-b border-white/10">
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
                  <td className="px-4 py-3">
                    Distinguishes unique visitors
                  </td>
                  <td className="px-4 py-3">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-medium [font-family:var(--font-space-grotesk)]">
            How to control cookies
          </h2>
          <p className="text-[16px] leading-relaxed text-white/90">
            You can accept or reject analytics cookies from the banner shown
            on your first visit. To change your choice, clear
            dinkitgolf.com&rsquo;s site data (or local storage) in your
            browser settings and reload the page &mdash; the banner will
            appear again.
          </p>
          <p className="text-[16px] leading-relaxed text-white/90">
            Most browsers also let you block or delete cookies directly in
            their settings. You can find out more, and opt out of Google
            Analytics specifically, at{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#87ffad] underline underline-offset-2 hover:opacity-80"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-medium [font-family:var(--font-space-grotesk)]">
            Changes to this policy
          </h2>
          <p className="text-[16px] leading-relaxed text-white/90">
            We may update this policy as the site changes. Significant
            changes will be reflected in the &ldquo;last updated&rdquo; date
            above.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-medium [font-family:var(--font-space-grotesk)]">
            Contact
          </h2>
          <p className="text-[16px] leading-relaxed text-white/90">
            Questions about this policy? Email{" "}
            <a
              href="mailto:hello@dinkitgolf.com"
              className="text-[#87ffad] underline underline-offset-2 hover:opacity-80"
            >
              hello@dinkitgolf.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
