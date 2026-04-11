import React from "react";

import Current from "./Current";
import Fahrenheit from "./Fahrenheit";
function Temperature(props) {
  function fahrenheit() {
    return Math.round((props.temp * 9) / 5 + 32);
  }
  return (
    <div className="weather-forecast-temperatures">
      <div className="weather-app-temp">
        <div id="icon"></div>
        <div className="temp">
          {props.temp} <em className="unit">°C</em> | {fahrenheit()}{" "}
          <em className="unit">°F</em>
          <Current />
          <br />
          <Fahrenheit />
        </div>
      </div>
    </div>
  );
}
export default Temperature;
