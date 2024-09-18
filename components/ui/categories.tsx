"use client";

import clsx from "clsx";
import CategoryListItem from "./category-list-item";
import { usePathname } from "next/navigation";

const ProductCategories = ({ className }: { className?: string }) => {
  const currentPage = usePathname();
  const borderStyle = "lg:border-[2px] lg:border-dashed lg:border-accentMain";

  return (
    <ul
      className={clsx(
        "flex flex-col gap-16",
        "md:flex-row md:gap-3",
        className || "",
      )}
    >
      <CategoryListItem
        name="headphones"
        imageUrl="/images/shared/desktop/image-headphones.png"
        imageAlt="headphone"
        pageUrl="/category/headphones"
        className={clsx(
          currentPage === "/category/headphones" ? borderStyle : "",
        )}
      />
      <CategoryListItem
        name="speakers"
        imageUrl="/images/shared/desktop/image-speakers.png"
        imageAlt="speaker"
        pageUrl="/category/speakers"
        className={clsx(
          currentPage === "/category/speakers" ? borderStyle : "",
        )}
      />
      <CategoryListItem
        name="earphones"
        imageUrl="/images/shared/desktop/image-earphones.png"
        imageAlt="earphone"
        pageUrl="/category/earphones"
        className={clsx(
          currentPage === "/category/earphones" ? borderStyle : "",
        )}
      />
    </ul>
  );
};

export default ProductCategories;
