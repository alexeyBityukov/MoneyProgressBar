import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProgressBar from "./ProgressBar";
import TimeStamp from "./TimeStamp";

const currentProgress = 404141.99;
const maxProgress = 384505.24;
const preventProgress = 384505.24;

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
