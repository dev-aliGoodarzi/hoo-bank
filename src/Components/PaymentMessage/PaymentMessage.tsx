import React from "react";
import { greenCheck } from "../../assets";

const PaymentMessage = () => {
  return (
    <div className="absolute -bottom-4 -right-56 flex flex-row items-center justify-center bg-white px-10 py-2 rounded-lg">
      <img src={greenCheck} alt="" />
      Great! Your Payment is successfully.
    </div>
  );
};

export default PaymentMessage;
