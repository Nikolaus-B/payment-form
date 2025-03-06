import { Form, Formik } from "formik";

import {
  Error,
  FieldContainer,
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
            <FieldContainer>
              <Label>Card Number</Label>
              <Input
                type="text"
                name="cardNumber"
                placeholder="1234 1234 1234 1234 "
              />
              <Error name="cardNumber" component={"p"} />
            </FieldContainer>

            <FieldsWrapper>
              <InputWrapper>
                <FieldContainer>
                  <Label>Expiration Date</Label>
                  <Input
                    type="text"
                    name="expirationDate"
                    placeholder="MM/YY"
                  />
                  <Error name="expirationDate" component={"p"} />
                </FieldContainer>
              </InputWrapper>
              <InputWrapper>
                <FieldContainer>
                  <Label>CVC</Label>
                  <Input type="text" name="cvc" placeholder="•••" />
                  <Error name="cvc" component={"p"} />
                </FieldContainer>
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
