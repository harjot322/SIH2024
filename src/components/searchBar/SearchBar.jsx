import React from "react";
import  './searchbar.scss'

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="type">
        <form action="">
          <input type="text" name="location" placeholder="City Location" />
          <input type="number" name="Area" min={0} max={10000000} placeholder="Area Needed (BHK)" />
          <input type="number" name="time" min={0} max={10000000} placeholder="Time Required (DAYS)" />
          <button>
            <img src="/search.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;