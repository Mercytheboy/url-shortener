import React from "react";
import Btn from "../../components/btn/Btn";
import "./hero.css";

import hero_img from "../../assets/illustration-working.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content section__padding container">
        <div className="hero__content-text">
          <h1>More than just shorter links</h1>
          <p>
            build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <Btn label="get started" />
        </div>

        <div className="hero__content-img">
          <img src={hero_img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
