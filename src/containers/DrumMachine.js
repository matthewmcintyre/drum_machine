import React, { Component } from "react";
import { connect } from "react-redux";
import "./DrumMachine.css";
import SoundControl from "../components/SoundControl";
import DrumButton from "../components/DrumButton";
import soundList from "../components/soundList";

class DrumMachine extends Component {
  constructor(props) {
    super();
    this.state = {
      volume: 0.5,
      status: "off",
      currentSoundID: ""
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  setPower() {
    console.log("setPower called with value" + this.state.status);
    if (this.state.status === "on") {
      this.setState({ status: "off" });
    } else {
      this.setState({ status: "on" });
    }
  }

  handleKeyDown = event => {
    this.playSound(event.key);
    console.log(event.key);
  };

  currentSound = key => {
    this.setState({
      currentSound: key
    });
  };

  playSound = key => {
    this.currentSound(soundList[key].name);
    console.log(key);
    console.log(soundList.test);
    switch (key) {
      case "q":
        document.getElementById(key).play();

        console.log("q was pressed");
        break;

      case "w":
        document.getElementById(key).play();
        console.log("w was pressed");
        break;

      case "e":
        document.getElementById(key).play();
        console.log("e was pressed");
        break;

      case "a":
        document.getElementById(key).play();
        console.log("a was pressed");
        break;

      case "s":
        document.getElementById(key).play();
        console.log("s was pressed");
        break;

      case "d":
        document.getElementById(key).play();
        console.log("d was pressed");
        break;

      case "z":
        document.getElementById(key).play();
        console.log("z was pressed");
        break;

      case "x":
        document.getElementById(key).play();
        console.log("x was pressed");
        break;

      case "c":
        document.getElementById(key).play();
        console.log("c was pressed");
        break;

      default:
        break;
    }
  };

  render() {
    const buttons = Object.values(soundList).map(x => {
      console.log(x);
      return <DrumButton audioName={x.key} text={x.key} src={x.sound} />;
    });

    return (
      <div>
        <div id="wrapper">{buttons}</div>
        <SoundControl
          status={this.state.status}
          text={this.state.currentSound}
          handleClick={this.power}
        />
      </div>
    );
  }
}

//const mapStateToProps = state => ({});

export default connect()(DrumMachine);
