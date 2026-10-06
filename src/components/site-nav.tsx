"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Watches the hero logo (rendered separately, higher up the page) and
// animates this bar in from above once it scrolls out of view — so the
// two logos never show on screen at the same time. Pages with no hero
// logo of their own (e.g. /features) pass alwaysVisible instead.
const NAV_LINKS = [
  { href: "/features", label: "App features" },
  { href: "/courses", label: "Course Coverage" },
  { href: "/about", label: "About Us" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
];

function IconShotTracker() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.25" />
    </svg>
  );
}

function IconStats() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V13M12 21V7M19 21V11" />
    </svg>
  );
}

function IconAnalysis() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function IconStrokesGained() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21V4" />
      <path d="M6 4l11 3.5L6 11" />
      <ellipse cx="6" cy="21" rx="3" ry="1" />
    </svg>
  );
}

function IconDispersion() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="7" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="13" cy="5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
    </svg>
  );
}

function IconClubDistance() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="6" rx="1.5" />
      <path d="M7.5 9v2.5M11.5 9v3.5M15.5 9v2.5" />
    </svg>
  );
}

const APP_FEATURES = [
  {
    href: "/golf-shot-tracker",
    title: "Shot Tracker",
    body: "GPS shot tracking from your phone, zero extra hardware.",
    Icon: IconShotTracker,
  },
  {
    href: "/golf-stats-app",
    title: "Golf Stats App",
    body: "Career stats and round history, built automatically.",
    Icon: IconStats,
  },
  {
    href: "/golf-performance-analysis",
    title: "Performance Analysis",
    body: "A round broken down by what actually won or lost it.",
    Icon: IconAnalysis,
  },
  {
    href: "/strokes-gained",
    title: "Strokes Gained",
    body: "See where every stroke was gained or lost, by category.",
    Icon: IconStrokesGained,
  },
  {
    href: "/golf-shot-dispersion",
    title: "Shot Dispersion",
    body: "Your real left-right miss for Driving, Approach, and Short Game.",
    Icon: IconDispersion,
  },
  {
    href: "/golf-club-distance-tracker",
    title: "Club Distances",
    body: "Average distance per club, from your tracked shots.",
    Icon: IconClubDistance,
  },
];

export function SiteNav({ alwaysVisible = false }: { alwaysVisible?: boolean } = {}) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

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

  useEffect(() => {
    if (!visible) {
      setMenuOpen(false);
      setFeaturesOpen(false);
    }
  }, [visible]);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 flex flex-col items-center px-6 pt-4 transition-transform duration-500 ease-in-out will-change-transform sm:px-10 md:px-14 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <nav
          className={`flex w-full max-w-[1326px] flex-col rounded-[8px] border transition-[backdrop-filter,background-color,box-shadow,border-color] duration-500 ease-in-out will-change-[backdrop-filter] ${
            visible
              ? "border-white/15 bg-[rgba(25,75,52,0.45)] shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-[14px] backdrop-saturate-[160%]"
              : "border-transparent bg-[rgba(25,75,52,0)] shadow-[0_8px_32px_rgba(0,0,0,0)] backdrop-blur-[0px] backdrop-saturate-100"
          }`}
          aria-hidden={!visible}
          onMouseLeave={() => setFeaturesOpen(false)}
        >
          <div className="flex w-full items-center justify-between p-[12px]">
            <a href="/" className="relative h-[38px] w-[97px] shrink-0 sm:h-[51px] sm:w-[130px]">
              <Image
                src="/images/dinkit-logo.svg"
                alt="Dink'it Golf"
                fill
                className="object-contain"
              />
            </a>

            <div className="hidden items-center gap-[62px] [font-family:var(--font-space-grotesk)] text-[17px] font-medium whitespace-nowrap text-white md:flex">
              {NAV_LINKS.map((link) =>
                link.href === "/features" ? (
                  <div
                    key={link.href}
                    className="flex items-center gap-[6px]"
                    onMouseEnter={() => setFeaturesOpen(true)}
                  >
                    <a href={link.href} className="transition-opacity hover:opacity-80">
                      {link.label}
                    </a>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className={`transition-transform duration-300 ${featuresOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <a key={link.href} href={link.href} className="transition-opacity hover:opacity-80">
                    {link.label}
                  </a>
                )
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href="https://app.dinkitgolf.com/dashboard"
                className="shrink-0 rounded-[4px] bg-[#56c186] px-[16px] py-[12px] text-[14px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)] sm:text-[18px]"
              >
                Join Beta Testing
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[4px] text-white transition-colors hover:bg-white/10 md:hidden"
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2 2L18 18M18 2L2 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path
                      d="M1 1H19M1 7H19M1 13H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              featuresOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-2 gap-x-8 gap-y-7 border-t border-white/10 px-[24px] pt-[24px] pb-[28px] md:grid-cols-4">
                {APP_FEATURES.map(({ href, title, body, Icon }) => (
                  <a key={href} href={href} className="flex flex-col gap-3 text-left">
                    <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.06] text-[#87ffad]">
                      <Icon />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-[15px] font-medium text-white [font-family:var(--font-space-grotesk)]">
                        {title}
                      </span>
                      <span className="text-[13px] leading-[1.45] text-white/60 [font-family:var(--font-42dot-sans)]">
                        {body}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="mt-2 flex w-full max-w-[1326px] flex-col gap-1 rounded-[8px] bg-[rgba(25,75,52,0.92)] p-[12px] backdrop-blur-[24px] [font-family:var(--font-space-grotesk)] text-[17px] font-medium text-white md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[4px] px-[12px] py-[12px] transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {!alwaysVisible && (
        <button
          type="button"
          onClick={() => setVisible(true)}
          aria-label="Open menu"
          aria-hidden={visible}
          tabIndex={visible ? -1 : 0}
          className={`fixed top-0 right-6 z-40 flex h-[46px] w-[45px] items-center justify-center rounded-b-[4px] border border-t-0 border-white/15 bg-[rgba(25,75,52,0.4)] text-white backdrop-blur-[6px] transition-opacity duration-500 ease-in-out sm:right-10 md:right-14 ${
            visible ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 1H19M1 7H19M1 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </>
  );
}
