import React from "react";
import DrumMachine from "./DrumMachine";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "../components/Header";

const initialState = {
  active: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PLAYSOUND":
      return true;

    default:
      return state;
  }
}

const store = createStore(reducer);

const Main = () => {
  return (
    <Provider store={store}>
      <div id="main">
        <Header />
        <DrumMachine />
      </div>
    </Provider>
  );
};

export default Main;
