import React, { Component } from "react";
import DrumButton from "../components/DrumButton";

class DrumMachine extends Component {
  constructor(props) {
    super();
    this.state = {
      volume: 0,
      active: true
    };
  }

  onKeyPressed(e) {
    console.log(e.key);
    if (e.key === "a") {
      console.log("a was pressed yooooo");
    }
  }

  render() {
    return (
      <div id="drum-machine" onKeyDown={e => this.onKeyPressed(e)}>
        <audio>whaaaat</audio>
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
        <DrumButton text="lmao" />
      </div>
    );
  }
}

export default DrumMachine;
