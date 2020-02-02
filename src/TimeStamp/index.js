import React from "react";
import "./index.css";

const TimeStamp = ({ timestamp = Date.now() }) => {
  const date = new Date(timestamp);
  return (
    <div className="dateTime">
      Last update: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
    </div>
  );
};

export default TimeStamp;
