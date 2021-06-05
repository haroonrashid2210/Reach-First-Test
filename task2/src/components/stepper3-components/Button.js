import React from "react";
import "./Button.css";

export default function Button({ text, onClick, active }) {
  return (
    <button className={active ? "button active" : "button"} onClick={onClick}>
      {text}
    </button>
  );
}
