import React from "react";
import "../App.css";

const Pagination = ({ prev, next, onPrev, onNext }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-1">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="btn page-link" onClick={handlePrev}>
              Previous
            </button>
          </li>
        ): prev}
        {next ? (
          <li className="page-item">
            <button className="btn page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : undefined}
      </ul>
    </nav>
  );
};

export default Pagination;
