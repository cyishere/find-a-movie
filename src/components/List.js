import React from "react";

const List = ({ movies }) => {
  return (
    <ul className="app__list">
      {movies.map((movie) => (
        <li className="app__list-item" key={movie.id}>
          <div className="card">
            <img className="card-image" src={movie.image} alt={movie.title} />

            <div className="card-content">
              <h2 className="card-title">{movie.title}</h2>
              <div className="card-meta">{movie.year}</div>
              <div className="card-description">{movie.description}</div>
            </div>

            <div className="card-actions">
              <button className="btn secondary">+</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default List;
