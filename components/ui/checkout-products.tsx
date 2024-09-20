import Image from "next/image";
import clsx from "clsx";
import { Button } from "./button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  CartProduct,
  selectProducts,
  selectTotalPrice,
} from "@/lib/slices/cartSlice";
import { commafy } from "@/lib/util-functions";
import PuffLoader from "react-spinners/PuffLoader";

const CheckoutProducts = ({
  products,
  total,
  shipping,
  vat,
  grandTotal,
  submitting,
}: {
  products: CartProduct[];
  total: string;
  shipping: string;
  vat: string;
  grandTotal: string;
  submitting: boolean;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={clsx(
        "lg:basis-[32%] lg:shrink-0 lg:bg-white lg:rounded-lg",
        "lg:p-6",
      )}
    >
      <h2 className={clsx("uppercase font-bold text-lg mb-6 text")}>Summary</h2>
      <div className={clsx("flex flex-col gap-4 mb-8")}>
        {products.map((product, idx) => (
          <div key={idx} className={clsx("flex items-center gap-5")}>
            <Image
              src={product.cartImage}
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
          <p className={clsx("font-bold")}>$ {total}</p>
        </div>
        <div className={clsx("flex justify-between")}>
          <p className={clsx("text-text uppercase font-semibold")}>Shipping</p>
          <p className={clsx("font-bold")}>$ {shipping}</p>
        </div>
        <div className={clsx("flex justify-between")}>
          <p className={clsx("text-text uppercase font-semibold")}>
            Vat (included)
          </p>
          <p className={clsx("font-bold")}>$ {vat}</p>
        </div>
        <div className={clsx("flex justify-between mt-5")}>
          <p className={clsx("text-text uppercase font-semibold")}>
            Grand total
          </p>
          <p className={clsx("font-bold text-accentMain")}>$ {grandTotal}</p>
        </div>
      </div>
      <Button
        type="submit"
        variant="accented"
        className={"w-full mt-6"}
        disabled={products.length === 0}
      >
        <PuffLoader loading={submitting} size={30} color="#fff" />
        {!submitting && "Continue & pay"}
      </Button>
    </div>
  );
};

export default CheckoutProducts;
