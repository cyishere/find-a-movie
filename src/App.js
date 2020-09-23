import React, { useState } from "react";
import store from "store";
import "./App.css";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
// import moviesData from "./data";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [moviesInList, setMoviesInList] = useState(() => {
    if (store.get("moviesInList")) {
      return store.get("moviesInList");
    }
    return [];
  });

  const [randomOne, setRandomOne] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const clearAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
      setAlertStatus("");
      setAlertMsg("");
    }, 2000);
  };

  const handleRandomOne = () => {
    const notWatched = moviesInList.filter((item) => !item.watched);
    const index = Math.floor(Math.random() * notWatched.length);
    const random = notWatched[index];
    setRandomOne(random);
    setModalOpen(true);
  };

  const searchMovie = async (e) => {
    e.preventDefault();

    const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

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

      clearAlert();
    }
  };

  const handleAddMovie = (movie) => {
    const addedMovie = { ...movie, watched: false };
    const newMovies = moviesInList.concat(addedMovie);
    setMoviesInList(newMovies);
    store.set("moviesInList", newMovies);
  };

  const handleMarked = (movie) => {
    const moviesInLocal = store.get("moviesInList");
    const newStore = moviesInLocal.map((item) =>
      item.id === movie.id ? { ...item, watched: true } : item
    );
    setMoviesInList(newStore);
    store.set("moviesInList", newStore);
  };

  const handleClear = () => {
    store.remove("moviesInList");
    setMoviesInList([]);
    setShowAlert(true);
    setAlertStatus("success");
    setAlertMsg("Data clear successfully!");

    clearAlert();
  };

  return (
    <>
      <div className="app">
        <Header movies={moviesInList} handleClear={handleClear} />

        <div className="app__mainScreen">
          <div className="app__searchScreen">
            <SearchBar
              searchMovie={searchMovie}
              query={query}
              setQuery={setQuery}
            />

            <List movies={movies} handleAction={handleAddMovie} />
          </div>

          <div className="app__listScreen">
            {moviesInList.length > 0 ? (
              <List movies={moviesInList} handleAction={handleMarked} />
            ) : (
              <div className="app__msg">Search a movie add to here.</div>
            )}

            {moviesInList.length > 0 && (
              <button className="btn pink full-width" onClick={handleRandomOne}>
                find a movie
              </button>
            )}
          </div>
        </div>

        <Footer />
      </div>

      <Alert show={showAlert} status={alertStatus} msg={alertMsg} />
      <Modal movie={randomOne} open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}

export default App;
