import React from "react";
import "./styles.css";
export default function CustomButton({text}) {
  return (
    <>
      <ul className="custom-btn">
        <li>
          {text}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </>
  );
}
