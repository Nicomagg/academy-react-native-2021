import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import EncHead from "./components/EncHead";

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
    <EncHead />
    <App />
    <Foot />
  </>,
  document.getElementById("root")
);
