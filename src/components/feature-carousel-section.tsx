"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Scene + phone imagery is shared across all 4 slides for now — real,
// slide-specific assets will be supplied later and swapped in per slide.
const SLIDES = [
  {
    pill: "Free Plan",
    heading: "Easy GPS tracking, straight from your phone",
    body: "Stand by your ball and tap. Our app uses your phone's GPS to log every shot. No expensive hardware attachments required.",
    phone: "/images/hero-card-tracking.png",
  },
  {
    pill: "Free Plan",
    heading: "Play and compare with friends.",
    body: "Connect with your regular group easily. Compare your stats in one central place. Keep the friendly competition going between rounds.",
    phone: "/images/hero-card-tracking.png",
  },
  {
    pill: "No Plan Needed",
    heading: "Find your next course.",
    body: "Discover highly rated courses right near you. Get accurate local recommendations instantly. Explore new fairways and plan your next weekend round.",
    phone: "/images/hero-card-tracking.png",
  },
  {
    pill: "Premium Plan",
    heading: "Unlock your full data.",
    body: "Upgrade to access deeper performance metrics. Review detailed tendencies to lower your score. Get serious tools to fast-track your improvement.",
    phone: "/images/hero-card-tracking.png",
  },
];

const ROTATE_MS = 5000;

// Unlike the hero, only the phone moves here — the scene/clouds stay put.
const PARALLAX_PHONE_SPEED = 0.08;

export function FeatureCarouselSection() {
  const [index, setIndex] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const phoneLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);

      if (phoneLayerRef.current) {
        phoneLayerRef.current.style.transform = `translateY(${offset * PARALLAX_PHONE_SPEED}px)`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = SLIDES[index];

  const pill = (
    <div
      key={`pill-${index}`}
      className="animate-hero-fade inline-block self-start rounded-[24px] border border-[#44e276] px-[10px] py-[4px] text-[16px] font-bold whitespace-nowrap text-black [font-family:var(--font-space-grotesk)]"
    >
      {active.pill}
    </div>
  );

  const heading = (
    <h3
      key={`heading-${index}`}
      className="animate-hero-fade text-[24px] leading-[1.4] font-bold text-black [font-family:var(--font-space-grotesk)] sm:text-[34px] sm:leading-[1.2] md:text-[42px] md:leading-[1.15]"
    >
      {active.heading}
    </h3>
  );

  const body = (
    <p
      key={`body-${index}`}
      className="animate-hero-fade text-[16px] leading-[1.4] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[18px] sm:leading-relaxed md:text-[20px]"
    >
      {active.body}
    </p>
  );

  const goPrev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  const arrowButton = (direction: "prev" | "next") => (
    <button
      type="button"
      onClick={direction === "prev" ? goPrev : goNext}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#347e55] text-[#347e55] transition-colors hover:bg-[#347e55]/10"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className={direction === "next" ? "rotate-180" : ""}
      >
        <path
          d="M8.5 2.5L3.5 7L8.5 11.5M3.5 7H12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  const dots = SLIDES.length > 1 && (
    <div className="flex items-center gap-[7px]">
      {SLIDES.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Show slide ${i + 1}`}
          className={`shrink-0 rounded-full bg-[#87ffad] transition-all duration-500 ${
            i === index ? "h-[17px] w-[17px] opacity-100" : "h-[10px] w-[10px] opacity-30"
          }`}
        />
      ))}
    </div>
  );

  const controls = SLIDES.length > 1 && (
    <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start sm:gap-6">
      {arrowButton("prev")}
      {dots}
      {arrowButton("next")}
    </div>
  );

  return (
    <section className="flex w-full max-w-[1280px] flex-col items-center gap-14 px-6 py-10 sm:py-14 md:gap-20 md:py-20">
      <h2 className="text-center text-[34px] leading-[1.1] font-medium tracking-[-0.68px] text-white [font-family:var(--font-space-grotesk)] sm:text-[40px] sm:tracking-[-0.6px] md:text-[48px] md:tracking-[-0.96px]">
        Golf Tracking, <span className="text-[#87ffad]">Simplified.</span>
      </h2>

      {/* Mobile: text content left-aligned at the top of a white card,
          phone + scene illustration bleeding out the bottom (matching the
          GPS-scene fan's hero-scene-box.png golfer illustration). */}
      <div className="relative w-full md:hidden">
        <div className="overflow-hidden rounded-[24px] bg-white">
          <div
            className="flex flex-col items-start gap-[18px] text-left"
            style={{ paddingTop: 39, paddingLeft: 36, paddingRight: 26 }}
          >
            {pill}
            {heading}
            {body}
            {controls}
          </div>

          <div
            className="relative mt-9 w-full"
            style={{ aspectRatio: "340 / 498" }}
          >
            <div
              className="pointer-events-none absolute left-0 w-full overflow-hidden"
              style={{ top: "49.7%", height: "50.6%" }}
            >
              {/* Same source photo the cloud sprites below are cropped
                  from, at Figma's exact crop — so the baked-in clouds at
                  its top edge line up with the bleeding sprites. */}
              <div
                className="absolute"
                style={{ top: "-18.68%", left: "-6.43%", width: "157.14%", height: "119.26%" }}
              >
                <Image
                  src="/images/feature-scene-box.jpg"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cloud bleed, unclipped: sits in its own box exactly overlaying
            the scene box above (same aspect ratio, bottom-aligned to the
            card since the scene box is the card's last child), so Figma's
            scene-relative percentages apply directly. Same source image
            and crops as the desktop version's two sprites. Painted before
            the phone below, so the phone sits in front of (occludes) the
            cloud where they overlap, matching Figma. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{ aspectRatio: "340 / 498" }}
        >
          <div
            className="absolute overflow-hidden"
            style={{ left: "14.99%", top: "42.87%", width: "30.01%", height: "9.5%" }}
          >
            <div
              className="absolute"
              style={{ top: "-29.8%", left: "-75.74%", width: "543.12%", height: "655.48%" }}
            >
              <Image src="/images/feature-scene-clouds.png" alt="" fill sizes="150px" className="object-cover" />
            </div>
          </div>
          <div
            className="absolute overflow-hidden"
            style={{ left: "82.41%", top: "42.57%", width: "26.11%", height: "11.4%" }}
          >
            <div
              className="absolute"
              style={{ top: "2.86%", left: "-291.54%", width: "474.05%", height: "417.12%" }}
            >
              <Image src="/images/feature-scene-clouds.png" alt="" fill sizes="150px" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Phone, unclipped: same bottom-anchored box as the clouds above,
            but painted after so it sits in front of them. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{ aspectRatio: "340 / 498" }}
        >
          <div
            className="absolute"
            style={{ left: "24.1%", top: 0, width: "51.8%", height: "68.8%" }}
          >
            <Image
              src={active.phone}
              alt=""
              fill
              sizes="200px"
              className="object-contain drop-shadow-[0px_16px_32px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>

      {/* Desktop: box split 50/50, image half built the same way as the
          hero scene — a plain sky-colour panel sits behind a transparent-sky
          image, so the box fill and the bleeding clouds are pixel-identical.
          The bleed image is a sibling of (not clipped by) the right panel,
          so clouds can rise above the box's top edge. */}
      <div
        ref={sceneRef}
        className="relative hidden w-full overflow-visible md:block md:aspect-[1280/572]"
      >
        <div className="absolute inset-0 rounded-[24px] bg-white" />

        {/* Flat colour fill for the image half — just a solid panel, no
            children, so it needs no clipping of its own. */}
        <div className="absolute inset-y-0 left-1/2 right-0 rounded-r-[24px] bg-[#a7d8ef]" />

        {/* In-box scene: the panel's own flat, opaque crop straight from
            Figma (no clouds baked in — the source crop window starts below
            the cloud band), so there's no transparency/seam math needed
            here at all. Percentages are Figma's exact export for this
            image against this panel, not an approximation. */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 right-0 overflow-hidden rounded-r-[24px]">
          <div
            className="absolute"
            style={{ top: "-9.81%", left: "-6.73%", width: "164.53%", height: "110.18%" }}
          >
            <Image
              src="/images/feature-scene-box.jpg"
              alt=""
              fill
              sizes="640px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Cloud bleed: two independent sprites (not one wide crop), each a
            tightly-cropped window onto just its own cloud cluster from the
            transparent-sky version of the same source photo. Positioned as
            siblings of the box (not children), so they float above it
            unclipped. Kept scoped to the box's own width so nothing bleeds
            over the white text card on the left. Geometry — both the
            sprites' placement and their internal image crops — is Figma's
            exact export, scaled from box-relative to scene-relative since
            the box is the right half of this container. */}
        <div
          className="pointer-events-none absolute z-10 overflow-hidden"
          style={{ left: "57.85%", top: "-5.09%", width: "15.69%", height: "17.36%" }}
        >
          <div
            className="absolute"
            style={{ top: "-29.8%", left: "-75.74%", width: "543.12%", height: "655.48%" }}
          >
            <Image src="/images/feature-scene-clouds.png" alt="" fill sizes="250px" className="object-cover" />
          </div>
        </div>
        <div
          className="pointer-events-none absolute z-10 overflow-hidden"
          style={{ left: "93.11%", top: "-5.66%", width: "13.71%", height: "20.76%" }}
        >
          <div
            className="absolute"
            style={{ top: "2.86%", left: "-291.54%", width: "474.05%", height: "417.12%" }}
          >
            <Image src="/images/feature-scene-clouds.png" alt="" fill sizes="220px" className="object-cover" />
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 flex w-1/2 max-w-[480px] flex-col py-10 pr-10 pl-10 lg:pr-14 lg:pl-16">
          {/* This block fills the remaining space and centers pill/heading/
              body within it, so the controls below always land at the same
              fixed bottom position regardless of how long the text runs.
              min-h-0 lets it actually shrink to that space instead of
              overflowing (flex items default to a content-based minimum),
              which would otherwise push the controls down and out of the
              overflow-visible scene on the longest slide. */}
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-6">
            {pill}
            {heading}
            {body}
          </div>
          <div className="pt-6">{controls}</div>
        </div>

        <div
          ref={phoneLayerRef}
          className="pointer-events-none absolute top-1/2 left-1/2 h-[92%] w-[20%] -translate-x-1/2 -translate-y-1/2 rotate-[4deg]"
        >
          <Image
            src={active.phone}
            alt=""
            fill
            sizes="220px"
            className="object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
