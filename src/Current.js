import React from "react";

function Current() {
  function TempPop(event) {
    event.preventDefault();
    alert("The Temperature is 22");
  }
  return (
    <button className="but" onClick={TempPop}>
      Current Temperature
    </button>
  );
}

export default Current;
