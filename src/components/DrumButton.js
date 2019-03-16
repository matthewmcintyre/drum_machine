import React from "react";
import "./DrumButton.css";

function DrumButton(props) {
  return (
    <div onClick={props.handleClick} id={props.buttonName} className="myButton">
      {props.text}
      <audio id={props.audioName} src={props.src} type="audio/mp3" />
    </div>
  );
}

export default DrumButton;
