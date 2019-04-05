import React from "react";
import DrumMachine from "./containers/DrumMachine";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./store";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #ed6a5a;
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const Main = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div id="main">
        <Header />
        <DrumMachine />
      </div>
    </Provider>
  );
};

export default Main;
