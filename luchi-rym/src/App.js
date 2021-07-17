import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Button } from "reactstrap";

function Welcome() {
  return (
    <>
      <div className="box">
        <form>
          <input
            className="form-control src"
            name="search"
            name="search"
            type="text"
            placeholder="Search Anything"
          />
        </form>
      </div>
      <div>
        <p>
          This is a simple WebApp which permits you to find any character from
          famous Rick & Morty animated show. Push the button to see all
          characters or search anything in particular.
        </p>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <main>
        <Welcome />
        <div className="princ">
          <div className="sec">
            <Button color="success">Show All Characters</Button>
          </div>
        </div>{" "}
      </main>
    </div>
  );
}

export default App;
