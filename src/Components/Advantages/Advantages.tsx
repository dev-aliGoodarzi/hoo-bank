// React
import React from "react";
import { advantageCards } from "../../constants/constants";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
// React
// CSS
import styles from "./Advantages.module.css";
// CSS
const Advantages = () => {
  return (
    <div
      className={`${styles.advantagesContainer} mt-40 flex flex-row items-start justify-between`}
    >
      <div
        className={`

      ${styles.left}`}
      >
        <p className="text-white text-5xl">
          You do the business,
          <br />
          we’ll handle the money.
        </p>
        <p className="mt-5 text-2xl text-white font-thin">
          With the right credit card, you can improve your financial life
          <br />
          by building credit, earning rewards and saving money. But
          <br />
          with hundreds of credit cards on the market.
        </p>
        <button
          className={`${styles.getStartedBtn} py-4 px-8 mt-12 rounded-lg `}
        >
          Get Started
        </button>
      </div>
      <div
        className={`
      ${styles.right}`}
      >
        {advantageCards.map((item) => (
          <AdvantageCard
            key={item.name}
            Icon={item.Icon}
            name={item.name}
            value={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
