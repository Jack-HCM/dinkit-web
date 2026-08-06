import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";

export function HeroImageSection() {
  return (
    <div className="relative w-full px-4 sm:px-6">
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="pointer-events-none absolute left-1/2 top-[-14.3%] hidden h-[111.4%] w-[115%] max-w-none -translate-x-1/2 md:block">
          <Image
            src="/images/hero-scene-bleed.png"
            alt=""
            fill
            sizes="1472px"
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] md:aspect-[1280/691]">
          <Image
            src="/images/hero-scene-box.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="pointer-events-none object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
