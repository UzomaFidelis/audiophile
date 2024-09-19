import { Metadata } from "next";
import clsx from "clsx";
import ProductListItem from "@/components/ui/product-list-item";
import ProductCategories from "@/components/ui/categories";
import PurposeStatement from "@/components/ui/purpose-statement";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Earphones",
};

const EarphonesPage = () => {
  return (
    <>
      <main className={clsx("text-regular centered-flex-col")}>
        <h1
          className={clsx(
            "bg-black text-white uppercase p-8 text-3xl text-center font-bold",
            "tracking-wide w-full",
            "md:p-12 md:text-[2.3rem] md:tracking-wide",
            "lg:pt-28 lg:pb-24 lg:text-[2.5rem] lg:tracking-wider",
          )}
        >
          Earphones
        </h1>
        <div
          className={clsx(
            "py-20 px-6 w-full",
            "md:pt-16, md:pb-48",
            "xl:max-w-[70rem] xl:px-0",
          )}
        >
          <section className={clsx("mb-32", "lg:mb-56")}>
            <ul
              className={clsx("flex flex-col gap-16", "md:gap-20", "lg:gap-28")}
            >
              <ProductListItem
                name="yx1 wireless headphones"
                mobileImageUrl="/images/category-earphones/mobile/image-yx1-earphones.jpg"
                tabletImageUrl="/images/category-earphones/tablet/image-yx1-earphones.jpg"
                desktopImageUrl="/images/category-earphones/desktop/image-yx1-earphones.jpg"
                imageAlt="yx1 wireless earphone"
                productUrl="/product/e1"
                newProduct
              >
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </ProductListItem>
            </ul>
          </section>
          <ProductCategories className={clsx("mb-32", "lg:mb-48")} />
          <PurposeStatement />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EarphonesPage;
