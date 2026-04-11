import React from "react";

function Fahrenheit() {
  function conFahrenheit(event) {
    event.preventDefault();
    alert("Not ready");
  }
  return (
    <a className="onCopy" onCopy={conFahrenheit}>
      Convert to Fahrenheit
    </a>
  );
}
export default Fahrenheit;
