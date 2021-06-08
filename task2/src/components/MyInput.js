// This file is the Input i.e. TextField + dropdown

import React, { useState } from "react";
import "./MyInput.css";

const MyInput = ({
  items,
  placeholder,
  legend,
  required,
  fill,
  stateKey,
  updateState = () => {},
}) => {
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
            value={selectedItem == null ? "" : selectedItem}
            onChange={(e) => {
              updateState(stateKey, e.target.value);
              setSelectedItem(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="select-box--arrow" onClick={() => dropDown()}>
        <span
          className={`${
            open ? "select-box--arrow-up" : "select-box--arrow-down"
          }`}
        />
      </div>
      <div
        style={{ display: open ? "block" : "none", width: fill ? "100%" : 400 }}
        className={"select-box--items"}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              updateState(stateKey, item.value);
              selectItem(item.value);
            }}
            className="dropdown-item"
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInput;
