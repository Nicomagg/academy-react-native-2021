import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import EncHead from "./components/EncHead";

function Foot() {
  return (
    <footer>
      <div style={{  backgroundColor: "white"}}><img style={{maxWidth:150}} src="https://communications.globant.com/Comm/Corporate/signature/2019/glb.gif" alt="Globant" />{new Date().getFullYear()}</div>
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
