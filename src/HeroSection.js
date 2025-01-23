import React from "react";
import styles from "./HeroSection.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img className="hero-image"
          src={require("./HeroImage.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
