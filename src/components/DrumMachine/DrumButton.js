import React from "react";
import styled from "styled-components";

const MyButton = styled.div`
  background-color: #ff8360;
  transition: 0.2s;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border-radius: 3px;
  padding-bottom: 10px;

  :active {
    background-color: #7dce82;
  }
  @media (max-width: 700px) {
    :hover {
      background-color: #7dce82;
    }
  }
`;

function DrumButton(props) {
  return (
    <MyButton id={props.buttonId} onClick={props.handleClick}>
      {props.text}
      <audio id={props.audioId} src={props.src} type="audio/mp3" />
    </MyButton>
  );
}

export default DrumButton;
