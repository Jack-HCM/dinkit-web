import Image from "next/image";

export function GolfIllustration() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden sm:h-[340px] md:h-[460px] lg:h-[605px]">
      <Image
        src="/images/golf-scene-transparent.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-y-0 inset-x-0 flex justify-center">
        <div className="relative h-full w-full max-w-[1058px] overflow-hidden rounded-t-[16px] sm:rounded-t-[24px]">
          <Image
            src="/images/golf-scene.png"
            alt="Illustration of a golfer teeing off on a lush, whimsical course"
            fill
            sizes="(min-width: 1058px) 1058px, 100vw"
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#347e55] to-transparent" />
    </div>
  );
}
