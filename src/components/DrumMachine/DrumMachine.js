import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SoundControl from "./SoundControl";
import DrumButton from "./DrumButton";
import soundList from "./soundList";
import { togglePower, selectedSound } from "../../actions/actions";

const DrumMachineWrapper = styled.div`
  background-color: #e8e288;
  width: 90vw;
  border-radius: 5px;
  margin-top: 20%;

  @media (min-width: 700px) {
    width: 480px;
  }
`;

const ButtonWrapper = styled.div`
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  padding: 10px;
`;

//constants to adjust the color of buttons when key pressed
const originalButtonColor = "#FF8360";
const pressedButtonColor = "#7DCE82";

class DrumMachine extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  //calls the playsound function and updates the button color when pressed
  handleKeyDown = event => {
    this.playSound(event.key);

    if (/^[qweasdzxc]/.test(event.key)) {
      document.getElementById(
        event.key + "button"
      ).style.backgroundColor = pressedButtonColor;
    }
  };

  //This is a bit of a hack but forces button color to revert back to original
  handleKeyUp = event => {
    if (/^[qweasdzxc]/.test(event.key)) {
      document.getElementById(
        event.key + "button"
      ).style.backgroundColor = originalButtonColor;
    }
  };

  //TODO improve the logic of this
  handleClick = event => {
    //need to slice this or something...
    console.log(event.target.id);
    this.playSound(event.target.innerText);
  };

  playSound = key => {
    //regex only allows below characters
    //"^" this is necessary to stop playing sounds on Tab or Enter
    if (this.props.power && /^[qweasdzxc]/.test(key)) {
      document.getElementById(key).play();
      this.props.selectedSound(key);
    }
  };

  render() {
    //this maps all 9 buttons with individual props
    const buttons = Object.values(soundList).map(x => {
      console.log(x);
      return (
        <DrumButton
          handleClick={this.handleClick}
          audioId={x.key}
          text={x.key}
          src={x.sound}
          buttonId={x.key + "button"}
          key={x.key + "key"}
        />
      );
    });

    return (
      <DrumMachineWrapper>
        <ButtonWrapper>{buttons}</ButtonWrapper>
        <SoundControl
          status={this.props.power ? "ON" : "OFF"}
          text={this.props.currentSound}
          handleClick={this.props.togglePower}
          show={this.props.power}
        />
      </DrumMachineWrapper>
    );
  }
}

const mapStateToProps = state => ({
  power: state.powerStatus.power,
  currentSound: state.setSound.currentSound
});

const myActions = { togglePower, selectedSound };

export default connect(
  mapStateToProps,
  myActions
)(DrumMachine);
