import { Metadata } from "next";
import clsx from "clsx";
import ProductListItem from "@/components/ui/product-list-item";
import ProductCategories from "@/components/ui/categories";
import PurposeStatement from "@/components/ui/purpose-statement";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Speakers",
};

const SpeakersPage = () => {
  return (
    <>
      <main className={clsx("text-regular centered-flex-col")}>
        <h1
          className={clsx(
            "bg-black text-white uppercase p-8 text-3xl text-center font-bold",
            "tracking-wide w-full",
            "md:pt-28 md:pb-24 md:text-[2.5rem] md:tracking-wider",
          )}
        >
          Speakers
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
                name="zx9 speaker"
                mobileImageUrl="/images/category-speakers/mobile/image-zx9.jpg"
                tabletImageUrl="/images/category-speakers/tablet/image-zx9.jpg"
                desktopImageUrl="/images/category-speakers/desktop/image-zx9.jpg"
                imageAlt="zx9 speaker"
                productUrl="/product/s1"
                newProduct
              >
                Upgrade your sound system with the all new ZX9 active speaker.
                It&apos;s a bookshelf speaker system that offers truly wireless
                connectivity - creating new possibilities for more pleasing and
                practical audio setups.
              </ProductListItem>
              <ProductListItem
                name="zx7 speaker"
                mobileImageUrl="/images/category-speakers/mobile/image-zx7.jpg"
                tabletImageUrl="/images/category-speakers/tablet/image-zx7.jpg"
                desktopImageUrl="/images/category-speakers/desktop/image-zx7.jpg"
                imageAlt="zx7 speaker"
                productUrl="/product/s2"
                newProduct
              >
                Stream high quality sound wirelessly with minimal to no loss.
                The ZX7 speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
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

export default SpeakersPage;
