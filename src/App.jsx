import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleSelection() {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <GameBoard
          currentPlayer={currentPlayer}
          onUserClick={handleSelection}
        />
        <Log />
      </div>
    </main>
  );
}

export default App;
