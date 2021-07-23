import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GetCharacters from "./components/GetCharacters";

function App() {
  return (
    <main style={{paddingBottom: 20}}>
      <GetCharacters />
    </main>
  );
}

export default App;
