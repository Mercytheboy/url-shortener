import React from "react";
import "./btn.css";

function Btn({ label, buttonStyle, isFullWidth, className, ...props }) {
  const buttonClass = ` ${buttonStyle === "squared" ? "squared" : "rounded"}`;

  const widthClass = `${isFullWidth ? "btn-full" : ""}`;

  return (
    <button
      className={`btn ${buttonClass} ${widthClass} ${
        className ? className : ""
      } `}
      {...props}>
      {label}
    </button>
  );
}

export default Btn;
