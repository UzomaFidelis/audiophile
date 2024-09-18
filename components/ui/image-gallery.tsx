import Image from "next/image";
import clsx from "clsx";
import { GalleryProps } from "@/lib/types";

type StyleGalleryProps = GalleryProps & { className?: string };

const ImageGallery = ({
  imageOne,
  imageTwo,
  imageThree,
  className,
}: StyleGalleryProps) => {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-1 gap-y-5",
        "md:grid-cols-[40%_1fr] md:grid-rows-[repeat(2,_11.5rem)] md:gap-x-5",
        "lg:grid-rows-[repeat(2,_16rem)]",
        "xl:grid-rows-[repeat(2,_18.3rem)]",
      )}
    >
      <div
        className={clsx(
          "relative w-full h-[10.93rem] rounded-lg overflow-hidden",
          "md:h-auto",
        )}
      >
        <Image
          src={imageOne.mobile}
          alt={imageOne.alt}
          fill
          sizes="100%"
          className="md:hidden"
        />
        <Image
          src={imageOne.tablet}
          alt={imageOne.alt}
          fill
          sizes="100%"
          className="hidden md:block lg:hidden"
        />
        <Image
          src={imageOne.desktop}
          alt={imageOne.alt}
          fill
          sizes="100%"
          className="hidden lg:block"
        />
      </div>
      <div
        className={clsx(
          "relative w-full h-[11rem] rounded-lg overflow-hidden",
          "md:h-auto",
        )}
      >
        <Image
          src={imageTwo.mobile}
          alt={imageTwo.alt}
          fill
          sizes="100%"
          className="md:hidden"
        />
        <Image
          src={imageTwo.tablet}
          alt={imageTwo.alt}
          fill
          sizes="100%"
          className="hidden md:block lg:hidden"
        />
        <Image
          src={imageTwo.desktop}
          alt={imageTwo.alt}
          fill
          sizes="100%"
          className="hidden lg:block"
        />
      </div>
      <div
        className={clsx(
          "relative w-full h-[22.9rem] rounded-lg overflow-hidden",
          "md:h-auto md:col-start-2 md:row-start-1 md:row-span-2",
        )}
      >
        <Image
          src={imageThree.mobile}
          alt={imageThree.alt}
          fill
          sizes="100%"
          className="md:hidden"
        />
        <Image
          src={imageThree.tablet}
          alt={imageThree.alt}
          fill
          sizes="100%"
          className="hidden md:block lg:hidden"
        />
        <Image
          src={imageThree.desktop}
          alt={imageThree.alt}
          fill
          sizes="100%"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
