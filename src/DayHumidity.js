import React from "react";

export default function DayHumidity() {
  return (
    <div>
      <p>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
        <br />
        <span id="time">Saturday 11:19</span>,
        <span className="description">clear sky</span>
        <br />
        Humidity:{" "}
        <span className="color" id="humidity">
          46
        </span>
        %, Wind:
        <span className="color" id="wind">
          4.63
        </span>
        km/h
      </p>
    </div>
  );
}
