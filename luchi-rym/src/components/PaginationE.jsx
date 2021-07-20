import React from "react";

const PaginationE = ({ prev, next, onPrev2, onNext2 }) => {
  const handlePrev2 = () => {
    onPrev2();
  };

  const handleNext2 = () => {
    onNext2();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link btn-sm" onClick={handlePrev2}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link btn-sm" onClick={handleNext2}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default PaginationE;
