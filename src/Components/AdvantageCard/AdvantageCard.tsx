// React
import React from "react";
// React
// CSS
import styles from "./AdvantageCard.module.css";
// CSS

type AdvantageCarProps = {
  Icon: any;
  name: string;
  value: string;
};
const AdvantageCard: React.FunctionComponent<AdvantageCarProps> = ({
  Icon,
  name,
  value,
}) => {
  return (
    <div
      className={`${styles.advantageCard} flex flex-row items-center justify-start box-border p-5 rounded-2xl`}
    >
      <div
        className={`${styles.icon} flex items-center justify-center w-16 h-16 rounded-full ml-3 `}
      >
        <Icon style={{ color: "#00F6FF" }} className="text-2xl" />
      </div>
      <div
        className={`${styles.right} flex flex-col items-start justify-between  ml-5`}
      >
        <p className="text-white">{name}</p>
        <p className="text-gray-400 ">{value}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
