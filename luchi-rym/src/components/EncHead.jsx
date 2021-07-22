import React from "react";
import EpisLocat from "./EpisLocat";
import { RyMSVG } from "./SVG";

function Head() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <RyMSVG />
            Rick & Morty <small>Wiki</small>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#EpiLoca"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="EpiLoca">
            <EpisLocat />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Head;
