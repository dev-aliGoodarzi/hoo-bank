// React
import React from "react";
// React
// CSS
import styles from "./BillingControl.module.css";
// CSS
// Modules And Components
import LastTransAction from "../LastTransAction/LastTransAction";
import { appStore, playStore } from "../../assets";
// Modules And Components

const BillingControl = () => {
  return (
    <div
      className={`${styles.billingControlContainer} 
      flex flex-row items-center justify-between mt-36 relative
      `}
    >
      <div className={`${styles.left} w-1/4`}>
        <LastTransAction />
        <div className={styles.paymentMessage}></div>
      </div>
      <div
        className={`${styles.right}  flex flex-col items-start w-5/12 pl-10`}
      >
        <p className="text-5xl text-white font-semibold">
          Easily control your
          <br />
          billing & invoicing.
        </p>
        <p className="text-white text-lg mt-6">
          Elit enim sed massa etiam. Mauris eu adipiscing
          <br />
          ultrices ametodio aenean neque. Fusce ipsum orci
          <br />
          rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="imageContainer flex flex-row items-center justify-center mt-12">
          <img src={appStore} alt="" />
          <img src={playStore} alt="" className="ml-4" />
        </div>
      </div>
    </div>
  );
};

export default BillingControl;
