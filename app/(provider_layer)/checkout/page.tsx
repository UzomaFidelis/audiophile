import BackButton from "@/components/ui/back-button";
import { Metadata } from "next";
import clsx from "clsx";
import CheckoutForm from "@/components/ui/checkout-form";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Checkout",
};

const CheckoutPage = () => {
  return (
    <>
      <main className={clsx("bg-slate-50 centered-flex-col")}>
        <div
          className={clsx("w-full px-6 pt-4 pb-24", "xl:max-w-[70rem] xl:px-0")}
        >
          <BackButton
            className={clsx(
              "capitalize font-bold tracking-wide text-text mb-6 inline-block",
              "lg:mb-10",
            )}
          >
            Go back
          </BackButton>
          <div className={clsx("py-4", "lg:py-8")}>
            <h1 className={clsx("font-bold text-[1.8rem] uppercase mb-7")}>
              Checkout
            </h1>
            <CheckoutForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
