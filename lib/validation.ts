import { z } from "zod";
import { capitalizeString } from "./util-functions";

const formSchema = z
  .object({
    name: z.string({ required_error: "Name is required" }).trim(),
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email("Invalid email address"),
    phone: z
      .string({ required_error: "Phone number is required" })
      .min(10, "Must have at least 10 digits"),
    address: z.string({ required_error: "Address is required" }),
    zipCode: z
      .string({ required_error: "Zip code is required" })
      .min(5, "Invalid Zip code"),
    country: z.string({ required_error: "Country is required" }),
    city: z.string({ required_error: "City is required" }),
    paymentMethod: z.enum(["e-money", "payment-on-delivery"]),
    eMoneyNumber: z
      .string({ required_error: "e-money number is required" })
      .min(9, "Invalid e-Money Number")
      .optional(),
    eMoneyPin: z
      .string({ required_error: "e-money PIN is required" })
      .length(4, "Invalid Pin")
      .optional(),
  })
  .partial()
  .superRefine((val, ctx) => {
    // If e-money is the payment method chosen eMoneyNumber and eMoneyPin are required
    const requiredFields = [
      "val.name",
      "val.email",
      "val.phone",
      "val.address",
      "val.zipCode",
      "val.country",
      "val.city",
      "val.paymentMethod",
    ];
    requiredFields.forEach((field) => {
      if (!eval(field)) {
        const fieldName = field.split(".")[1];
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Field is required`,
          path: [fieldName],
        });
      }
    });

    if (val.paymentMethod === "e-money") {
      const conditionalRequired = ["val.eMoneyNumber", "val.eMoneyPin"];
      for (const field of conditionalRequired) {
        if (!eval(field)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Field is required",
            path: [field.split(".")[1]],
          });
        }
      }
    }
    return true;
  }); //E money Number and Pin are required when e-money payment method is selected

//
type FormData = z.infer<typeof formSchema>;

export { formSchema, type FormData };
