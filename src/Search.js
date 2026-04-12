import React from "react";
import { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("City");
  let [name, setName] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setCity(name);
  }

  return (
    <header>
      <form action="" id="input" onSubmit={handleSubmit}>
        <input
          type="search"
          id="city"
          placeholder="Enter a city.."
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" id="search" value="Submit" />
      </form>
      <br />
      <h1>{city}</h1>
    </header>
  );
}
