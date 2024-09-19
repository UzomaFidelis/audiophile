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
            "absolute top-[-0.3rem] right-[-0.3rem] rounded-full bg-accentMain w-5 h-5 text-white",
            "text-xs flex justify-center items-center leading-0",
            "lg:w-7 lg:h-7 lg:text-sm",
          )}
        >
          {totalProducts}
        </span>
      )}
    </button>
  );
};

export default CartButton;
