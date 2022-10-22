// React
import React from "react";
import { transactionData } from "../../constants/constants";
import PaymentMessage from "../PaymentMessage/PaymentMessage";
import PayPalOverlay from "../PayPalOverlay/PayPalOverlay";
import TransactionCard from "../TransactionCard/TransactionCard";
// React
// CSS
import styles from "./LastTransAction.module.css";
// CSS
const LastTransAction = () => {
  return (
    <div
      className={`${styles.lastTransaction} flex flex-col items-start justify-between p-5 rounded-xl relative`}
    >
      <p className="text-white text-xl box-border font-semibold">
        Last Transaction
      </p>
      <div className="container">
        {transactionData.map((item) => {
          return <TransactionCard key={item.name} data={item} />;
        })}
      </div>
      {/* //
                PAYPAL OVERLAY STARTED !
        */}
      <PayPalOverlay />
      <PaymentMessage />
    </div>
  );
};

export default LastTransAction;
