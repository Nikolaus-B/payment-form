import styled from "styled-components";

export const OrderSection = styled.section`
  max-width: 872px;
  margin: 20px auto 0;
`;

export const OrderCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  justify-content: center;

  @media (max-width: 999px) {
    align-items: center;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  max-width: 420px;
`;

export const Price = styled.p`
  font-size: 24px;
  line-height: 32px;

  font-weight: 600;

  text-align: center;

  @media (min-width: 999px) {
    line-height: 40px;
    text-align: left;
  }
`;

export const PriceAdditionalInfo = styled.p`
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  margin-bottom: 24px;

  @media (min-width: 999px) {
    line-height: 24px;
    text-align: left;
  }
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
