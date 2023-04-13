import React from "react";

import "./card.css";

function Card({ icon, title, desc }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
