"use client";

import { useEffect, useState } from "react";

// Watches the hero logo (rendered separately, higher up the page) and
// animates this bar in from above once it scrolls out of view — so the
// two logos never show on screen at the same time. Pages with no hero
// logo of their own (e.g. /features) pass alwaysVisible instead.
const NAV_LINKS = [
  { href: "/features", label: "App features" },
  { href: "/about", label: "About Us" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav({ alwaysVisible = false }: { alwaysVisible?: boolean } = {}) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [menuOpen, setMenuOpen] = useState(false);

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
    if (!visible) setMenuOpen(false);
  }, [visible]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 flex flex-col items-center px-6 pt-4 transition-[transform,opacity] duration-500 ease-in-out will-change-transform sm:px-10 md:px-14 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <nav
        className={`flex w-full max-w-[1326px] items-center justify-between rounded-[8px] border p-[12px] transition-[backdrop-filter,background-color,box-shadow,border-color] duration-500 ease-in-out ${
          visible
            ? "border-white/15 bg-[rgba(25,75,52,0.45)] shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-[14px] backdrop-saturate-[160%]"
            : "border-transparent bg-[rgba(25,75,52,0)] shadow-[0_8px_32px_rgba(0,0,0,0)] backdrop-blur-[0px] backdrop-saturate-100"
        }`}
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
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-80">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/#waitlist"
            className="shrink-0 rounded-[4px] bg-[#56c186] px-[16px] py-[12px] text-[14px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)] sm:text-[18px]"
          >
            Start Tracking Free
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
  );
}
