import React from "react";
import { appleIcon, paypalIcon, shopifyIcon, visaIcon } from "../../assets";
import { I_IconsArray } from "../../Models/interfaces";
import styles from "./PayMethods.module.css";
const PayMethods = ({}) => {
  const iconsForPay: I_IconsArray[] = [
    {
      iconId: "pp",
      src: paypalIcon,
    },
    {
      iconId: "ap",
      src: appleIcon,
    },
    {
      iconId: "vs",
      src: visaIcon,
    },
    {
      iconId: "shf",
      src: shopifyIcon,
    },
  ];
  return (
    <div
      className={`flex flex-col items-center justify-start ${styles.PayMethodsContainer} absolute w-max h-3/5 px-5 pt-2 left-64 -bottom-28`}
    >
      <select
        name="payMethod"
        id="payMethod"
        className="bg-transparent text-white"
      >
        <option className="text-white bg-black">Pey Method</option>
        <option className="text-white bg-black">sfw</option>
        <option className="text-white bg-black">fw</option>
      </select>
      <div className="compeny flex flex-row items-center justify-between mt-3">
        {iconsForPay.map((item) => (
          <div
            key={item.iconId}
            className="bg-white rounded-md p-2 ml-3 first:-ml-1"
          >
            <img src={item.src} alt="" className="w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayMethods;
