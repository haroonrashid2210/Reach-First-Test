import React, { useState } from "react";
import "./MyTextArea.css";

const MyTextArea = ({ placeholder, legend, required, fill }) => {
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
          <textarea
            rows={7}
            style={{ resize: "none" }}
            type="text"
            class="form-control input-lg"
            placeholder={placeholder}
          />
        </div>
      </form>
    </div>
  );
};

export default MyTextArea;
