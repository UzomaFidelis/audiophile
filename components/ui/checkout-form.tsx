"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import country from "country-list-js";
import { useTransition, useState } from "react";

// Shadcn form components
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormData, formSchema } from "@/lib/validation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import CheckoutProducts from "./checkout-products";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import CheckoutSuccessModal from "./checkout-success-modal";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { selectProducts, selectTotalPrice } from "@/lib/slices/cartSlice";
import { commafy } from "@/lib/util-functions";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [isSubmitPending, startTransition] = useTransition();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const productsInCart = useAppSelector(selectProducts);
  const totalPrice = useAppSelector(selectTotalPrice);
  const shippingCost = 50;
  const vat = parseFloat((0.2 * totalPrice).toFixed(2));
  const grandTotal = totalPrice + shippingCost + vat;

  const totalPriceStr = commafy(totalPrice);
  const shippingCostStr = commafy(shippingCost);
  const vatStr = commafy(vat);
  const grandTotalStr = commafy(grandTotal);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "United States",
      paymentMethod: "e-money",
    },
  });
  const { handleSubmit, control, watch } = form;

  const countries: string[] = country.names().sort();

  async function onSubmit(_data: FormData) {
    startTransition(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            setIsSubmitSuccess(true);
            resolve();
          }, 2000);
        }),
    );
  }

  return (
    <Provider store={store}>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx("text-regular", "lg:flex lg:gap-8 lg:items-start")}
        >
          <div
            className={clsx(
              "min-h-[76.9rem]",
              "md:min-h-[58.3rem]",
              "lg:bg-white lg:rounded-lg lg:p-6 lg:min-h-[63.3rem]",
              "lg:flex-1",
            )}
          >
            <fieldset>
              <legend
                className={clsx(
                  "uppercase font-bold text-regular text-accentMain mb-6",
                )}
              >
                Billing Details
              </legend>
              <div
                className={clsx(
                  "grid grid-cols-1 gap-y-3 mb-7",
                  "md:grid-cols-2 md:gap-x-4",
                )}
              >
                <FormField
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          Name
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input {...field} placeholder="Alexei Ward" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          Email Address
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input {...field} placeholder="alexei@email.com" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          Phone Number
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input {...field} placeholder="+1 202-555-0136" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend
                className={clsx(
                  "uppercase font-bold text-regular text-accentMain mb-6",
                )}
              >
                Shipping Info
              </legend>
              <div
                className={clsx(
                  "grid grid-cols-1 gap-y-3 mb-7",
                  "md:grid-cols-2 md:gap-x-4",
                )}
              >
                <FormField
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          Address
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input {...field} placeholder="1137 Williams Avenue" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="zipCode"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          Zip Code
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input {...field} placeholder="10001" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          City
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Input {...field} placeholder="New York" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <div
                        className={clsx("flex justify-between items-center")}
                      >
                        <FormLabel className={clsx("font-bold")}>
                          Country
                        </FormLabel>
                        <FormMessage />
                      </div>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={(val) => field.onChange(val)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="United States" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            <fieldset className={clsx("mb-8")}>
              <legend
                className={clsx(
                  "uppercase font-bold text-regular text-accentMain mb-3",
                )}
              >
                Payment Details
              </legend>
              <div
                className={clsx(
                  "grid grid-cols-1 gap-y-3 mb-7",
                  "md:grid-cols-2 md:gap-x-4",
                )}
              >
                <FormField
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={clsx("font-bold")}>
                        Payment Method
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          defaultValue={field.value}
                          onValueChange={(val) => {
                            field.onChange(val);
                            setPaymentMethod(val);
                          }}
                        >
                          <FormItem>
                            <FormLabel
                              className={clsx(
                                "px-4 py-5 border-2 border-lightGray/40 flex gap-4 items-center",
                                "rounded-lg",
                              )}
                              onClick={() => setPaymentMethod("e-money")}
                            >
                              <FormControl>
                                <RadioGroupItem value="e-money" />
                              </FormControl>
                              <span>e-Money</span>
                            </FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormLabel
                              className={clsx(
                                "px-4 py-5 border-2 border-lightGray/40 flex gap-4 items-center",
                                "rounded-lg",
                              )}
                            >
                              <FormControl>
                                <RadioGroupItem value="payment-on-delivery" />
                              </FormControl>
                              <span>Cash on Delivery</span>
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {paymentMethod === "e-money" ? (
                <div
                  className={clsx(
                    "grid grid-cols-1 gap-y-3",
                    "md:grid-cols-2 md:gap-x-4",
                  )}
                >
                  <FormField
                    name="eMoneyNumber"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <div
                          className={clsx("flex justify-between items-center")}
                        >
                          <FormLabel className={clsx("font-bold")}>
                            e-Money Number
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input {...field} placeholder="238531993" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="eMoneyPin"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <div
                          className={clsx("flex justify-between items-center")}
                        >
                          <FormLabel className={clsx("font-bold")}>
                            e-Money PIN
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input {...field} placeholder="8891" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              ) : (
                <div className={clsx("flex items-center gap-5")}>
                  <Image
                    src="/images/checkout/icon-cash-on-delivery.svg"
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden
                  />
                  <p className={clsx("text-text flex-1")}>
                    The &#x2018;Cash on Delivery&#x2019; option enables you to
                    play in cash when our delivery courier arrives at your
                    residence. Just make sure your address is correct so that
                    your order will not be cancelled.
                  </p>
                </div>
              )}
            </fieldset>
          </div>
          <CheckoutProducts
            products={productsInCart}
            total={totalPriceStr}
            shipping={shippingCostStr}
            vat={vatStr}
            grandTotal={grandTotalStr}
            submitting={isSubmitPending}
          />
        </form>
      </Form>
      {productsInCart.length > 0 && isSubmitSuccess && (
        <CheckoutSuccessModal
          firstProduct={productsInCart[0]}
          productsNumber={productsInCart.length}
          grandTotal={grandTotalStr}
        />
      )}
    </Provider>
  );
};

export default CheckoutForm;
