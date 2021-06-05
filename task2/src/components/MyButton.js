import React from "react";

const upload_icon = (
  <svg
    height="22"
    viewBox="0 0 512 512"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Solid">
      <path d="m182.461 155.48 49.539-49.539v262.059a24 24 0 0 0 48 0v-262.059l49.539 49.539a24 24 0 1 0 33.941-33.941l-90.509-90.51a24 24 0 0 0 -33.942 0l-90.509 90.51a24 24 0 1 0 33.941 33.941z" />
      <path d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z" />
    </g>
  </svg>
);

const MyButton = ({ text, onClick, disabled, stateKey, updateState }) => {
  if (text == "PREVIOUS" || text == "NEXT")
    return (
      <button
        style={{
          width: 200,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          background: text == "NEXT" ? "#006BB3" : "white",
          color: text == "NEXT" ? "white" : "#aaa",
          border: text == "NEXT" ? "1px solid #006BB3" : "1px solid #222",
        }}
        onClick={
          disabled ? () => alert("Fill the form correctly") : () => onClick()
        }
      >
        {text}
      </button>
    );
  else
    return (
      <div>
        <label
          htmlFor="upload-button"
          style={{
            background: "#50CB5D",
            color: "white",
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 30,
            paddingRight: 30,
            fontFamily: "Actor",
            display: "flex",
            alignItems: "center",
            borderRadius: 7,
            fontWeight: "lighter",
          }}
        >
          <span style={{ fill: "white", marginRight: 10 }}>{upload_icon}</span>
          <span>{text}</span>
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={(e) => {
            updateState(stateKey, e.target.value);
          }}
        />
        <br />
      </div>
    );
};

export default MyButton;
