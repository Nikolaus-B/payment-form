import { Form, Formik } from "formik";
import subtract from "/subtract.svg";
import loader from "/loader.svg";
import {
  Error,
  FieldContainer,
  FieldsWrapper,
  Input,
  InputWrapper,
  Label,
  LoaderIcon,
  PaymentButton,
  PaymentFormContainer,
  ProcessingContainer,
  SubtractIcon,
} from "./PaymentForm.styled";
import { useState } from "react";

import {
  formatCardNumber,
  formatExpirationDate,
} from "../../utils/formatValidations";
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
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <FieldContainer>
              <Label>Card Number</Label>
              <Input
                type="text"
                name="cardNumber"
                placeholder="1234 1234 1234 1234"
                maxLength={19}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const formattedCardNumber = formatCardNumber(e.target.value);
                  setFieldValue("cardNumber", formattedCardNumber);
                }}
              />
              <Error name="cardNumber" component={"p"} />
            </FieldContainer>

            <FieldsWrapper>
              <InputWrapper>
                <FieldContainer>
                  <Label>Expiration Date</Label>
                  <Input
                    type="tel"
                    name="expirationDate"
                    placeholder="MM/YY"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const formattedDate = formatExpirationDate(
                        e.target.value
                      );
                      setFieldValue("expirationDate", formattedDate);
                    }}
                  />
                  <Error name="expirationDate" component={"p"} />
                </FieldContainer>
              </InputWrapper>
              <InputWrapper>
                <FieldContainer>
                  <Label>CVC</Label>
                  <Input
                    type="text"
                    name="cvc"
                    maxLength={4}
                    placeholder="•••"
                    pattern="\d{3,4}"
                  />
                  <Error name="cvc" component={"p"} />
                  <SubtractIcon src={subtract} alt="subtract icon" />
                </FieldContainer>
              </InputWrapper>
            </FieldsWrapper>

            <PaymentButton
              type="submit"
              disabled={isSubmitting}
              isProcessing={isProcessing}
            >
              <span className="pay">Pay 299.99 UAH</span>
              <ProcessingContainer className="processing">
                <LoaderIcon src={loader} alt="loader icon" />
                <span>Processing payment</span>
              </ProcessingContainer>
            </PaymentButton>
          </Form>
        )}
      </Formik>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
