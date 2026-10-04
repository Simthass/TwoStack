"use client";

import Image, { type ImageLoaderProps } from "next/image";

function webpLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 82));
  url.searchParams.set("fm", "webp");
  url.searchParams.set("fit", "max");
  return url.toString();
}

export default function SanityImage({
  src,
  alt,
  cover,
}: {
  src: string;
  alt: string;
  cover: boolean;
}) {
  return (
    <Image
      loader={webpLoader}
      src={src}
      alt={alt}
      width={1200}
      height={cover ? 675 : 800}
      sizes={
        cover
          ? "(max-width: 1000px) 100vw, 1000px"
          : "(max-width: 720px) 100vw, 720px"
      }
      className="h-auto w-full"
      priority={cover}
    />
  );
}
