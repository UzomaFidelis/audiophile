import ProductCategories from "./categories";
import clsx from "clsx";
import { forwardRef } from "react";

type SideBarProps = {
  isOpen: boolean;
};

const Sidebar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ isOpen }: { isOpen: boolean }, ref) => {
    return (
      <div
        className={clsx(
          isOpen
            ? "bg-black/60 pointer-events-auto"
            : "bg-transparent pointer-events-none",
          "absolute absolute-x-center top-[5.7rem] w-full",
          "z-10 flex justify-center h-screen transition-colors duration-500",
          "lg:hidden",
        )}
      >
        <div
          ref={ref}
          className={clsx(
            isOpen ? "translate-x-0" : "-translate-x-[100vw]",
            "px-4 py-20 rounded-lg bg-white shadow-lg overflow-scroll",
            "h-[calc(100vh-6rem)] w-[95%] max-h-[49.2rem] transition-transform",
            "ease-out duration-700",
            "md:max-h-[20.5rem]",
          )}
        >
          <ProductCategories />
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

export default Sidebar;
