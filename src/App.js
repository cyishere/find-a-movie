import React, { useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Header from "./components/Header";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import movies from "./data";

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [alertStatus, setAlertStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="app">
        <Header />

        <div className="app_mainScreen">
          <div className="app__searchScreen">
            <SearchBar />

            <List movies={movies} />
          </div>

          <div className="app__listScreen">
            <List movies={movies} />
            <button className="btn pink full-width">find a movie</button>
          </div>
        </div>

        <footer className="app__footer">&copy; cyishere.github.io</footer>
      </div>

      <Alert show={showAlert} status={alertStatus} />
    </>
  );
}

export default App;
