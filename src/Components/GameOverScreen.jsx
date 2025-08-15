import React from "react";

export default function GameOverScreen({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} Wins this game</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
}
