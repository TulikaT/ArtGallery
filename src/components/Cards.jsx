import React from "react";
import "./Cards.css";

function Cards({ heading, array }) {
  return (
    <div>
      <h2>{heading}</h2>
      <div className="cards">
        {array.map((link, index) => {
          return <img src={link} alt={index} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
