import * as Yup from "yup";

export const paymentValidationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^(\d{4}\s){3}\d{4}$/, "Invalid card number")
    .test("card-number-length", "Card number must be 16 digits", (value) => {
      if (!value) return false;
      return value.replace(/\s+/g, "").length === 16;
    })
    .required("Required"),
  expirationDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "MM/YY format required")
    .test("expiration-date", "Invalid expiration date", (value) => {
      if (!value) return true;

      const [month, year] = value.split("/");
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear() % 100;

      if (parseInt(year) < currentYear) return false;

      if (parseInt(year) === currentYear && parseInt(month) < currentMonth)
        return false;

      return true;
    })
    .required("Required"),
  cvc: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVC")
    .required("Required"),
});
