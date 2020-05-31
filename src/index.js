import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProgressBar from "./ProgressBar";
import TimeStamp from "./TimeStamp";

const currentProgress = 385846.50;
const maxProgress = 413130.78;
const preventProgress = 413130.78;

function App() {
  return (
    <div className="App">
      <TimeStamp />
      <ProgressBar
        currentProgress={currentProgress}
        preventProgress={preventProgress}
        maxProgress={maxProgress}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
