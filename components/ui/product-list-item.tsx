import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

type ProductItemProps = {
  name: string;
  mobileImageUrl: string;
  tabletImageUrl: string;
  desktopImageUrl: string;
  imageAlt: string;
  newProduct?: boolean;
  productUrl: string;
  children: string;
};

const ProductListItem = ({
  name,
  mobileImageUrl,
  tabletImageUrl,
  desktopImageUrl,
  imageAlt,
  newProduct = false,
  productUrl,
  children,
}: ProductItemProps) => {
  return (
    <li
      className={clsx(
        "lg:flex lg:even:flex-row-reverse lg:items-center lg:h-[30.5rem]",
      )}
    >
      <div
        className={clsx(
          "relative w-full h-[22rem] rounded-md overflow-hidden",
          "md:h-[48.5rem]",
          "lg:h-full lg:shrink-0 lg:basis-[29rem]",
        )}
      >
        <Image
          src={mobileImageUrl}
          alt={imageAlt}
          fill
          sizes="100%"
          className="md:hidden"
        />
        <Image
          src={tabletImageUrl}
          alt={imageAlt}
          fill
          sizes="100%"
          className="hidden md:block lg:hidden"
        />
        <Image
          src={desktopImageUrl}
          alt={imageAlt}
          fill
          sizes="100%"
          className="hidden lg:block"
        />
      </div>
      <div
        className={clsx(
          "text-center pt-7 pb-12 px-2",
          "md:pt-8 centered-flex-col md:px-10",
          "lg:text-left lg:items-start lg:pl-20",
          "xl:px-24",
        )}
      >
        {newProduct && (
          <p
            className={clsx("uppercase text-accentMain tracking-[0.65em] mb-7")}
          >
            New product
          </p>
        )}
        <p
          className={clsx(
            "uppercase font-bold text-3xl mb-6",
            "md:max-w-[15rem]",
          )}
        >
          {name}
        </p>
        <p
          className={clsx("leading-[1.67] text-text mb-6", "md:max-w-[40rem]")}
        >
          {children}
        </p>
        <Button variant="accented" asChild>
          <Link href={productUrl}>see product</Link>
        </Button>
      </div>
    </li>
  );
};

export default ProductListItem;
