import React from "react";
import "./App.css";
import Board from "./components/Board";
import ContextProvider from "./components/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Board></Board>
      </div>
    </ContextProvider>
  );
}

export default App;
