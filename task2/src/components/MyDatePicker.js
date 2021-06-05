import React, { useState } from "react";
import "./MyInput.css";

const MyInput = ({ items, placeholder, legend, required, fill }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropDown = () => {
    setOpen(!open);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    dropDown();
  };

  return (
    <div className="select-box--box" style={{ width: fill ? "100%" : 400 }}>
      <form id="first_name">
        <div class="form-group">
          {required ? (
            <label>
              {legend}
              <span style={{ color: "red" }}>*</span>
            </label>
          ) : (
            <label>{legend}</label>
          )}
          <input
            type="text"
            class="form-control input-lg"
            placeholder={placeholder}
          />
        </div>
      </form>
      <label
        htmlFor="date-picker"
        className="select-box--arrow"
        onClick={() => {
          dropDown();
        }}
      >
        <span
          className={`${
            open ? "select-box--arrow-up" : "select-box--arrow-down"
          }`}
        />
      </label>
    </div>
  );
};

export default MyInput;
