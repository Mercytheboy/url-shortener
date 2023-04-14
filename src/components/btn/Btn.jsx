import React from "react";
import "./btn.css";

function Btn({ label, buttonStyle, ...props }) {
  const buttonClass = `${buttonStyle === "squared" ? "squared" : "rounded"}`;

  return (
    <button className={`btn ${buttonClass}`} {...props}>
      {label}
    </button>
  );
}

export default Btn;
