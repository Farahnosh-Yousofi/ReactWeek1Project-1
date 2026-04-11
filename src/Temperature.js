import React, {useState} from "react";

import Current from "./Current";
import Fahrenheit from "./Fahrenheit";


function Temperature(props) {
  let [temperature, setTemperature]= useState(props.temperature);
  let [unit, setUnit] = useState(props.unit)


  function fahrenheit() {
    event.preventDefault();
    setTemperature( Math.round((props.temperature * 9) / 5 + 32));
    setUnit("Imperial")
  }
  function celcius(){
    event.preventDefault();
    setTemperature(props.temperature)
    setUnit(props.unit)
  }
  return (
    <div className="weather-forecast-temperatures">
      <div className="weather-app-temp">
        <div id="icon"></div>
        <div className="temp">
          {temperature} <em className="unit" onClick = {celcius}> {" "} ({unit})°C</em> | {" "}
          <em className="unit" onClick = {fahrenheit}>  °F</em>
          <br/>
          <Current />
          <br />
          <Fahrenheit />
        </div>
      </div>
    </div>
  );
}
export default Temperature;
