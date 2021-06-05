import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import MyButton from "./MyButton";
import { Divider } from "@material-ui/core";
import Button from "./stepper3-components/Button";
import Time from "./stepper3-components/Time";

const useStyles = makeStyles((theme) => ({
  root: { paddingLeft: 50, paddingRight: 50 },
  row: {
    display: "flex",
    flex: 12,
    justifyContent: "space-between",
  },
  spacer: { marginTop: 50, marginBottom: 50 },
}));

export default function Stepper3({ state, updateState }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <Button
          text="S"
          active={state.sun}
          onClick={() => {
            updateState("sun");
          }}
        />
        <Button
          text="M"
          active={state.mon}
          onClick={() => {
            updateState("mon");
          }}
        />
        <Button
          text="T"
          active={state.tue}
          onClick={() => {
            updateState("tue");
          }}
        />
        <Button
          text="W"
          active={state.wed}
          onClick={() => {
            updateState("wed");
          }}
        />
        <Button
          text="T"
          active={state.thur}
          onClick={() => {
            updateState("thur");
          }}
        />
        <Button
          text="F"
          active={state.fri}
          onClick={() => {
            updateState("fri");
          }}
        />
        <Button
          text="S"
          active={state.sat}
          onClick={() => {
            updateState("sat");
          }}
        />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <Time active={state.sun} day="Sunday" />
        <Time active={state.mon} day="Monday" />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <Time active={state.tue} day="Tuesday" />
        <Time active={state.wed} day="Wednesday" />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <Time active={state.thur} day="Thursday" />
        <Time active={state.fri} day="Friday" />
      </div>
      <div className={classes.spacer} />
      <div className={classes.row}>
        <Time active={state.sat} day="Saturday" />
      </div>
    </div>
  );
}
