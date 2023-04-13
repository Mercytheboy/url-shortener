import React from "react";
import Card from "../../components/card/Card";

import "./statistics.css";

import brand from "../../assets/icon-brand-recognition.svg";
import records from "../../assets/icon-detailed-records.svg";
import custom from "../../assets/icon-fully-customizable.svg";

function Statistics() {
  return (
    <section className="statistics">
      <div className="stastistics__container section__padding container">
        <div className="statistics__title">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>

        <div className="statistics__cards">
          <div className="line"></div>
          <article>
            <Card
              icon={brand}
              title={"Brand Recognition"}
              desc={`Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`}
            />
          </article>
          <article>
            <Card
              icon={records}
              title={"Detailed Records"}
              desc={
                "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              }
            />
          </article>
          <article>
            <Card
              icon={custom}
              title={"fully Customizable"}
              desc={
                "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              }
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
