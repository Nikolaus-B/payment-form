import { ApplePayButtonStyled } from "./ApplePayBtn.styled";
import applepay from "/applepay.svg";

const ApplePayBtn = () => {
  return (
    <ApplePayButtonStyled>
      <img src={applepay} alt="Applepay logo" />
    </ApplePayButtonStyled>
  );
};

export default ApplePayBtn;
