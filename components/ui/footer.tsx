import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";

const Footer = () => {
  return (
    <footer className="bg-black centered-flex-col">
      <div
        className={clsx(
          "centered-flex-col text-center text-white text-regular py-12 px-6",
          "relative w-full",
          "before:absolute before:h-1 before:top-0 before:w-[8rem] before:bg-accentMain",
          "before:absolute-x-center",
          "md:py-14 before:md:left-[1.4rem] before:md:translate-x-0 md:text-left",
          "md:items-start",
          "lg:py-[4.5rem]",
          "xl:px-0 xl:max-w-[70rem] xl:before:left-0",
        )}
      >
        <div
          className={clsx(
            "w-full centered-flex-col",
            "md:flex-row md:justify-between md:items-center",
          )}
        >
          <Link href="/">
            <Image
              src="/images/shared/desktop/logo.svg"
              alt="audiophile logo"
              width={145}
              height={27}
              className={clsx("mb-12")}
            />
          </Link>
          <ul
            className={clsx(
              "uppercase text-sm tracking-widest font-bold flex flex-col gap-4",
              "mb-12",
              "md:flex-row md:gap-8",
            )}
          >
            <li className={clsx()}>
              <Link href="/" className={clsx("hover-custom-underline")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/category/headphones"
                className={clsx("hover-custom-underline")}
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                href="/category/speakers"
                className={clsx("hover-custom-underline")}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/category/earphones"
                className={clsx("hover-custom-underline")}
              >
                Earphones
              </Link>
            </li>
          </ul>
        </div>
        <p
          className={clsx(
            "leading-[1.7] mb-12 text-textLight",
            "md:max-w-[30rem]",
          )}
        >
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div
          className={clsx(
            "centered-flex-col flex-col-reverse",
            "md:flex-row-reverse md:w-full md:justify-between",
          )}
        >
          <ul className={clsx("flex gap-4 items-center", "lg:gap-6")}>
            <li>
              <Link href="" aria-label="audiophile facebook page">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="" aria-label="audiophile x page">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="" aria-label="audiophile instagram page">
                <Instagram />
              </Link>
            </li>
          </ul>
          <p className={clsx("mb-12 text-textLight", "md:mb-0")}>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
