import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import MyTextField from "./MyTextField";
import MyDatePicker from "./MyDatePicker";

const useStyles = makeStyles((theme) => ({
  root: { paddingLeft: 50, paddingRight: 50 },
  row: {
    display: "flex",
    flex: 12,
    justifyContent: "space-between",
  },
  spacer: { marginTop: 30, marginBottom: 30 },
}));

export default function Stepper2({ updateState }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div>
          <MyTextField
            placeholder="Enter value..."
            legend="Hourly rate"
            required
            updateState={updateState}
          />
        </div>
        <div>
          <MyDatePicker
            items={[
              { value: "0-1 years", id: 1 },
              { value: "2 years", id: 2 },
              { value: "3 years", id: 3 },
              { value: "4 years", id: 4 },
            ]}
            placeholder="Select date"
            legend="Expected start date"
          />
        </div>
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <MyInput
          items={[
            { value: "Option 1", id: 1 },
            { value: "Option 2", id: 2 },
            { value: "Option 3", id: 3 },
          ]}
          placeholder="Enter value..."
          legend="Career level"
        />
        <MyInput
          items={[
            { value: "Male", id: 1 },
            { value: "Female", id: 2 },
            { value: "Other", id: 3 },
          ]}
          placeholder="Enter value..."
          legend="Gender"
        />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <MyTextArea
          placeholder="write a description"
          legend="Equipment specification"
          fill
        />
      </div>
      <div className={classes.spacer} />
    </div>
  );
}
