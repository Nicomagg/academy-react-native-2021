import React from "react";
import { AliveBullet, DeadBullet, UnknownBullet } from "./SVG";
import "../App.css";

export const CharGrid = ({ characters = [] }) => {
  return (
    <div className="row" style={{textAlign:"center"}}>
      {characters.map((item, index) => ( <>
                  <div id="chcard" key={index} className="card mb-3" style={{ maxWidth: 514 }}>
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
              <button value={item.name} onClick={""} data-bs-toggle="modal" data-bs-target="#charMod" className="btn btn-light"><h5  className="card-title"> {item.name} </h5></button>
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
        <div className="modal fade" id="charMod" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header modal-align-content-center">
            <img src={item.image} alt={item.name} style={{ maxWidth: 170 }} /> <h5 className="modal-title">{item.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
                <div className="modal-body">
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
                </p>)
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div> </>
      ))}
    </div>
    
  );
};

