import clsx from "clsx";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { selectNumberOfProducts } from "@/lib/slices/cartSlice";

const CartButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  const totalProducts = useAppSelector(selectNumberOfProducts);

  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "close cart" : "open cart"}
      className={clsx(
        "w-12 h-12 flex justify-center items-center group relative",
        "rounded-full before:absolute before:absolute-center before:bg-accentMain/50",
        "before:w-full before:h-full before:rounded-full before:transition-transform",
        isOpen ? "before:scale-100" : "before:scale-0",
      )}
    >
      <Image
        src="/images/shared/desktop/icon-cart.svg"
        alt=""
        width={24}
        height={24}
        aria-hidden
        className={clsx(
          "group-active:scale-75 transition-transform",
          "absolute w-6 h-6",
        )}
      />
      {totalProducts && (
        <span
          className={clsx(
            "absolute top-[-0.3rem] right-[-0.3rem] rounded-full bg-accentMain w-7 h-7 text-white",
            "text-sm flex justify-center items-center",
          )}
        >
          {totalProducts}
        </span>
      )}
    </button>
  );
};

export default CartButton;
