// React
import React from "react";
// React
// CSS
import styles from "./StatusCard.module.css";
// CSS
// Modules and Components

// Modules and Components

type StatusCardProps = {
  name: string;
  value: string;
  hasAfterRow: boolean;
};
const StatusCard: React.FunctionComponent<StatusCardProps> = ({
  name,
  value,
  hasAfterRow,
}) => {
  return (
    <div
      className="flex flex-row items-center justify-center w-1/4 box-border px-3 pr-12"
      style={{
        borderRight: hasAfterRow ? "2px solid rgba(255,255,255,0.6)" : "none",
      }}
    >
      <span className="text-white font-bold  text-2xl">{value}</span>
      <span className={`${styles.statsName} uppercase text-xl pl-5`}>
        {name}
      </span>
    </div>
  );
};

export default StatusCard;
