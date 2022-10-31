import React from "react";
import { greenCheck } from "../../assets";

const PaymentMessage = () => {
  return (
    <div className="absolute -bottom-4 -right-56 flex flex-row items-center justify-between bg-white px-8 py-2 rounded-lg">
      <img src={greenCheck} alt="" />
      <span className="ml-3">Great! Your Payment is successfully.</span>
    </div>
  );
};

export default PaymentMessage;
