import { sanityImageUrl } from "@/lib/sanity";
import type { ArticleImage } from "@/lib/blog";
import SanityImage from "./SanityImage";

export default function ArticleMedia({
  image,
  cover = false,
}: {
  image: ArticleImage;
  cover?: boolean;
}) {
  return (
    <figure className={cover ? "mt-12" : "my-10"}>
      <div className="overflow-hidden rounded-md bg-[#f2f2f2]">
        <SanityImage
          src={sanityImageUrl(image)}
          alt={image.alt}
          cover={cover}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 font-inter text-sm leading-6 text-black/50">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
