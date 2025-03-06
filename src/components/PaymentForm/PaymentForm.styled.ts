import { Field } from "formik";
import styled from "styled-components";

interface PaymentButtonProps {
  isProcessing?: boolean;
}

export const PaymentFormContainer = styled.div`
  max-width: 420px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 12px;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 44px;
  padding: 10px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 5px;

  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #666c7b;
`;

// const fadeUp = keyframes`
//   from {
//     transform: translateY(16px);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;

// const fadeDown = keyframes`
//   from {
//     transform: translateY(0);
//     opacity: 1;
//   }
//   to {
//     transform: translateY(-16px);
//     opacity: 0;
//   }
// `;

export const PaymentButton = styled.button<PaymentButtonProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;

  background-color: #028837;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 120ms ease-out, transform 120ms ease-out;

  &:hover {
    background-color: #029c3f;
    transform: translateY(-2px);
  }

  ${({ isProcessing }) =>
    isProcessing &&
    `
    background-color: hsl(144, 100%, 34%);
    transform: translateY(-2px);
  `}
`;
