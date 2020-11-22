import React from "react";
import ReactDOM from "react-dom";
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Burr, it's chilly" : "Let's hit the beach";
   const icon =  season === "winter" ? "snowflake" : "Sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
