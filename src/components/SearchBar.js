import React from "react";

const SearchBar = ({ searchMovie, query, setQuery }) => {
  return (
    <form className="app__search-bar" onSubmit={searchMovie}>
      <input
        className="input"
        type="text"
        placeholder="Find a movie by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit" className="btn secondary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
