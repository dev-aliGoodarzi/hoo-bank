// React
import React from "react";
// React
// CSS
import styles from "./ScanCards.module.css";
// CSS
import { AiOutlineScan } from "react-icons/ai";

const ScanCards = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center absolute left-24 -top-12 p-5 ${styles.scanCardsContainer}`}
    >
      <AiOutlineScan style={{ color: "#00F6FF", fontSize: "2rem" }} />
      <span className="text-white mt-4 font-bold text-lg">
        Scan Credit Cards
      </span>
      <span className="text-gray-500">
        Scan your credit card in
        <br />4 minutes.
      </span>
    </div>
  );
};

export default ScanCards;
