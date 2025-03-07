import { useState } from "react";
import {
  OrderHeaderContainer,
  OrderHeaderTitle,
  TranslationButton,
  TranslationButtonItem,
  TranslationButtonsList,
} from "./OrderHeader.styled";
import arrowRight from "/arrow-right.svg";

const localization = ["Eng", "Укр"];
const OrderHeader = () => {
  const [activeLanguage, setActiveLanguage] = useState("Eng");

  const handleLanguageChange = (lang: string) => {
    if (window.innerWidth < 1000) {
      setActiveLanguage((prev) => (prev === "Eng" ? "Укр" : "Eng"));
    } else {
      setActiveLanguage(lang);
    }
  };

  return (
    <OrderHeaderContainer>
      <img src={arrowRight} alt="Arrow right icon" />
      <OrderHeaderTitle>Checkout</OrderHeaderTitle>
      <TranslationButtonsList>
        {localization.map((lang) => (
          <TranslationButtonItem
            key={lang}
            className={activeLanguage === lang ? "active" : ""}
          >
            <TranslationButton onClick={() => handleLanguageChange(lang)}>
              {lang}
            </TranslationButton>
          </TranslationButtonItem>
        ))}
      </TranslationButtonsList>
    </OrderHeaderContainer>
  );
};

export default OrderHeader;
