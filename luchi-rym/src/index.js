import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Enc() {
  return (
    <header>
      <h1>
        Rick & Morty's Simple Wiki <small>by Luchi</small>
      </h1>
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
