import React from "react";
import { AliveBullet, DeadBullet, UnknownBullet } from "./SVG";
import "../App.css";

const CharGrid = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: 512 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="rounded-start card-img-top"
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
                  {item.status === "Alive" ? (
                    <AliveBullet />
                  ) : item.status === "Dead" ? (
                    <DeadBullet />
                  ) : (
                    <UnknownBullet />
                  )}{" "}
                  {item.status}
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
