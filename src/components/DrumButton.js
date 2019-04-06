import React from "react";
import styled from "styled-components";

const MyButton = styled.div`
  background-color: #f4f1bb;
  border: solid #9bc1bc 5px;
  transition: 0.6s;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  :hover {
    border: solid blue 5px;
  }
`;

function DrumButton(props) {
  return (
    <MyButton onClick={props.handleClick} id={props.buttonName}>
      {props.text}
      <audio id={props.audioName} src={props.src} type="audio/mp3" />
    </MyButton>
  );
}

export default DrumButton;
