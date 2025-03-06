import styled from "styled-components";

export const OrderSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;

  max-width: 872px;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  max-width: 420px;
`;

export const PaymentSeparator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;

  margin-top: 24px;
`;

export const PaymentSeparatorText = styled.p`
  color: #666c7b;
`;

export const PlanInfoContainer = styled.div`
  padding: 12px 16px;
  margin-top: 8px;

  border: 1px solid #e4e6ec;
  border-radius: 8px;
`;

export const PlanInfo = styled.p`
  font-size: 12px;
  line-height: 16px;
  span {
    font-weight: 600;
  }
`;
