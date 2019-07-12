import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { TicTacToe } from "./components/TicTacToe/TicTacToe";

function App() {
  return <TicTacToe />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
