// React
import React from "react";
// React
// CSS
import styles from "./Header.module.css";
// CSS
// Images
import { LOGO } from "../../assets";
import { Link } from "react-router-dom";
import { headerLinks } from "../../constants/headerTexts";
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
        className={`flex flex-row items-center justify-start  ${styles.left}`}
      >
        <img src={LOGO} alt="logo" className="w-8 h-8" />
        <p style={{ color: "#fff" }} className="ml-1">
          Hoo<span style={{ color: "#5CE1E6" }}>Bank</span>
        </p>
      </div>
      <div
        className={`${styles.right} flex flex-row items-center justify-center`}
      >
        {headerLinks.map((item) => (
          <Link
            to={item.routeToNavigate}
            key={item.routeToNavigate}
            className="text-white ml-14"
          >
            {item.nameForDisplay}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
