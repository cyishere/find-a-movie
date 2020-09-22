import React from "react";

const Header = () => {
  return (
    <header className="app__header">
      <h1>Find a Movie</h1>

      <nav className="app__navbar">
        <button className="btn primary">Clear your data</button>
      </nav>
    </header>
  );
};

export default Header;
