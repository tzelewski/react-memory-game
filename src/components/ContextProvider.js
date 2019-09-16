import React from "react";
import Context from "./Context";

function ContextProvider({ children }) {
  const cards = [
    { type: "red", isOpen: false, isMatched: false },
    { type: "green", isOpen: false, isMatched: false },
    { type: "blue", isOpen: false, isMatched: false },
    { type: "black", isOpen: false, isMatched: false },
    { type: "yellow", isOpen: false, isMatched: false },
    { type: "orange", isOpen: false, isMatched: false },
    { type: "gray", isOpen: false, isMatched: false },
    { type: "brown", isOpen: false, isMatched: false }
  ];

  function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  const [gameCards, setCards] = React.useState([]);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(-1);
  const [movesCount, setMovesCount] = React.useState(0);

  return (
    <Context.Provider
      value={{
        cards: gameCards,
        movesCount,
        currentCardIndex,
        startGame: () => {
          let a = shuffle(JSON.parse(JSON.stringify(cards)));
          let b = shuffle(JSON.parse(JSON.stringify(cards)));
          setCards(a.concat(b));
          setCurrentCardIndex(-1);
          setMovesCount(0);
        },
        onCardClick: cardIndex => {

          [...gameCards][cardIndex].isOpen = true;
          if (movesCount === 0 || movesCount % 2 === 0) {
            setCurrentCardIndex(cardIndex);
          } else {
            if ([...gameCards][cardIndex].type === [...gameCards][currentCardIndex].type) {
              console.log("match");
            } else {
                setTimeout(_ => {
                    [...gameCards][cardIndex].isOpen = false;
                    [...gameCards][currentCardIndex].isOpen = false;
                }, 500);
            }
          }
          setCards(gameCards);
          setMovesCount(movesCount + 1);
        }
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
