import React, { useState } from "react";
import { makeStyles, Divider } from "@material-ui/core";
import MyButton from "./MyButton";
import Stepper1 from "./Stepper1";
import Stepper2 from "./Stepper2";
import Stepper3 from "./Stepper3";

// Styling of different components
const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 50,
    paddingTop: 25,
  },
  stepperBody: {
    display: "flex",
    flex: 12,
    marginTop: 15,
    marginBottom: 50,
    background: "#EAEAEA",
  },
  step: {
    flex: 3,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderRight: "1px solid #ccc",
  },
  footerDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
}));

// Step list
const stepList = ["Job Information", "Candidate Type", "Shift Timings"];
const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

// Main function
export default function CardBody() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  // state holds values of required fields of stepper1
  const [state1, setState1] = useState({
    job: "",
    experience: "",
    file: "",
  });
  // state holds values of required fields of stepper2
  const [state2, setState2] = useState("");
  // state holds values of required fields of stepper3
  const [state3, setState3] = useState({
    mon: false,
    tue: false,
    wed: false,
    thur: false,
    fri: false,
    sat: false,
    sun: false,
  });

  // Function that gets style of stepper according to which stepper is currenty active
  function getStyle(step) {
    if (step == currentStep && step == 2) {
      return {
        background: "#016AB3",
        color: "white",
      };
    }
    // If step is active
    else if (step == currentStep) {
      return {
        background: "#016AB3",
        color: "white",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
      };
    } // If this the last step then
    if (step < currentStep) {
      return {
        background: "#016AB3",
        color: "white",
        borderRight: "1px solid #016AB3",
      };
    } else
      return {
        color: "#aaa",
      };
  }

  // Move to next stepper
  const handleNext = () => {
    if (currentStep != 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Move to previous stepper
  const handlePrev = () => {
    if (currentStep != 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Disables a button if data is not complete on required step
  function isButtonDisable() {
    switch (currentStep) {
      case 0: {
        return state1.experience == "" || state1.file == "" || state1.job == "";
      }
      case 1: {
        return state2 == "" || state2 < 10;
      }
      case 2: {
        var sum = 0;
        days.forEach((element) => {
          if (state3[element]) {
            sum++;
          }
        });
        return sum < 2;
      }
      default:
        break;
    }
  }

  // handle stepper1 state
  const setStepper1State = (key, value) => {
    switch (key) {
      case "job": {
        setState1((prev) => {
          return {
            ...prev,
            job: value,
          };
        });
        break;
      }
      case "experience": {
        setState1((prev) => {
          return {
            ...prev,
            experience: value,
          };
        });
        break;
      }
      case "file": {
        setState1((prev) => {
          return {
            ...prev,
            file: value,
          };
        });
        break;
      }
      default:
        break;
    }
  };

  // Set stepper 2 state
  const setStepper2State = (value) => {
    setState2(value);
  };

  // Set stepper  state
  const setStepper3State = (key) => {
    console.log("good");
    switch (key) {
      case "mon": {
        setState3((prev) => {
          return {
            ...prev,
            mon: !prev.mon,
          };
        });
        break;
      }
      case "tue": {
        setState3((prev) => {
          return {
            ...prev,
            tue: !prev.tue,
          };
        });
        break;
      }
      case "wed": {
        setState3((prev) => {
          return {
            ...prev,
            wed: !prev.wed,
          };
        });
        break;
      }
      case "thur": {
        setState3((prev) => {
          return {
            ...prev,
            thur: !prev.thur,
          };
        });
        break;
      }
      case "fri": {
        setState3((prev) => {
          return {
            ...prev,
            fri: !prev.fri,
          };
        });
        break;
      }
      case "sat": {
        setState3((prev) => {
          return {
            ...prev,
            sat: !prev.sat,
          };
        });
        break;
      }
      case "sun": {
        setState3((prev) => {
          return {
            ...prev,
            sun: !prev.sun,
          };
        });
        break;
      }
      default:
        break;
    }
  };

  // This function render stepper content
  // i.e. stepper1, 2, 3
  const renderStepper = () => {
    if (currentStep == 0) {
      return <Stepper1 updateState={setStepper1State} />;
    } else if (currentStep == 1) {
      return <Stepper2 updateState={setStepper2State} />;
    } else {
      return (
        <>
          <h2
            style={{
              fontFamily: "Actor",
              marginLeft: 50,
              marginRight: 50,
              marginBottom: 20,
            }}
          >
            Schedule work days {" & "} timings
          </h2>
          <Divider />
          <Stepper3 updateState={setStepper3State} state={state3} />
        </>
      );
    }
  };

  return (
    <div className={classes.root}>
      <div style={{ paddingLeft: 50, paddingRight: 50 }}>
        <div>
          <p variant="p" style={{ color: "#016AB3", marginLeft: 5 }}>
            Step {currentStep + 1} of 3
          </p>
        </div>
        <div className={classes.stepperBody}>
          {stepList.map((item, index) => (
            <div className={classes.step} style={getStyle(index)}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {renderStepper()}
      {/* Card Footer */}
      <div className={classes.footerDiv}>
        <MyButton text="PREVIOUS" onClick={handlePrev} />
        <MyButton
          text="NEXT"
          onClick={handleNext}
          disabled={isButtonDisable() ? true : false}
        />
      </div>
    </div>
  );
}
