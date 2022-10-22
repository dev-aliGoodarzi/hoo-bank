// React
import React from "react";
import { I_transAction } from "../../Models/interfaces";
// React
// CSS
import styles from "./TransactionCard.module.css";
// CSS
// Images
import { greenTriangle, redTriangle } from "../../assets";
// Images

type TransactionCardPropsType = {
  data: I_transAction;
};

const TransactionCard: React.FunctionComponent<TransactionCardPropsType> = ({
  data: { icon, name, timeAgo, value, goodOrBad, imgBg },
}) => {
  return (
    <div
      className={`${styles.transactionCard} flex flex-row items-center justify-between mt-6`}
    >
      <div
        className={`${styles.left} flex flex-row items-center justify-start w-1/2`}
      >
        <div
          style={{ background: imgBg === "red" ? "#E74D89" : imgBg }}
          className="w-10 h-10 rounded-full flex  items-center justify-center"
        >
          <img src={icon} alt="currLogo" />{" "}
        </div>
        <div className="flex flex-col items-start justify-between ml-3">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-white">{timeAgo}</p>
        </div>
      </div>
      <div className={`${styles.right} flex flex-row items-center `}>
        <img
          src={goodOrBad === "good" ? greenTriangle : redTriangle}
          alt="g-b"
        />
        <span className="text-white">{value}</span>
      </div>
    </div>
  );
};

export default TransactionCard;
