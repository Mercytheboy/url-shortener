import React from "react";
import Btn from "../../components/btn/Btn";

import "./boost.css";

function Boost() {
  return (
    <section className="boost">
      <div className="boost__content section__padding container">
        <h2>Boost your links today</h2>
        <Btn label={"get started"} />
      </div>
    </section>
  );
}

export default Boost;
