import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Welcome() {
  return (
    <p>
      This is a simple WebApp which permits you to find any character from
      famous Rick & Morty animated show. Push the button to see all characters
      or search anything in particular.
    </p>
  );
}

function App() {
  return (
    <div className="container">
      <body>
        <Welcome />
        <div className="princ">
          <div className="sec">
            <Button color="success">Show All Characters</Button>
          </div>
        </div>{" "}
      </body>
    </div>
  );
}

export default App;
