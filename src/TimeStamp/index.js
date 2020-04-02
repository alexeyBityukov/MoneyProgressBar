import React from "react";
import "./index.css";

const TimeStamp = ({ timestamp = Date.now() }) => {
  const dateStr = (new Date(timestamp)).toLocaleString('ru-RU', { day: '2-digit',  month: '2-digit', year: 'numeric' })
  return (
    <div className="dateTime">
      Last update: {dateStr}
    </div>
  );
};

export default TimeStamp;
