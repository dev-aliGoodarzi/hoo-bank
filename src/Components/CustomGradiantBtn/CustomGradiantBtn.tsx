// React
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
// React
// CSS
import styles from "./CustomGradiantBtn.module.css";
// CSS

type CustomGradiantBtnProps = {
  haveArrow?: boolean;
  innerText1?: string;
  innerText2?: string;
  isFullRounded?: boolean;
  classInner?: string;
  classOuter?: string;
  styleOuter?: React.CSSProperties;
  styleInner?: React.CSSProperties;
};
const CustomGradiantBtn: React.FunctionComponent<CustomGradiantBtnProps> = ({
  haveArrow,
  innerText1,
  innerText2,
  isFullRounded,
  classInner,
  classOuter,
  styleOuter,
  styleInner,
}) => {
  return (
    <button
      className={`${
        styles.orderBtn
      } flex flex-col items-start justify-center mr-72
      
      ${isFullRounded && "rounded-full"}
      ${classOuter}
  `}
      style={styleOuter}
    >
      <div
        className={`${styles.inner} flex flex-col items-center justify-center 
        ${isFullRounded && "rounded-full"}
        ${classInner}
      `}
        style={styleInner}
      >
        <span
          className={`${styles.gradient} top flex flex-row items-center justify-center text-lg 
          `}
        >
          {innerText1 && <>{innerText1}&nbsp;</>}
          {haveArrow && <BsArrowUpRight className="w-3 h-3 text-white" />}
        </span>
        <span className={`${styles.gradient} text-white text-lg`}>
          {innerText2}
        </span>
      </div>
    </button>
  );
};

export default CustomGradiantBtn;
