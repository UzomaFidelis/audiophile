import { notFound } from "next/navigation";
import { products } from "./data";
import type { Product } from "./data";

export function getSimilarProducts(currentProduct: Product): Product[] {
  const sameCategoryProducts = products.filter(
    (product) =>
      currentProduct.category === product.category &&
      currentProduct.product_id !== product.product_id,
  );

  if (sameCategoryProducts.length < 3) {
    const candidateProducts = products.filter(
      (product) => currentProduct.category !== product.category,
    );
    const randomProduct = candidateProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 - sameCategoryProducts.length);

    return [...sameCategoryProducts, ...randomProduct];
  }
  return sameCategoryProducts.slice(0, 2);
}

export const getCurrentProduct = async (id: string) => {
  let product = products.find((product) => product.product_id === id);

  if (!product) {
    notFound();
  }
  return product;
};

export function commafy(price: number) {
  return price.toLocaleString("en-US");
}
