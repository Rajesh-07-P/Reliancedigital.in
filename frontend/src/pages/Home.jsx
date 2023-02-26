import React from "react";
import SimpleSlider from "../components/carousels/topcarousel/SimpleSlider"
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <div className={styles.boatoffers}>
        <h2 >Special Offers on Boat</h2>
        <div >View all</div>
      </div>
    </div>
  );
};

export default Home;
