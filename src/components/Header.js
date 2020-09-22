import React from "react";

const Header = ({ movies }) => {
  return (
    <header className="app__header">
      <h1>Find a Movie</h1>

      <nav className="app__navbar">
        {movies.length === 0 ? (
          <button className="btn primary" disabled>
            Clear your data
          </button>
        ) : (
          <button className="btn primary">Clear your data</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
