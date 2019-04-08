import React from "react";
import DrumMachine from "./components/DrumMachine/DrumMachine.js";
import { Provider } from "react-redux";
import Header from "./components/Header/Header.js";
import store from "./store";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bree+Serif');

  html {
    background-color: #3CDBD3;
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Bree Serif', serif;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`;

const Main = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <DrumMachine />
    </Provider>
  );
};

export default Main;
