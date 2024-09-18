import React from "react";
import clsx from "clsx";

const CountControlButton = ({
  increment,
  decrement,
  count,
  minCount = 0,
  className,
}: {
  increment: () => void;
  decrement: () => void;
  count: number;
  minCount?: number;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center w-32 justify-between bg-gray rounded-md",
        "overflow-hidden",
      )}
    >
      <button
        className={clsx(
          "font-bold px-4 py-3",
          "hover:text-accentMain transition-colors duration-200",
          "active:bg-slate-300",
        )}
        disabled={count === minCount}
        aria-label="Decrease purchase units"
        onClick={decrement}
      >
        -
      </button>
      <span className={clsx("font-bold flex-1 shrink-0 text-center")}>
        {count}
      </span>
      <button
        className={clsx(
          "font-bold px-4 py-3",
          "hover:text-accentMain transition-colors duration-200",
          "active:bg-slate-300",
        )}
        aria-label="Increase purchase units"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default CountControlButton;
