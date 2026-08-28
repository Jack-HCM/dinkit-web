"use client";

import { useEffect, useState } from "react";

// Watches the hero logo (rendered separately, higher up the page) and
// animates this bar in from above once it scrolls out of view — so the
// two logos never show on screen at the same time. Pages with no hero
// logo of their own (e.g. /features) pass alwaysVisible instead.
export function SiteNav({ alwaysVisible = false }: { alwaysVisible?: boolean } = {}) {
  const [visible, setVisible] = useState(alwaysVisible);

  useEffect(() => {
    if (alwaysVisible) return;

    const heroLogo = document.getElementById("hero-logo");
    if (!heroLogo) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, [alwaysVisible]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-4 transition-all duration-500 ease-in-out sm:px-10 md:px-14 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <nav
        className="flex w-full max-w-[1326px] items-center justify-between rounded-[8px] bg-[rgba(25,75,52,0.5)] p-[12px] backdrop-blur-[24px]"
        aria-hidden={!visible}
      >
        <a href="/" className="h-[38px] w-[97px] shrink-0 sm:h-[51px] sm:w-[130px]">
          <img
            src="/images/dinkit-logo.svg"
            alt="Dink'it Golf"
            className="h-full w-full object-contain"
          />
        </a>

        <div className="hidden items-center gap-[62px] [font-family:var(--font-space-grotesk)] text-[17px] font-medium whitespace-nowrap text-white md:flex">
          <a href="/features" className="transition-opacity hover:opacity-80">
            App features
          </a>
          <a href="/#about" className="transition-opacity hover:opacity-80">
            About Us
          </a>
          <a href="/#waitlist" className="transition-opacity hover:opacity-80">
            Contact
          </a>
        </div>

        <a
          href="/#waitlist"
          className="shrink-0 rounded-[4px] bg-[#56c186] px-[16px] py-[12px] text-[14px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)] sm:text-[18px]"
        >
          Start Tracking Free
        </a>
      </nav>
    </div>
  );
}
