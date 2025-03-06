import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  max-width: 420px;
`;

export const FieldContainer = styled.div`
  position: relative;
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

export const Error = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -16px;

  font-size: 12px;

  color: red;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #666c7b;
`;

export const SubtractIcon = styled.img`
  position: absolute;
  right: 13px;
  top: 57%;
`;

export const ProcessingContainer = styled.div`
  display: flex;
  gap: 3px;
  /* width: 360px; */

  justify-content: center;
  align-items: center;

  position: absolute;
`;

export const LoaderIcon = styled.img`
  width: 20px;
  height: 20px;

  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const PaymentButton = styled.button<{ isProcessing: boolean }>`
  position: relative;
  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;

  height: 50px;
  background-color: ${({ isProcessing }) =>
    isProcessing ? "hsl(145, 60%, 45%)" : "hsl(145, 60%, 40%)"};
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 120ms ease-out, background-color 120ms ease-out;

  ${({ isProcessing }) => isProcessing && "transform: translateY(-2px);"}

  &:hover {
    background-color: #029c3f;
    transform: translateY(-2px);
  }

  .pay {
    position: absolute;
    width: 100%;
    text-align: center;
    transition: transform 120ms ease-out, opacity 120ms ease-out;
    opacity: ${({ isProcessing }) => (isProcessing ? 0 : 1)};
    transform: ${({ isProcessing }) =>
      isProcessing ? "translateY(-16px)" : "translateY(0)"};
  }

  .processing {
    opacity: ${({ isProcessing }) => (isProcessing ? 1 : 0)};
    transform: ${({ isProcessing }) =>
      isProcessing ? "translateY(-10%)" : "translateY(16px)"};
    display: ${({ isProcessing }) => (isProcessing ? "flex" : "none")};
  }
`;
