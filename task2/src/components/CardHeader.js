import React from "react";
import { IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import "./CardHeader.css";

export default function CardHeader() {
  return (
    <div className="root">
      <div>
        <h1 className="heading">CREATE A JOB POST</h1>
        <p>Complete the following steps to create an effective job post</p>
      </div>
      <div className="icon-wrapper">
        <IconButton aria-label="settings">
          <CancelIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
