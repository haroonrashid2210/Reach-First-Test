import React, { useState } from "react";
import "./MyTextField.css";

const MyTextField = ({ placeholder, legend, required, fill, updateState }) => {
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
            type="number"
            onChange={(e) => updateState(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default MyTextField;
