import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProgressBar from "./ProgressBar";
import TimeStamp from "./TimeStamp";

const currentProgress = 413130.78;
const maxProgress = 404141.99;
const preventProgress = 404141.99;

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
