import React from "react";
import "./DrumButton.css";

function DrumButton(props) {
  return <button className="myButton">{props.text}</button>;
}

export default DrumButton;
