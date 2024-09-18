"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPage = usePathname();
  const borderStyle = "text-accentMain";

  return (
    <nav className={clsx("sr-only", "lg:not-sr-only")}>
      <ul
        className={clsx(
          "uppercase text-sm text-white tracking-widest font-bold flex gap-4",
          "md:flex-row md:gap-8",
        )}
      >
        <li className={clsx()}>
          <Link
            href="/"
            className={clsx(
              "hover-custom-underline transition-colors",
              currentPage === "/" ? borderStyle : "",
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/category/headphones"
            className={clsx(
              "hover-custom-underline transition-colors",
              currentPage === "/category/headphones" ? borderStyle : "",
            )}
          >
            Headphones
          </Link>
        </li>
        <li>
          <Link
            href="/category/speakers"
            className={clsx(
              "hover-custom-underline transition-colors",
              currentPage === "/category/speakers" ? borderStyle : "",
            )}
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            href="/category/earphones"
            className={clsx(
              "hover-custom-underline transition-colors",
              currentPage === "/category/earphones" ? borderStyle : "",
            )}
          >
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
