import clsx from "clsx";
import { products } from "@/lib/data";
import ProductCategories from "@/components/ui/categories";
import PurposeStatement from "@/components/ui/purpose-statement";
import Footer from "@/components/ui/footer";
import ProductDetail from "@/components/ui/product-detail";
import BackButton from "@/components/ui/back-button";
import { getCurrentProduct } from "@/lib/util-functions";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.product_id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  let currentProduct = await getCurrentProduct(params.id);

  return {
    title: currentProduct.name.toUpperCase(),
  };
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const currentProduct = await getCurrentProduct(params.id);

  return (
    <>
      <main
        className={clsx("text-regular pb-24 centered-flex-col", "md:pb-32")}
      >
        <div
          className={clsx(
            "px-6 py-4",
            "md:py-7",
            "lg:py-[4.9rem]",
            "xl:max-w-[70rem] xl:px-0",
          )}
        >
          <BackButton
            className={clsx(
              "capitalize font-bold tracking-wide text-text mb-6 inline-block",
              "lg:mb-14",
            )}
          >
            Go back
          </BackButton>
          <h1 className="sr-only">{currentProduct.name}</h1>
          <ProductDetail product={currentProduct} />
          <ProductCategories
            className={clsx("mb-[7.6rem]", "md:mb-40", "lg:mb-32")}
          />
          <PurposeStatement />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
