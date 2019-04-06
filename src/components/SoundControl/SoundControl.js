import React from "react";
import styled from "styled-components";

const SoundController = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 20px;
`;

const PowerButton = styled.button`
  border: 5px solid black;
  margin-right: 20px;
`;

function SoundControl(props) {
  return (
    <SoundController id="soundControl">
      <PowerButton onClick={props.handleClick}>{props.status}</PowerButton>
      <div>{props.text}</div>
    </SoundController>
  );
}

export default SoundControl;
