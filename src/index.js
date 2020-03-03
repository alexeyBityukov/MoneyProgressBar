import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProgressBar from "./ProgressBar";
import TimeStamp from "./TimeStamp";

const currentProgress = 384505.24;
const maxProgress = 371506.02;
const preventProgress = 371506.02;

const lastUpdate = (new Date()).toLocaleString('ru-RU', { day: '2-digit',  month: '2-digit', year: '2-digit' });

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
