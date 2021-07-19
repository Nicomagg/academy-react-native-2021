import React from "react";
import "../App.css";

const CharGrid = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-3">
          <div className="card">
            <img className="card-img" src={item.image} alt={item.name} />
            <div className="card-body">
              <h5 className="card-title"> {item.name} </h5>
              <hr />
              <p>
                <strong>Status: </strong>
                {item.status}
              </p>
              <p>
                <strong>Last known location: </strong>
                {item.location.name}
              </p>
              <p>
                <strong>First seen in: </strong>
                {item.origin.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharGrid;
