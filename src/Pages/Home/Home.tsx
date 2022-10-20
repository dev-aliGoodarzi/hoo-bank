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
  Footer,
  Landing,
  OurBigCustomers,
  Testimonial,
  TryOurService,
} from "../../Components/index";

const Home = () => {
  return (
    <>
      <main>
        <Landing />
        <Advantages />
        <BillingControl />
        <BetterDeal />
        <Testimonial />
        <OurBigCustomers />
        <TryOurService />
        <Footer />
      </main>
    </>
  );
};

export default Home;
