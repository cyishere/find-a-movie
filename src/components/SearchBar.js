import React from "react";

const SearchBar = () => {
  return (
    <div className="app__search-bar">
      <input
        className="input"
        type="text"
        placeholder="Find a movie by name..."
      />
      <button className="btn secondary">Search</button>
    </div>
  );
};

export default SearchBar;
