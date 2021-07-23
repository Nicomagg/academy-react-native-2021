import React from "react";

const AccordionLocat = ({ locations = [] }) => {
  return (
    <div>
      {locations.map((item, index) => (
        <p key={index}>
          <strong>Location: </strong> {item.name}
          <br />
          <strong>Type: </strong> {item.type}
        </p>
      ))}
    </div>
  );
};

export default AccordionLocat;
