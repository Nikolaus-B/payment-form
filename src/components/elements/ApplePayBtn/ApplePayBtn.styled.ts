import styled from "styled-components";

export const ApplePayButtonStyled = styled.button`
  padding: 14px 186px;
  border-radius: 3px;
  background-color: #000000;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  @media (max-width: 419px) {
    padding: 14px 140px;
  }

  &:hover {
    opacity: 0.85;
    animation: pulse 1.5s infinite;
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;
