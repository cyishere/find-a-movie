import React from "react";

const List = ({ movies, handleAction }) => {
  return (
    <ul className="app__list">
      {movies.map((movie) => (
        <li className="app__list-item" key={movie.id}>
          <div className="card">
            <img
              className="card-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <div className="card-content">
              <h2 className="card-title">{movie.title}</h2>
              <div className="card-meta">
                {movie.release_date.split("-")[0]}
              </div>

              <div className="card-control">
                {movie.watched ? (
                  <button className="btn btn-small" disabled>
                    watched
                  </button>
                ) : (
                  <button
                    className="btn btn-small secondary"
                    onClick={() => handleAction(movie)}
                  >
                    mark as watched
                  </button>
                )}
              </div>

              <div className="card-description">{movie.overview}</div>
            </div>

            <div className="card-actions">
              <button
                className="btn secondary"
                onClick={() => handleAction(movie)}
              >
                +
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default List;
