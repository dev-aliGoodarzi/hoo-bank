// React
import React from "react";
// React
// CSS
import styles from "./Landing.module.css";
// CSS
// Compnents And Modules
import { card1, card2, card3, discountLogo, robotHand } from "../../assets";
import { discountPercentage, statusOfCompany } from "../../constants/constants";
import { BsArrowUpRight } from "react-icons/bs";
import StatusCard from "../StatusCard/StatusCard";
// Compnents And Modules
const Landing = () => {
  return (
    <>
      <div
        className={`flex flex-row items-center justify-between w-full mt-20  ${styles.landingContainer}`}
      >
        <div
          className={`flex flex-col items-start justify-center w-1/2 h-full  ${styles.left}`}
        >
          <div
            className={`flex items-center justify-between rounded-md px-2.5  ${styles.discount}`}
          >
            <img src={discountLogo} alt="discountLogo" />
            <p className="text-white">
              {discountPercentage}% DISCOUNT IN{" "}
              <span className="text-white">1 MONTH</span> ACCOUNT
            </p>
          </div>
          <div
            className={`flex flex-row items-center justify-between relative mt-10 w-full ${styles.ad}`}
          >
            <div
              className={`flex flex-col items-start justify-between ${styles.texts}`}
            >
              <span className="text-7xl text-white font-semibold">
                The Next
              </span>
              <span
                className={`${styles.gradient} text-7xl font-semibold py-6`}
              >
                Generation
              </span>
              <span className="text-7xl text-white font-semibold">
                Payment Method
              </span>
            </div>
            <button
              className={`${styles.orderBtn} flex flex-col items-start justify-center mr-72
            2xl:w-36 2xl:h-36
            
            `}
            >
              <div
                className={`${styles.inner} flex flex-col items-center justify-center `}
              >
                <span
                  className={`${styles.gradient} top text-white flex flex-row items-center justify-center text-lg`}
                >
                  Get&nbsp;
                  <BsArrowUpRight className="w-3 h-3 " />
                </span>
                <span className={`${styles.gradient} text-white text-lg`}>
                  Started
                </span>
              </div>
            </button>
          </div>
          <p className="text-white text-lg mt-10">
            Our team of experts uses a methodology to identify
            <br />
            the credit cards most likely to fit your needs.
            <br />
            We examine annual percentage rates, annual fees
          </p>
        </div>

        <div
          className={`flex flex-col items-center justify-center relative w-1/2 ${styles.right}`}
        >
          <img src={robotHand} alt="" className={styles.robotHand} />
          <div className={`absolute ${styles.cards}`}>
            <img src={card3} alt="" id={styles.card1} />
            <img src={card2} alt="" id={styles.card2} />
            <img src={card1} alt="" id={styles.card3} />
            <div className={styles.overlay} id={styles.overlay1}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start box-border px-28 mt-20">
        {statusOfCompany.map((item) => (
          <StatusCard
            key={item.name}
            name={item.name}
            value={item.value}
            hasAfterRow={item.hasAfterRow}
          />
        ))}
      </div>
    </>
  );
};

export default Landing;
