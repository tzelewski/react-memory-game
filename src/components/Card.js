import React from "react";
import Context from "./Context";

function Card({ card, index }) {
  const context = React.useContext(Context);

  return (
    <div
      className={`card ${
        card.isOpen || card.isMatched ? card.type + " open" : ""
      }`}
      onClick={() => context.onCardClick(index)}
    ></div>
  );
}

export default Card;
