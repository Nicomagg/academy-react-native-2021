import React from "react";

const AccordionEpi = ({ episodes = [] }) => {
  return (
    <div>
      {episodes.map((item, index) => (
        <p key={index}>
          <strong>Episode: </strong> {item.episode}
          <br />
          <strong>Name: </strong> {item.name}
        </p>
      ))}
    </div>
  );
};

export default AccordionEpi;
