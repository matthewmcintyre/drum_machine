import React from "react";
import "./SoundControl.css";

function SoundControl(props) {
  return (
    <div id="soundControl">
      <button onClick={props.handleClick}>{props.status}</button>
      <div>{props.text}</div>
    </div>
  );
}

export default SoundControl;
