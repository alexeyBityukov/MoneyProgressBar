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
    const currentPercent = (currentProgress / denominator).toFixed(6);
    const preventPercent = (preventProgress / denominator).toFixed(6);
    const maxPercent = (preventProgress / denominator).toFixed(6);
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
          Max => {maxPercent}% =>{" "}
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
