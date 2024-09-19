import Image from "next/image";
import clsx from "clsx";
import { Button } from "./button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectProducts, selectTotalPrice } from "@/lib/slices/cartSlice";
import { commafy } from "@/lib/util-functions";

const CheckoutProducts = () => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector(selectProducts);
  const totalPrice = useAppSelector(selectTotalPrice);
  const shippingCost = 50;
  const vat = parseFloat((0.2 * totalPrice).toFixed(2));

  return (
    <div
      className={clsx(
        "lg:basis-[32%] lg:shrink-0 lg:bg-white lg:rounded-lg",
        "lg:p-6",
      )}
    >
      <h2 className={clsx("uppercase font-bold text-lg mb-6 text")}>Summary</h2>
      <div className={clsx("flex flex-col gap-4 mb-8")}>
        {productsInCart.map((product, idx) => (
          <div key={idx} className={clsx("flex items-center gap-5")}>
            <Image
              src={product.sharedImage.desktop}
              alt={product.name}
              width={50}
              height={50}
              className="shrink-0"
            />
            <div className="flex-1">
              <p className={clsx("font-bold uppercase")}>{product.shortName}</p>
              <p>$ {commafy(product.price)}</p>
            </div>
            <p className="text-text">x{product.numberOfUnits}</p>
          </div>
        ))}
      </div>
      <div className={clsx("flex flex-col gap-3")}>
        <div className={clsx("flex justify-between")}>
          <p className={clsx("text-text uppercase font-semibold")}>Total</p>
          <p className={clsx("font-bold")}>$ {commafy(totalPrice)}</p>
        </div>
        <div className={clsx("flex justify-between")}>
          <p className={clsx("text-text uppercase font-semibold")}>Shipping</p>
          <p className={clsx("font-bold")}>$ {shippingCost}</p>
        </div>
        <div className={clsx("flex justify-between")}>
          <p className={clsx("text-text uppercase font-semibold")}>
            Vat (included)
          </p>
          <p className={clsx("font-bold")}>$ {commafy(vat)}</p>
        </div>
        <div className={clsx("flex justify-between mt-5")}>
          <p className={clsx("text-text uppercase font-semibold")}>
            Grand total
          </p>
          <p className={clsx("font-bold text-accentMain")}>
            $ {commafy(totalPrice + shippingCost + vat)}
          </p>
        </div>
      </div>
      <Button
        type="submit"
        variant="accented"
        className={"w-full mt-6"}
        disabled={productsInCart.length === 0}
      >
        Continue &amp; pay
      </Button>
    </div>
  );
};

export default CheckoutProducts;
