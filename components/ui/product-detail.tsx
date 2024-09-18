"use client";

import ProductPriceDetail from "./product-price-details";
import clsx from "clsx";
import { Product } from "@/lib/data";
import ImageGallery from "./image-gallery";
import SimilarProductsCollection from "./similar-products";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <Provider store={store}>
      <ProductPriceDetail product={product} />
      <div className={clsx("mb-[6.2rem]", "lg:flex lg:mb-[8.3rem]")}>
        <div
          className={clsx(
            "mb-[5.4rem]",
            "lg:shrink-0 lg:basis-[67%] lg:pr-24 lg:mb-0",
            "lg:pr-36",
          )}
        >
          <h2
            className={clsx(
              "uppercase font-bold text-2xl mb-6",
              "md:text-[2rem] md:mb-7",
            )}
          >
            Features
          </h2>
          {product.features.map((feature, idx) => (
            <p
              key={idx}
              className={clsx("text-text mb-6 pr-2 leading-[1.68]", "xl:pr-0")}
            >
              {feature}
            </p>
          ))}
        </div>
        <div>
          <h2
            className={clsx(
              "uppercase font-bold text-2xl mb-6",
              "md:text-[2rem] md:mb-7",
            )}
          >
            In the box
          </h2>
          {product.boxContents.map((content, idx) => (
            <p key={idx} className={clsx("mb-2 flex gap-2 items-center")}>
              <span
                className={clsx(
                  "text-accentMain font-bold shrink-0 w-[1.5rem]",
                )}
              >
                {content.quantity}x
              </span>
              <span className={clsx("text-text")}>{content.item}</span>
            </p>
          ))}
        </div>
      </div>
      <ImageGallery
        imageOne={product.gallery.imageOne}
        imageTwo={product.gallery.imageTwo}
        imageThree={product.gallery.imageThree}
        className={clsx("mb-[7.4rem]")}
      />
      <SimilarProductsCollection
        className={clsx("mb-32", "md:mb-40", "xl:mb-44")}
        product={product}
      />
    </Provider>
  );
};

export default ProductDetail;
