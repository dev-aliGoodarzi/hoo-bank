import React from "react";

type CircleCustomProps = {
  bgColor: string;
  size: number;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

const CircleCustom: React.FunctionComponent<CircleCustomProps> = ({
  bgColor,
  size,
  top,
  left,
  bottom,
  right,
}) => {
  return (
    <div
      className="absolute rounded-full"
      style={{
        border: `10px solid ${bgColor}`,
        width: `${size}rem`,
        height: `${size}rem`,
        top: bottom || `${top}rem` || "0rem",
        left: `${left}rem` || "25rem",
        bottom: `${bottom}rem` || "0rem",
        right: left ? "" : `${right}rem` || "0rem",
        zIndex: "0",
      }}
    ></div>
  );
};

export default CircleCustom;
