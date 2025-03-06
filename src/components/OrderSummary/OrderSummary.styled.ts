import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  max-width: 388px;
  height: fit-content;
  padding: 12px 16px 16px;

  border-radius: 8px;
  background-color: #f7f7f9;

  @media (min-width: 1000px) {
    max-width: 356px;
    padding: 32px 32px 40px;
  }
`;

export const OrderSummaryTitle = styled.h6`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 24px;
`;

export const OrderSummaryProduct = styled.p`
  font-size: 12px;
  color: #797e8b;

  margin-top: 2px;
`;

export const OrderSummaryTrial = styled.h6`
  font-size: 16px;
  text-align: right;
  font-weight: 600;
`;

export const OrderSummaryPrice = styled.p`
  text-align: right;
`;
