// React
import React from "react";
import CircleCustom from "../CircleCustom/CircleCustom";
import OnlineAnalysisChart from "../OnlineAnalysisChart/OnlineAnalysisChart";
import PayMethods from "../PayMethods/PayMethods";
import ScanCards from "../ScanCards/ScanCards";
// React
// CSS
import styles from "./BetterDeal.module.css";
// CSS

const BetterDeal = () => {
  return (
    <div
      className={`${styles.betterDealContainer} flex flex-row items-center justify-start mt-52`}
    >
      <div className={styles.left}>
        <h1 className="text-white text-5xl">
          Find a better card deal
          <br />
          in few easy steps.
        </h1>
        <p className="text-white text-lg  mt-7">
          Arcu tortor, purus in mattis at sed integer faucibus.
          <br />
          Aliquet quis aliquet eget mauris tortor.ç Aliquet
          <br />
          ultrices ac, ametau.
        </p>
        <button className="w-44 h-16 mt-4">Get Started</button>
      </div>
      <div
        className={`${styles.right} relative flex items-center justify-center h-max w-5/12`}
      >
        <CircleCustom
          bgColor="rgba(51, 187, 207, 0.3)"
          size={7.7}
          key={"circle1"}
          top={"0"}
          left={"19.5"}
        />
        <CircleCustom
          bgColor="rgba(51, 187, 207, 0.3)"
          size={15.8}
          key={"circle2"}
          top={"-4"}
          left={"15.5"}
        />
        <CircleCustom
          bgColor="rgba(51, 187, 207, 0.3)"
          size={23.8}
          key={"circle3"}
          top={"-8"}
          left={"11.5"}
        />
        <div className={styles.onlineAnalysis}>
          <OnlineAnalysisChart />
        </div>
        <div className={styles.scanCreditCardsContainer}>
          <ScanCards />
        </div>
        <div className={styles.payMethodContainer}>
          <PayMethods />
        </div>
      </div>
    </div>
  );
};

export default BetterDeal;
