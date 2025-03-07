import styled from "styled-components";

export const OrderHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    padding-right: 30px;
  }
`;

export const OrderHeaderTitle = styled.h5`
  margin-left: 75px;
  margin-right: auto;

  @media (min-width: 328px) and (max-width: 420px) {
    margin-left: 120px;
    margin-right: auto;
  }

  @media (min-width: 452px) and (max-width: 999px) {
    margin-left: calc(35vw + 50px);
    margin-right: auto;
  }

  @media (min-width: 1000px) {
    margin-left: 2px;
    margin-right: auto;
  }
`;

export const TranslationButtonsList = styled.ul`
  display: flex;
  gap: 8px;

  @media (max-width: 999px) {
    & > li:not(.active) {
      display: none;
    }
    gap: 0px;
  }
`;

export const TranslationButtonItem = styled.li`
  &.active {
    button {
      color: #363a43;
    }
  }
`;

export const TranslationButton = styled.button`
  background-color: transparent;
  border: none;
  color: #b0b4be;
`;
