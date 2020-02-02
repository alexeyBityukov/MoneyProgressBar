import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProgressBar from "./ProgressBar";
import TimeStamp from "./TimeStamp";

const currentProgress = 371506.02;
const maxProgress = 369972.59;
const preventProgress = 361424.25;

const lastUpdate = "2020-1-4";

function App() {
  return (
    <div className="App">
      <TimeStamp timestamp={lastUpdate} />
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
