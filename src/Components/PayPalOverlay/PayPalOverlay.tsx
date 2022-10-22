// React
import React from "react";
import { paypalIcon } from "../../assets";
import CustomGradiantBtn from "../CustomGradiantBtn/CustomGradiantBtn";
// React
// CSS
import styles from "./PayPalOverlay.module.css";
// CSS
const PayPalOverlay = () => {
  return (
    <div
      className={`${styles.paypalOverlay} flex flex-col items-center justify-start absolute -top-36 -right-28 rounded-xl box-border p-5`}
    >
      <div
        className={`${styles.top} flex flex-row items-center justify-start w-full`}
      >
        <div className="imgHolder bg-white rounded-full w-14 h-14 flex items-center justify-center">
          <img src={paypalIcon} alt="" />
        </div>
        <div className="left flex flex-col items-start justify-between ml-3">
          <span className="text-white font-semibold">Paypal</span>
          <span className="text-gray-400">Checkout</span>
        </div>
      </div>

      <div
        className={`${styles.totalContainer} flex flex-row items-center justify-start w-full mt-6`}
      >
        <div className="left flex flex-col items-start justify-center ml-1">
          <span className="text-gray-400">Total</span>
          <span className="text-white font-semibold">$210</span>
        </div>
        <CustomGradiantBtn
          haveArrow={false}
          innerText1={""}
          innerText2={"Change"}
          isFullRounded={false}
          classOuter={"2xl:w-20 2xl:h-8 rounded-lg "}
          classInner={"rounded-lg "}
          styleInner={{ position: "absolute" }}
          styleOuter={{ position: "absolute", left: "6rem", top: "25%" }}
        />
      </div>

      <button className={`${styles.payBtn} mt-6 px-11 py-1  rounded-lg`}>
        Make&nbsp;Peyment
      </button>
    </div>
  );
};

export default PayPalOverlay;
