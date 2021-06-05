import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import MyButton from "./MyButton";

const useStyles = makeStyles((theme) => ({
  root: { paddingLeft: 50, paddingRight: 50 },
  row: {
    display: "flex",
    flex: 12,
    justifyContent: "space-between",
  },
  spacer: { marginTop: 30, marginBottom: 30 },
}));

export default function Stepper1({ updateState }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div>
          <MyInput
            items={[
              { value: "Developer", id: 1 },
              { value: "Tester", id: 2 },
              { value: "Designer", id: 3 },
              { value: "Manager", id: 4 },
            ]}
            placeholder="Enter value..."
            legend="Looking for"
            required
            stateKey="job"
            updateState={updateState}
          />
        </div>
        <div>
          <MyInput
            items={[
              { value: "0-1 years", id: 1 },
              { value: "2 years", id: 2 },
              { value: "3 years", id: 3 },
              { value: "4 years", id: 4 },
            ]}
            placeholder="Enter value..."
            legend="Experience"
            required
            stateKey="experience"
            updateState={updateState}
          />
        </div>
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <MyInput
          items={[
            { value: "Bs", id: 1 },
            { value: "Ms", id: 2 },
            { value: "Phd", id: 3 },
          ]}
          placeholder="Enter value..."
          legend="Education"
        />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <MyInput
          items={[
            { value: "Javascript", id: 1 },
            { value: "Java", id: 2 },
            { value: "Python", id: 3 },
          ]}
          placeholder="Enter value..."
          legend="Skills"
          fill
        />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <MyTextArea
          placeholder="write a description"
          legend="Description"
          fill
        />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <span>
          <p style={{ fontFamily: "Actor", color: "#999" }}>
            Add if there is any inspiration
            <span style={{ color: "red" }}>*</span>
          </p>
          <MyButton
            text={"GO TO SELECT TEMPLATE"}
            stateKey="file"
            updateState={updateState}
          />
        </span>
      </div>
    </div>
  );
}
