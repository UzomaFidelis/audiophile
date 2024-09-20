"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { CartProduct } from "@/lib/slices/cartSlice";
import { commafy } from "@/lib/util-functions";
import { useAppDispatch } from "@/lib/hooks";
import { resetCart } from "@/lib/slices/cartSlice";

const CheckoutSuccessModal = ({
  firstProduct,
  productsNumber,
  grandTotal,
}: {
  firstProduct: CartProduct;
  productsNumber: number;
  grandTotal: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={clsx(
        "fixed h-screen w-screen bg-black/60 p-5",
        "top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10",
      )}
    >
      <div
        className={clsx(
          "bg-white max-w-[20rem] px-5 py-6 rounded-lg",
          "md:max-w-[32rem] md:p-10 md:w-full",
          "lg:max-w-[38rem]",
        )}
      >
        <Image
          src="/images/shared/desktop/icon-check-mark.svg"
          alt=""
          width={64}
          height={64}
          aria-hidden
          className={clsx("mb-4", "lg:mb-6")}
        />
        <p
          className={clsx(
            "uppercase font-bold text-2xl mb-4",
            "md:w-[14rem] md:mb-5",
            "lg:mb-6",
          )}
        >
          Thank you for your order
        </p>
        <p
          className={clsx("text-text text-regular mb-4", "md:mb-5", "lg:mb-6")}
        >
          You will receive an email confirmation shortly.
        </p>
        <div
          className={clsx(
            "rounded-lg overflow-hidden mb-4 w-full",
            "md:flex md:mb-5",
            "lg:mb-6",
          )}
        >
          <div
            className={clsx(
              "bg-gray px-3 py-5 flex items-center gap-3 relative",
              "md:basis-[60%]",
            )}
          >
            <div>
              <Image
                src={firstProduct.cartImage}
                alt={firstProduct.name}
                width={150}
                height={150}
                className={clsx("w-16 shrink-0")}
              />
            </div>
            <div className={clsx("flex-1")}>
              <p className="font-bold uppercase">{firstProduct.shortName}</p>
              <p className="text-text text-regular">
                $ {commafy(firstProduct.price)}
              </p>
            </div>
            <div>
              <p className={clsx("text-text px-2")}>
                x{firstProduct.numberOfUnits}
              </p>
            </div>
            {productsNumber > 1 && (
              <span
                className={clsx(
                  "absolute bg-black/70 top-0 left-0 rounded-xl",
                  "px-2 py-1 text-xs text-white font-medium",
                )}
              >
                and {productsNumber - 1} other(s)
              </span>
            )}
          </div>
          <div className={clsx("bg-black py-5 px-5", "md:flex-1")}>
            <p
              className={clsx(
                "uppercase text-textLight mb-3",
                "md:text-regular",
              )}
            >
              Grand total
            </p>
            <p className={clsx("text-white font-bold", "md:text-regular")}>
              $ {grandTotal}
            </p>
          </div>
        </div>
        <Button
          variant="accented"
          className={clsx("w-full")}
          asChild
          onClick={() => dispatch(resetCart())}
        >
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccessModal;
