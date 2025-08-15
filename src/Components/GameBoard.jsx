import { useState } from "react";
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ currentPlayer, onUserClick }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard].map((row) => [...row]);
      updatedBoard[rowIndex][colIndex] = currentPlayer;
      return updatedBoard;
    });
    onUserClick();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, idx) => (
              <li key={idx}>
                <button onClick={() => handleClick(rowIndex, idx)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
