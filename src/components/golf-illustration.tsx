import Image from "next/image";

function SceneImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={2362}
      height={1158}
      priority={priority}
      sizes="2000px"
      className="pointer-events-none absolute left-1/2 top-[-49.59%] h-[149.59%] w-auto max-w-none -translate-x-1/2"
    />
  );
}

export function GolfIllustration() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden sm:h-[340px] md:h-[460px] lg:h-[605px]">
      <SceneImage src="/images/golf-scene-transparent.png" alt="" />

      <div className="absolute inset-y-0 inset-x-0 flex justify-center">
        <div className="relative h-full w-full max-w-[1058px] overflow-hidden rounded-t-[16px] sm:rounded-t-[24px]">
          <SceneImage
            src="/images/golf-scene.png"
            alt="Illustration of a golfer teeing off on a lush, whimsical course"
            priority
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#347e55] to-transparent" />
    </div>
  );
}
