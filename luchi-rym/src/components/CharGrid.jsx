import React from "react";
import "../App.css";

const CharGrid = ({ characters = [] }) => {
  return (
    <div className="row" style={{ padding: 10 }}>
      {characters.map((item, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="img-fluid rounded-start"
                src={item.image}
                alt={item.name}
                style={{ minWidth: 170 }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> {item.name} </h5>
                <hr />
                <p className="card-text">
                  <strong>Status: </strong>
                  {item.status} {/* {item.status=="Dead" ? } */}
                  <br />
                  <strong>Last known location: </strong>
                  {item.location.name}
                  <br />
                  <strong>First seen in: </strong>
                  {item.origin.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharGrid;
