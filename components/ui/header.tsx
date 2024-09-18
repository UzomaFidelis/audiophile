"use client";

import { useState, useEffect, useRef } from "react";
import { Slant as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";
import Cart from "./cart";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import CartButton from "./cart-button";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  const sideBarRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSideBarOpen(false);
    setIsCartOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isSideBarOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  useEffect(() => {
    const handleOutsideNavClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (
          isSideBarOpen &&
          sideBarRef.current &&
          !e.composedPath().includes(sideBarRef.current)
        ) {
          setIsSideBarOpen(false);
        }
      }
    };
    const handleOutsideCartClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (
          isCartOpen &&
          cartRef.current &&
          !e.composedPath().includes(cartRef.current)
        ) {
          setIsCartOpen(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideNavClick);
    document.addEventListener("click", handleOutsideCartClick);

    return () => {
      document.removeEventListener("click", handleOutsideNavClick);
      document.removeEventListener("click", handleOutsideCartClick);
    };
  }, [isSideBarOpen, isCartOpen]);

  return (
    <Provider store={store}>
      <header className="bg-black border-b border-b-lightGray/20 centered-flex-col">
        <div
          className={clsx(
            "flex justify-between items-center py-[1.3rem] px-3 w-full",
            "relative",
            "md:px-6",
            "xl:max-w-[70rem] xl:px-0",
          )}
        >
          <button
            className={clsx("lg:hidden")}
            aria-label={isSideBarOpen ? "close sidebar" : "open sidebar"}
          >
            <Hamburger
              size={24}
              color="#fff"
              toggled={isSideBarOpen}
              toggle={setIsSideBarOpen}
            />
          </button>
          <Link href="/">
            <Image
              src="/images/shared/desktop/logo.svg"
              alt="audiophile logo"
              width={145}
              height={27}
              priority
            />
          </Link>
          <Navbar />
          <CartButton
            isOpen={isCartOpen}
            toggle={() => setIsCartOpen((prevState) => !prevState)}
          />
          <Cart isOpen={isCartOpen} ref={cartRef} />
          <Sidebar isOpen={isSideBarOpen} ref={sideBarRef} />
        </div>
      </header>
    </Provider>
  );
};

export default Header;
