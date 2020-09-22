import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Header from "./components/Header";
import List from "./components/List";
import SearchBar from "./components/SearchBar";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [moviesInList, setMoviesInList] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 3000);
  // }, [showAlert]);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("submit");

    const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=0c3a5039966108d7ed98e6396796d0ce&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      setShowAlert(true);
      setAlertMsg("Search...");
      const res = await fetch(baseUrl);
      const data = await res.json();

      setMovies(data.results);

      setShowAlert(false);
      setAlertMsg("");
    } catch (error) {
      setShowAlert(true);
      setAlertStatus("error");
      setAlertMsg("server error...");
      console.log(error);
    }
  };

  const handleAddMovie = (movie) => {
    const newMovies = moviesInList.concat(movie);
    setMoviesInList(newMovies);
  };

  return (
    <>
      <div className="app">
        <Header movies={moviesInList} />

        <div className="app_mainScreen">
          <div className="app__searchScreen">
            <SearchBar
              searchMovie={searchMovie}
              query={query}
              setQuery={setQuery}
            />

            <List movies={movies} handleAddMovie={handleAddMovie} />
          </div>

          <div className="app__listScreen">
            <List movies={moviesInList} />
            {moviesInList.length > 0 && (
              <button className="btn pink full-width">find a movie</button>
            )}
          </div>
        </div>

        <footer className="app__footer">&copy; cyishere.github.io</footer>
      </div>

      <Alert show={showAlert} status={alertStatus} msg={alertMsg} />
    </>
  );
}

export default App;
