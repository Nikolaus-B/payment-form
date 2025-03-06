// validationSchema.ts
import * as Yup from "yup";

export const paymentValidationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Invalid card number")
    .required("Required"),
  expirationDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "MM/YY format required")
    .required("Required"),
  cvc: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVC")
    .required("Required"),
});
