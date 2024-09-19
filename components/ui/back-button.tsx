"use client";

import clsx from "clsx";
import { useRouter } from "next-nprogress-bar";

const BackButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode | string;
}) => {
  const router = useRouter();

  return (
    <button className={clsx(className)} onClick={() => router.back()}>
      {children}
    </button>
  );
};

export default BackButton;
