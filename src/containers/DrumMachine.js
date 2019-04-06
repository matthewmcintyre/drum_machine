import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SoundControl from "../components/SoundControl/SoundControl";
import DrumButton from "../components/DrumButton";
import soundList from "../components/soundList";

const ButtonWrapper = styled.div`
  margin: auto;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  padding: 10px;
`;

class DrumMachine extends Component {
  setPower = () => {
    if (this.props.power === "off") {
      this.props.dispatch({ type: "POWERON" });
    } else {
      this.props.dispatch({ type: "POWEROFF" });
    }
  };

  handleKeyDown = event => {
    this.playSound(event.key);
    console.log(event.key);
  };

  handleClick = event => {
    console.log(event.target.innerText);
    this.playSound(event.target.innerText);
  };

  playSound = key => {
    if (this.props.power === "on") {
      switch (key) {
        case "q":
          document.getElementById(key).play();
          this.props.dispatch({ type: "Q" });
          console.log("q was pressed");
          break;

        case "w":
          document.getElementById(key).play();
          this.props.dispatch({ type: "W" });
          console.log("w was pressed");
          break;

        case "e":
          document.getElementById(key).play();
          this.props.dispatch({ type: "E" });
          console.log("e was pressed");
          break;

        case "a":
          document.getElementById(key).play();
          this.props.dispatch({ type: "A" });
          console.log("a was pressed");
          break;

        case "s":
          document.getElementById(key).play();
          this.props.dispatch({ type: "S" });
          console.log("s was pressed");
          break;

        case "d":
          document.getElementById(key).play();
          this.props.dispatch({ type: "D" });
          console.log("d was pressed");
          break;

        case "z":
          document.getElementById(key).play();
          this.props.dispatch({ type: "Z" });
          console.log("z was pressed");
          break;

        case "x":
          document.getElementById(key).play();
          this.props.dispatch({ type: "X" });
          console.log("x was pressed");
          break;

        case "c":
          document.getElementById(key).play();
          this.props.dispatch({ type: "C" });
          console.log("c was pressed");
          break;

        default:
          break;
      }
    }
  };

  render() {
    const buttons = Object.values(soundList).map(x => {
      console.log(x);
      return (
        <DrumButton
          handleClick={this.handleClick}
          audioName={x.key}
          text={x.key}
          src={x.sound}
        />
      );
    });

    document.addEventListener("keydown", this.handleKeyDown);

    return (
      <div>
        <ButtonWrapper>{buttons}</ButtonWrapper>
        <SoundControl
          status={this.props.power}
          text={this.props.currentSound}
          handleClick={this.setPower}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  power: state.powerStatus.power,
  currentSound: state.setSound.currentSound
});

export default connect(mapStateToProps)(DrumMachine);
