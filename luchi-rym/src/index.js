import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Enc() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Rick & Morty <small>Wiki</small>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample01"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  All Locations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All Episodes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Foot() {
  return (
    <footer style={{ textAlign: "center" }}>
      {" "}
      Globant, {new Date().getFullYear()}{" "}
    </footer>
  );
}

ReactDOM.render(
  <>
    <Enc />
    <App />
    <Foot />
  </>,
  document.getElementById("root")
);
