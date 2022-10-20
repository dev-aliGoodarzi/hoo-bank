// React
import React from "react";
// React
// CSS
import styles from "./Header.module.css";
// CSS
// Images
import { LOGO } from "../../assets";
// Images

const Header = () => {
  return (
    <header
      className={`
      2xl:justify-between
      flex flex-row items-center box-border 
      ${styles.headerContainer}`}
    >
      <div
        className={`w-4/12 flex flex-row items-center justify-start  ${styles.left}`}
      >
        <img src={LOGO} alt="logo" />
        <p style={{ color: "#fff" }}>
          Hoo<span style={{ color: "#5CE1E6" }}>Bank</span>
        </p>
      </div>
      <div className={`w-4/12 ${styles.right}`}></div>
    </header>
  );
};

export default Header;
