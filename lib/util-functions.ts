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
      (product) =>
        currentProduct.category !== product.category &&
        product.category !== "Earphones",
    );
    const randomProduct = candidateProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 - sameCategoryProducts.length);

    return [...sameCategoryProducts, ...randomProduct];
  }
  return sameCategoryProducts.slice(0, 2);
}

export function commafy(price: number) {
  var priceStr = price.toString();
  if (priceStr) {
    priceStr = priceStr.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  return priceStr;
}
