"use client";

import clsx from "clsx";
import { forwardRef, MouseEventHandler } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  increaseUnits,
  decreaseUnits,
  removeFromCart,
  resetCart,
  selectProducts,
  selectTotalPrice,
} from "@/lib/slices/cartSlice";
import type { CartProduct } from "@/lib/slices/cartSlice";
import CountControlButton from "./count-control-button";
import { commafy } from "@/lib/util-functions";
import { Button } from "./button";
import Link from "next/link";
import { toast } from "react-toastify";

type CartProps = {
  isOpen: boolean;
};

const Cart = forwardRef<HTMLDivElement, CartProps>(
  ({ isOpen }: { isOpen: boolean }, ref) => {
    const productsInCart = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();
    const numberofProducts = productsInCart.length;
    const totalPrice = useAppSelector(selectTotalPrice);

    const increase = (product: CartProduct) => {
      dispatch(increaseUnits(product));
    };
    const decrease = (product: CartProduct) => {
      if (product.numberOfUnits === 1) {
        dispatch(removeFromCart(product));
        toast.info(`${product.name.toUpperCase()} removed from cart`);
      } else {
        dispatch(decreaseUnits(product));
      }
    };
    const clearCart = () => {
      dispatch(resetCart());
      toast.info("Cart cleared");
    };

    return (
      <div
        className={clsx(
          isOpen
            ? "bg-black/60 pointer-events-auto"
            : "bg-transparent pointer-events-none",
          "absolute absolute-x-center top-[5.5rem] w-screen",
          "z-10 flex justify-center h-screen transition-colors duration-500",
        )}
      >
        <div
          ref={ref}
          className={clsx(
            isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0",
            numberofProducts
              ? "flex flex-col justify-start"
              : "centered-flex-col justify-center",
            "py-6 px-3 rounded-lg bg-white shadow-lg overflow-scroll",
            "h-[20rem] w-[90%]",
            "[transition:transform_400ms,opacity_200ms] ease-out",
            "md:max-w-[30rem] md:absolute md:right-10 md:top-0",
            "lg:h-[25rem]",
          )}
        >
          {numberofProducts ? (
            <div className="pb-14 relative min-h-full w-full">
              <div className="h-full px-3 pb-6 overflow-scroll">
                <div className="flex items-center justify-between mb-4">
                  <p className="uppercase font-medium text-xl">
                    Cart ({numberofProducts})
                  </p>
                  <button className="underline text-text" onClick={clearCart}>
                    Remove all
                  </button>
                </div>
                <ul className="centered-flex-col gap-3 w-full mb-8">
                  {productsInCart.map((product, idx) => (
                    <li key={idx} className="flex items-center gap-4 w-full">
                      <Image
                        src={product.cartImage}
                        alt={product.name}
                        width={70}
                        height={70}
                        className={clsx(
                          "rounded-md overflow-hidden w-12 h-12",
                          "md:w-[4.38rem] md:h-[4.38rem]",
                        )}
                      />
                      <div className="flex-1">
                        <p
                          className={clsx(
                            "font-bold uppercase text-sm",
                            "md:text-regular",
                            "lg:text-base",
                          )}
                        >
                          {product.shortName}
                        </p>
                        <p
                          className={clsx(
                            "text-text text-sm",
                            "md:text-regular",
                            "lg:text-base",
                          )}
                        >
                          $ {commafy(product.price)}
                        </p>
                      </div>
                      <CountControlButton
                        increment={() => increase(product)}
                        decrement={() => decrease(product)}
                        count={product.numberOfUnits}
                      />
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <p className="uppercase text-text">Total</p>
                  <p className="uppercase font-bold">$ {commafy(totalPrice)}</p>
                </div>
              </div>
              <div className="absolute px-3 w-full">
                <Button variant="accented" className="shrink-0 w-full" asChild>
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-text mb-4">Your cart is empty</p>
              <Image
                src="/images/cart/empty-cart.png"
                alt="empty cart"
                width={100}
                height={100}
                className="w-[6.25rem] h-[6.25rem]"
              />
            </>
          )}
        </div>
      </div>
    );
  },
);
Cart.displayName = "Cart";

export default Cart;
