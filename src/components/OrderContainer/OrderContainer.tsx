import { Seperator } from "../../styles/componentsStyles/Separator";
import ApplePayBtn from "../elements/ApplePayBtn/ApplePayBtn";
import OrderSummary from "../OrderSummary/OrderSummary";
import PaymentForm from "../PaymentForm/PaymentForm";
import {
  CardContainer,
  OrderSectionContainer,
  PaymentSeparator,
  PaymentSeparatorText,
  PlanInfo,
  PlanInfoContainer,
  Price,
  PriceAdditionalInfo,
} from "./OrderContainer.styled";

const OrderContainer = () => {
  return (
    <>
      <OrderSectionContainer>
        <CardContainer>
          <Price>5 days free</Price>
          <PriceAdditionalInfo>then 299.99 UAH per 14 days</PriceAdditionalInfo>
          <ApplePayBtn />
          <PaymentSeparator>
            <Seperator />
            <PaymentSeparatorText>or pay with card</PaymentSeparatorText>
            <Seperator />
          </PaymentSeparator>
          <PaymentForm />
          <PlanInfoContainer>
            <PlanInfo>
              You'll have your <span>Plan Pro during 1 year</span>. After this
              period of time, your plan will be{" "}
              <span>automatically renewed</span> with its original price without
              any discounts applied.
            </PlanInfo>
          </PlanInfoContainer>
        </CardContainer>

        <OrderSummary />
      </OrderSectionContainer>
    </>
  );
};

export default OrderContainer;
