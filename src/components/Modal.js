import React from "react";

const Modal = ({ movie, open, setOpen }) => {
  return (
    <div
      className={open ? "app__modalContainer" : "app__modalContainer close"}
      onClick={() => setOpen(!open)}
    >
      <div className="app__modal">
        {movie === null ? (
          <div className="app__msg">
            Click the button "FIND A MOVIE" to find one.
          </div>
        ) : (
          <div className="app__list-item">
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
                  <button className="btn warning">watch this!</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
