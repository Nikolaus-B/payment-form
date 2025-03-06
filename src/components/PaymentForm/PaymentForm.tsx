import { Form, Formik, ErrorMessage } from "formik";

import {
  FieldsWrapper,
  Input,
  InputWrapper,
  Label,
  PaymentButton,
  PaymentFormContainer,
} from "./PaymentForm.styled";
import { useState } from "react";
import { paymentValidationSchema } from "../../schemas/paymentValidationSchema";

const PaymentForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processing = (values: {
    cardNumber: string;
    expirationDate: string;
    cvc: string;
  }) => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <PaymentFormContainer>
      <Formik
        initialValues={{ cardNumber: "", expirationDate: "", cvc: "" }}
        validationSchema={paymentValidationSchema}
        onSubmit={(values) => {
          processing(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Label>Card Number</Label>
            <Input type="text" name="cardNumber" />
            <ErrorMessage name="cardNumber" component={"p"} />

            <FieldsWrapper>
              <InputWrapper>
                <Label>Expiration Date</Label>
                <Input type="text" name="expirationDate" placeholder="MM/YY" />
                <ErrorMessage name="expirationDate" component={"p"} />
              </InputWrapper>
              <InputWrapper>
                <Label>CVC</Label>
                <Input type="text" name="cvc" />
                <ErrorMessage name="cvc" component={"p"} />
              </InputWrapper>
            </FieldsWrapper>

            <PaymentButton
              type="submit"
              disabled={isSubmitting}
              // isLoading={isLoading}
              isProcessing={isProcessing}
            >
              {!isProcessing ? (
                <span>Pay 299.99 UAH</span>
              ) : (
                <span>Processing...</span>
              )}
            </PaymentButton>
          </Form>
        )}
      </Formik>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
