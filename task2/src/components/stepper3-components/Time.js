import React from "react";
import "./Time.css";

export default function Time({ day, time, active }) {
  return (
    <div className="container">
      <div className={active ? "day-container active" : "day-container"}>
        {day}
      </div>
      <div className="time-container">9:00 am to 5:00 pm</div>
    </div>
  );
}
