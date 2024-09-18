"use client";

import clsx from "clsx";
import Image from "next/image";
import { Button } from "./button";
import { Product } from "@/lib/data";
import { commafy } from "@/lib/util-functions";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import CountControlButton from "./count-control-button";
import { toast } from "react-toastify";

const ProductPriceDetail = ({ product }: { product: Product }) => {
  const [units, setUnits] = useState(1);
  const dispatch = useAppDispatch();
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ product: product, units: units }));
    setIsAddToCartDisabled(true);
    setTimeout(() => {
      setIsAddToCartDisabled(false);
    }, 3000);
    toast.success(`${product.name.toUpperCase()} Added to cart`);
  };

  return (
    <>
      <div
        className={clsx(
          "mb-10",
          "md:flex md:items-center md:mb-[7.6rem]",
          "lg:mb-[10.1rem]",
          "xl:mb-[10.3rem]",
        )}
      >
        <div
          className={clsx(
            "relative w-full h-[20.5rem] rounded-lg overflow-hidden bg-lightGray/30",
            "md:shrink-0 md:basis-[38%] md:h-[29.5rem]",
            "lg:basis-[26.8rem] lg:h-[27.7rem]",
            "xl:basis-[30.8rem] xl:h-[31.8rem]",
          )}
        >
          <Image
            src={product.images.mobile}
            alt=""
            fill
            sizes="100%"
            className="md:hidden"
            priority
          />
          <Image
            src={product.images.tablet}
            alt=""
            fill
            sizes="100%"
            className="hidden md:block lg:hidden"
            priority
          />
          <Image
            src={product.images.desktop}
            alt=""
            fill
            sizes="100%"
            className="hidden lg:block"
            priority
          />
        </div>
        <div
          className={clsx(
            "pt-7 pb-12",
            "md:px-8 md:py-2",
            "lg:pr-12 lg:pl-28",
            "lg:pr-10 xl:pl-32",
          )}
        >
          {product.newProduct && (
            <p
              className={clsx(
                "uppercase text-accentMain tracking-[0.62em] mb-5",
                "lg:mb-4",
              )}
            >
              New product
            </p>
          )}
          <p
            className={clsx(
              "uppercase text-[1.8rem] tracking-[0.02em] font-bold leading-[1.3]",
              "mb-7",
              "lg:text-[2.4rem] lg:mb-5",
              "xl:tracking-[0.05em]",
            )}
          >
            {product.name}
          </p>
          <p className={clsx("text-text leading-[1.65] pr-3 mb-6", "xl:pr-0")}>
            {product.description}
          </p>
          <p className="font-bold text-[1.16rem] mb-8">
            ${commafy(product.price)}
          </p>
          <div className={clsx("flex gap-4 items-stretch")}>
            <CountControlButton
              increment={() => setUnits((prevUnits) => prevUnits + 1)}
              decrement={() => setUnits((prevUnits) => prevUnits - 1)}
              count={units}
              minCount={1}
            />
            <Button
              variant="accented"
              onClick={handleAddToCart}
              disabled={isAddToCartDisabled}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPriceDetail;
