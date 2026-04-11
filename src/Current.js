import React from "react";

import Temperature from "./Temperature"
function Current() {
  function TempPop(event) {
    event.preventDefault();
    alert(`The Temperature is ${props.temperature} ${props.unit}`);
  }
  return (
    <button className="but" onClick={TempPop}>
      Current Temperature
    </button>
  );
}

export default Current;
