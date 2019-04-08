import React from "react";
import styled from "styled-components";

const SoundController = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
`;

const PowerButton = styled.button`
  border-radius: 1px;
  width: 50px;
  margin-right: 20px;
  background-color: ${props => (props.show ? "green" : "red")};
`;

function SoundControl(props) {
  return (
    <SoundController>
      <PowerButton show={props.show} onClick={props.handleClick}>
        {props.status}
      </PowerButton>
      <div>{props.text}</div>
    </SoundController>
  );
}

export default SoundControl;
