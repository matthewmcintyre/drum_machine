import React from "react";
import DrumMachine from "./DrumMachine";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "../components/Header";
import reducer from "../reducers/index";
import "./Main.css";

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
