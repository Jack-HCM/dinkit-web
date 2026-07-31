"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const CONSENT_KEY = "dinkit-cookie-consent";
const GA_ID = "G-9WFHXLHYKP";

type Consent = "accepted" | "rejected" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && consent === null) {
      document.body.style.paddingBottom = "112px";
      return () => {
        document.body.style.paddingBottom = "";
      };
    }
  }, [ready, consent]);

  function respond(value: "accepted" | "rejected") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4"
        >
          <div className="flex w-full max-w-[720px] flex-col items-center gap-4 rounded-[12px] border border-[#87ffad]/30 bg-[#212121] p-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[13px] leading-relaxed text-white [font-family:var(--font-42dot-sans)] sm:text-[14px]">
              We use cookies to understand how visitors use Dink&rsquo;It and
              improve the site. See our{" "}
              <Link
                href="/cookie-policy"
                className="text-[#87ffad] underline underline-offset-2 hover:opacity-80"
              >
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => respond("rejected")}
                className="rounded-[4px] border border-white/30 px-4 py-2 text-[14px] font-medium text-white transition-colors [font-family:var(--font-space-grotesk)] hover:bg-white/10"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => respond("accepted")}
                className="rounded-[4px] bg-[#56c186] px-4 py-2 text-[14px] font-medium text-white transition-colors [font-family:var(--font-space-grotesk)] hover:bg-[#4aae76]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
