// React
import React from "react";
// React
// CSS
import styles from "./Home.module.css";
// CSS
import {
  Advantages,
  BetterDeal,
  BillingControl,
  // BetterDeal,
  // BillingControl,
  // Footer,
  Landing,
  // OurBigCustomers,
  // Testimonial,
  // TryOurService,
} from "../../Components/index";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  return (
    <>
      <main className={`${styles.mainContainer} `}>
        <Fade duration={700}>
          <Landing />
        </Fade>
        <Fade>
          <Advantages />
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <BillingControl />
        </Fade>
        <BetterDeal />
        {/* 
        <Testimonial />
        <OurBigCustomers />
        <TryOurService />
        <Footer /> */}
      </main>
    </>
  );
};

export default Home;
