import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import ArrowRight from "../icons/arrow-right";

type CategoryItemProps = {
  name: string;
  imageUrl: string;
  imageAlt: string;
  pageUrl: string;
  className?: string;
};

const CategoryListItem = ({
  name,
  imageUrl,
  imageAlt,
  pageUrl,
  className,
}: CategoryItemProps) => {
  return (
    <li
      className={clsx(
        "w-full pt-20 pb-6 rounded-md bg-gray flex flex-col items-center justify-center",
        "relative group",
        className || "",
      )}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={140}
        height={140}
        className={clsx(
          "absolute absolute-x-center top-[-3.1rem]",
          "lg:group-hover:scale-[1.7] lg:group-hover:-translate-y-4",
          "transition-transform duration-300",
          className ? "lg:scale-[1.7] lg:-translate-y-4" : "",
        )}
      />
      <p
        className={clsx(
          "uppercase font-bold text-regular tracking-[0.07em] mb-5",
          "lg:text-lg",
        )}
      >
        {name}
      </p>
      <Link
        href={pageUrl}
        className={clsx("uppercase flex gap-4 items-center text-[0.8rem] peer")}
      >
        <span className="hover-custom-underline custom-underline-sm">shop</span>
        <ArrowRight />
      </Link>
    </li>
  );
};

export default CategoryListItem;
