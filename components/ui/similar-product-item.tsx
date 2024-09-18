import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Product } from "@/lib/data";

const SimilarProductItem = ({ product }: { product: Product }) => {
  return (
    <div className={clsx("w-full")}>
      <div
        className={clsx(
          "relative w-full h-[7.5rem] rounded-lg overflow-hidden",
          "md:h-[20.4rem] md:bg-lightGray/30",
          "lg:h-[17.8rem]",
          "xl:h-[20.1rem]",
        )}
      >
        <Image
          src={product.sharedImage.mobile}
          alt={product.name}
          fill
          sizes="100%"
          className="md:hidden"
        />
        <Image
          src={product.sharedImage.tablet}
          alt={product.name}
          fill
          sizes="100%"
          className="hidden md:block lg:hidden"
        />
        <Image
          src={product.sharedImage.desktop}
          alt={product.name}
          fill
          sizes="100%"
          className="hidden lg:block"
        />
      </div>
      <div className={clsx("centered-flex-col py-7")}>
        <p
          className={clsx(
            "text-[1.64rem] uppercase font-bold mb-7",
            "lg:text-[1.54rem]",
          )}
        >
          {product.name}
        </p>
        <Button variant="accented" size="lg" asChild>
          <Link href={`/product/${product.product_id}`}>See product</Link>
        </Button>
      </div>
    </div>
  );
};

export default SimilarProductItem;
