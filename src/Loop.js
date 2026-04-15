import React from "react";

export default function Loop(props) {
  let cities = ["Kabul", "Paris", "Lisbon", "Lexington"];

  return (
    <div>
      The Cities I want to search for:
      <br />
      {cities.map(function (city, index) {
        return <ul key={index}>{city}</ul>;
      })}
    </div>
  );
}
