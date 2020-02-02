import React from "react";
import "./index.css";

const denominator = 10000;

class ProgressBar extends React.PureComponent {
  render() {
    const {
      currentProgress = 0,
      preventProgress = 0,
      maxProgress = 0
    } = this.props;
    const currentPercent = currentProgress / denominator;
    const preventPercent = preventProgress / denominator;
    const absoluteProgress = (currentProgress - preventProgress).toFixed(2);
    const maxAbsolute = (currentProgress - maxProgress).toFixed(2);

    return (
      <div>
        <div className="progress">
          <div
            className="currentPercent"
            style={{ width: `${currentPercent}%` }}
          />
          <div
            className="preventPercent"
            style={{ width: `${preventPercent}%` }}
          />
        </div>
        <div>
          Current => {currentPercent}% =>{" "}
          <span
            style={{
              color: absoluteProgress > 0 ? "green" : "red"
            }}
          >
            {absoluteProgress > 0 ? "+" : ""}
            {absoluteProgress + "₽ "}
          </span>
        </div>
        <div className="maxPercent">
          Max => {maxProgress}% =>
          <span
            style={{
              color: maxAbsolute > 0 ? "green" : "red"
            }}
          >
            {maxAbsolute > 0 ? "+" : " "}
            {maxAbsolute + "₽ "}
          </span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
