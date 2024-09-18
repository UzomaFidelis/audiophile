import clsx from "clsx";
import Image from "next/image";

const PurposeStatement = () => {
  return (
    <section
      className={clsx(
        "lg:flex lg:flex-row-reverse lg:items-center lg:h-[32.5rem]",
        "xl:h-[37rem]",
      )}
    >
      <h2 className="sr-only">Our service</h2>
      <div
        className={clsx(
          "relative w-full rounded-md overflow-hidden h-[18.7rem] mb-[2.6rem]",
          "md:h-[19.4rem]",
          "lg:shrink-0 lg:basis-[48%] lg:h-full lg:mb-0",
          "xl:basis-[49%]",
        )}
      >
        <Image
          src="/images/shared/mobile/image-best-gear.jpg"
          alt="man wearing headphones"
          fill
          sizes="100%"
          className="md:hidden"
        />
        <Image
          src="/images/shared/tablet/image-best-gear.jpg"
          alt="man wearing headphones"
          fill
          sizes="100%"
          className="hidden md:block lg:hidden"
        />
        <Image
          src="/images/shared/desktop/image-best-gear.jpg"
          alt="man wearing headphones"
          fill
          sizes="100%"
          className="hidden lg:block"
        />
      </div>
      <div
        className={clsx(
          "text-center px-2",
          "md:centered-flex-col",
          "lg:pl-0 lg:pr-8 lg:text-left lg:items-start lg:flex-1",
        )}
      >
        <p
          className={clsx(
            "uppercase font-bold text-3xl mb-8",
            "md:text-[2.65rem] md:max-w-[40rem] leading-[1.15]",
          )}
        >
          Bringing you the <span className="text-accentMain">best</span> audio
          gear
        </p>
        <p className={clsx("text-text leading-[1.7]", "md:max-w-[35rem]")}>
          Located at the heart of New York City. Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default PurposeStatement;
