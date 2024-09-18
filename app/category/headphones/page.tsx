import { Metadata } from "next";
import clsx from "clsx";
import ProductListItem from "@/components/ui/product-list-item";
import ProductCategories from "@/components/ui/categories";
import PurposeStatement from "@/components/ui/purpose-statement";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "headphones",
};

const HeadphonesPage = () => {
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
          Headphones
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
                name="xx99 mark II headphones"
                mobileImageUrl="/images/category-headphones/mobile/image-xx99-mark-two.jpg"
                tabletImageUrl="/images/category-headphones/tablet/image-xx99-mark-two.jpg"
                desktopImageUrl="/images/category-headphones/desktop/image-xx99-mark-two.jpg"
                imageAlt="xx99 mark II headphone"
                productUrl="/product/h1"
                newProduct
              >
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </ProductListItem>
              <ProductListItem
                name="xx99 mark I headphones"
                mobileImageUrl="/images/category-headphones/mobile/image-xx99-mark-one.jpg"
                tabletImageUrl="/images/category-headphones/tablet/image-xx99-mark-one.jpg"
                desktopImageUrl="/images/category-headphones/desktop/image-xx99-mark-one.jpg"
                imageAlt="xx99 mark I headphone"
                productUrl="/product/h2"
              >
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </ProductListItem>

              <ProductListItem
                name="xx59 headphones"
                mobileImageUrl="/images/category-headphones/mobile/image-xx59.jpg"
                tabletImageUrl="/images/category-headphones/tablet/image-xx59.jpg"
                desktopImageUrl="/images/category-headphones/desktop/image-xx59.jpg"
                imageAlt="xx59 headphone"
                productUrl="/product/h3"
              >
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
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

export default HeadphonesPage;
