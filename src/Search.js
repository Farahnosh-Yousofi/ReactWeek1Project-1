import React from "react";

export default function Search() {
  return (
    <header>
      <form action="" id="input">
        <input type="text" id="city" name="city" placeholder="Enter a city.." />
        <button type="submit" id="search">
          Search
        </button>
      </form>
    </header>
  );
}
