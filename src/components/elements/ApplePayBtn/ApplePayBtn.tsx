import { ApplePayButtonStyled } from "./ApplePayBtn.styled";

const ApplePayBtn = () => {
  return (
    <ApplePayButtonStyled>
      <svg width="49" height="20">
        <use href="/src/assets/sprite.svg#applepay" />
      </svg>
    </ApplePayButtonStyled>
  );
};

export default ApplePayBtn;
