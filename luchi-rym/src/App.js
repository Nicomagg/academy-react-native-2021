import React from "react";
import "./App.css";
import GetCharacters from "./components/GetCharacters";

function Welcome() {
  return (
    <div className="container mt-5">
      <div className="box">
        <form>
          <input
            className="form-control src"
            name="search"
            type="text"
            placeholder="Search Anything"
          />
        </form>
      </div>
      <div className="mt-1">
        <p>
          This is a simple WebApp which permits you to find any character from
          famous Rick & Morty animated show. Push the button to see all
          characters or search anything in particular.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <main>
        <Welcome />
        <GetCharacters />
      </main>
    </>
  );
}

export default App;
