"use client";

import { Product } from "@/lib/data";
import SimilarProductItem from "./similar-product-item";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { getSimilarProducts } from "@/lib/util-functions";

const SimilarProductsCollection = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    setSimilarProducts(getSimilarProducts(product));
  }, [product]);

  return (
    <div className={clsx(className, "text-center")}>
      <h2
        className={clsx(
          "uppercase font-bold text-2xl mb-10",
          "md:text-[2rem] md:mb-16",
        )}
      >
        You may also like
      </h2>
      <div
        className={clsx(
          "w-full flex flex-col items-start gap-[1.4rem]",
          "md:flex-row md:gap-[1.3rem]",
          "lg:gap-[1.6rem]",
        )}
      >
        {similarProducts.map((product, idx) => (
          <SimilarProductItem key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProductsCollection;
