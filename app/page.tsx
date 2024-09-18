import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import ProductCategories from "@/components/ui/categories";
import PurposeStatement from "@/components/ui/purpose-statement";

export default function Home() {
  return (
    <>
      <main className="text-regular">
        <h1 className="sr-only">Audiophile home</h1>
        <div
          className={clsx("pb-[7.5rem]", "md:pb-[12.8rem]", "lg:pb-[12.2rem]")}
        >
          <section
            className={clsx(
              "bg-black centered-flex-col",
              "bg-home-hero-mobile bg-[center_top_99%] bg-cover bg-no-repeat",
              "md:bg-home-hero-tablet md:bg-[length:45rem] bg-no-repeat",
              "lg:bg-home-hero-desktop",
              "lg:bg-[length:70rem] lg:bg-[center_top]",
              "xl:bg-[length:85rem] xl:bg-[center_top_-5rem]",
            )}
          >
            <div
              className={clsx(
                "w-full text-center text-white pt-[5.7rem] pb-[6.7rem] px-6",
                "centered-flex-col",
                "md:pt-[7.8rem] md:pb-[6.7rem] md:px-16",
                "lg:items-start lg:text-left lg:pt-[9.5rem]",
                "xl:max-w-[70rem] xl:px-0",
              )}
            >
              <h2
                className={clsx(
                  "uppercase font-bold text-regular tracking-[0.63em] mb-4 text-gray",
                  "md:mb-2",
                  "lg:mb-3",
                )}
              >
                New product
              </h2>
              <p
                className={clsx(
                  "uppercase font-bold text-4xl tracking-[0.04em] mb-5",
                  "md:text-[3.38rem] md:leading-[1.18] md:mb-6",
                  "lg:max-w-[35rem] lg:text-[3.42rem]",
                )}
              >
                xx99 mark ii headphones
              </p>
              <p
                className={clsx(
                  "tracking-[0.01em] leading-[1.7] mb-10",
                  "md:max-w-[22rem] md:mb-10",
                )}
              >
                Experience natural lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </p>
              <Button variant="accented" asChild>
                <Link href="/product/h1">See product</Link>
              </Button>
            </div>
          </section>
          <div className={clsx("centered-flex-col px-6", "xl:px-0")}>
            <div className={clsx("w-full", "xl:max-w-[70rem]")}>
              <div
                className={clsx(
                  "py-24 mb-7",
                  "md:pt-[12.3rem]",
                  "xl:pt-[12.6rem] xl:mb-6",
                )}
              >
                <section>
                  <h2 className="sr-only">product categories</h2>
                  <ProductCategories />
                </section>
              </div>
              <section className={clsx("mb-[7.6rem]", "md:mb-[7.5rem]")}>
                <div
                  className={clsx(
                    "bg-accentMain centered-flex-col py-14 px-6 rounded-md text-center text-white",
                    "mb-6 overflow-hidden",
                    "md:mb-7",
                    "lg:flex-row lg:text-left lg:items-stretch lg:h-[37rem] lg:mb-12",
                  )}
                >
                  <div
                    className={clsx(
                      "w-full centered-flex-col",
                      "lg:basis-[37rem] lg:shrink-0 lg:relative",
                    )}
                  >
                    <Image
                      src="/images/home/mobile/image-speaker-zx9.png"
                      alt="zx9 speaker"
                      width={170}
                      height={206}
                      className={clsx("mb-6 md:hidden")}
                    />
                    <Image
                      src="/images/home/tablet/image-speaker-zx9.png"
                      alt="zx9 speaker"
                      width={192}
                      height={206}
                      className={clsx("mb-9 hidden md:block lg:hidden")}
                    />
                    <Image
                      src="/images/home/desktop/image-speaker-zx9.png"
                      alt="zx9 speaker"
                      width={410}
                      height={206}
                      className={clsx(
                        "mb-9 hidden lg:block lg:absolute lg:right-20 lg:top-12",
                      )}
                    />
                  </div>
                  <div
                    className={clsx(
                      "w-full centered-flex-col",
                      "lg:items-start lg:pt-[4.2rem] lg:px-4",
                    )}
                  >
                    <p
                      className={clsx(
                        "uppercase text-[2.25rem] font-bold w-[14rem] leading-[1.1]",
                        "tracking-widest mb-6",
                        "md:text-[3.45rem] md:max-w-[22rem] md:leading-[1] md:tracking-[0.12em]",
                        "lg:text-[3.5rem]",
                      )}
                    >
                      zx9 speaker
                    </p>
                    <p
                      className={clsx(
                        "text-regular mb-[4rem]",
                        "md:max-w-[25rem] md:text-base",
                        "lg:mb-[2rem]",
                      )}
                    >
                      Upgrade to premium speakers that are phenomenally buit to
                      deliver truly remarkable sound.
                    </p>
                    <Button variant="filled" asChild>
                      <Link href="/product/s1">see product</Link>
                    </Button>
                  </div>
                </div>
                <div
                  className={clsx(
                    "relative w-full h-80 text-black rounded-md overflow-hidden",
                    "mb-6",
                    "md:h-[20.9rem] md:mb-8",
                    "lg:h-[17.6rem] lg:mb-10",
                    "xl:h-[19.7rem] xl:mb-12",
                  )}
                >
                  <Image
                    src="/images/home/mobile/image-speaker-zx7.jpg"
                    alt="zx7 speaker"
                    fill
                    sizes="100%"
                    className="z-0 md:hidden"
                  />
                  <Image
                    src="/images/home/tablet/image-speaker-zx7.jpg"
                    alt="zx7 speaker"
                    fill
                    sizes="100%"
                    className="z-0 hidden md:block lg:hidden"
                  />
                  <Image
                    src="/images/home/desktop/image-speaker-zx7.jpg"
                    alt="zx7 speaker"
                    fill
                    sizes="100%"
                    className="z-0 hidden lg:block"
                  />
                  <div
                    className={clsx(
                      "absolute w-full h-full z-10 y-centered-flex-col px-6 items-start",
                      "gap-5",
                      "md:px-16",
                      "lg:px-20",
                    )}
                  >
                    <p className={clsx("uppercase font-bold text-[1.75rem]")}>
                      zx7 speaker
                    </p>
                    <Button variant="outliner" size="lg" asChild>
                      <Link href="/product/s2">see product</Link>
                    </Button>
                  </div>
                </div>
                <div
                  className={clsx(
                    "centered-flex-col gap-5",
                    "md:flex-row md:gap-4 md:h-[21rem] md:items-stretch",
                    "lg:h-[18rem] lg:gap-6",
                    "xl:h-[20.1rem]",
                  )}
                >
                  <div
                    className={clsx(
                      "relative w-full h-[12.3rem] rounded-md overflow-hidden",
                      "md:h-auto md:basis-[49%] md:shrink-0",
                    )}
                  >
                    <Image
                      src="/images/home/mobile/image-earphones-yx1.jpg"
                      alt="earphones"
                      fill
                      sizes="100%"
                      className="md:hidden"
                    />
                    <Image
                      src="/images/home/tablet/image-earphones-yx1.jpg"
                      alt="earphones"
                      fill
                      sizes="100%"
                      className="hidden md:block lg:hidden"
                    />
                    <Image
                      src="/images/home/desktop/image-earphones-yx1.jpg"
                      alt="earphones"
                      fill
                      sizes="100%"
                      className="hidden lg:block"
                    />
                  </div>
                  <div
                    className={clsx(
                      "w-full py-10 px-6 bg-lightGray/30 rounded-md",
                      "md:px-10 md:flex md:y-centered-flex-col md:items-start",
                      "lg:px-20",
                    )}
                  >
                    <p className="uppercase font-bold text-[1.75rem] mb-8">
                      yx1 earphones
                    </p>
                    <Button variant="outliner" size="lg" asChild>
                      <Link href="/product/e1">see product</Link>
                    </Button>
                  </div>
                </div>
              </section>
              <PurposeStatement />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
