import React from "react";
import Btn from "../../components/btn/Btn";

import "./shortener.css";
function Shortener() {
  return (
    <section className="shortener__container">
      <form action="" className="shortener__form section__padding container">
        <input type="url" placeholder="Shorten a link here!" />
        <Btn label={"Shorten it!"} className={"squared"} onSubmit = {} />
      </form>
    </section>
  );
}

export default Shortener;
