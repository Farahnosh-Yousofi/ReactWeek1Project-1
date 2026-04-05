import React from "react";

export default function Temperature() {
  return (
    <div className="weather-forecast-temperatures">
      <div className="weather-app-temp">
        <div id="icon"></div>
        <div className="temp">
          22 <em className="unit">°C</em>
        </div>
      </div>
    </div>
  );
}
