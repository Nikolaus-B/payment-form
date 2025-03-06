import { Seperator } from "../../styles/componentsStyles/Separator";
import {
  OrderSummaryContainer,
  OrderSummaryTitle,
  OrderSummaryProduct,
  OrderSummaryTrial,
  OrderSummaryPrice,
} from "./OrderSummary.styled";

const OrderSummary = () => {
  return (
    <OrderSummaryContainer>
      <OrderSummaryTitle>{"Order info <= 100 char."}</OrderSummaryTitle>
      <p>{"Description <= 400 char."}</p>
      <Seperator />
      <p>Lamel Professional Smart Skin Compact Powder</p>
      <OrderSummaryProduct>Пудра для лиця</OrderSummaryProduct>
      <Seperator />
      <OrderSummaryTrial>5 days free</OrderSummaryTrial>
      <OrderSummaryPrice>then 299.99 UAH per 14 days</OrderSummaryPrice>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
