import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";

export function HeroImageSection() {
  return (
    <div className="relative w-full px-4 sm:px-6">
      <div className="relative mx-auto w-full max-w-[1180px]">
        <Image
          src="/images/golf-scene-transparent.png"
          alt=""
          width={2362}
          height={1158}
          className="pointer-events-none absolute left-1/2 top-[-42%] h-[170%] w-auto max-w-none -translate-x-1/2"
        />

        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px]">
          <Image
            src="/images/golf-scene.png"
            alt=""
            width={2362}
            height={1158}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/25" />
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
