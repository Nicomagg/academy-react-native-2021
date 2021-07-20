import React from "react";

const PaginationL = ({ prev, next, onPrev1, onNext1 }) => {
  const handlePrev1 = () => {
    onPrev1();
  };

  const handleNext1 = () => {
    onNext1();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link btn-sm" onClick={handlePrev1}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link btn-sm" onClick={handleNext1}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default PaginationL;
