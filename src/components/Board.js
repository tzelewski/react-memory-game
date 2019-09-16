import React from "react";
import Card from "./Card";
import Context from "./Context";

function Board() {
  const context = React.useContext(Context);

  return (
    <div>
      <div>
        <button onClick={() => context.startGame()}> Start game</button>
        <p>{context.movesCount} completed moves</p>
        <div className="board">
          {context.cards.map((card, index) => (
            <Card card={card} index={index}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Board;
