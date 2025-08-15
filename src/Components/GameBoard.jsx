import React from "react";

/**
 * GameBoard component renders the tic-tac-toe game board as a grid of buttons.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onSelectSquare - Callback function invoked when a square is selected. Receives the row and column indices as arguments.
 * @param {Array<Array<string|null>>} props.boards - A 2D array representing the current state of the game board. Each cell contains either 'X', 'O', or null.
 *
 * @returns {JSX.Element} The rendered game board as an ordered list of rows and columns.
 */
export default function GameBoard({ onSelectSquare, boards }) {
  //   const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard].map((row) => [...row]);
  //     updatedBoard[rowIndex][colIndex] = currentPlayer;
  //     return updatedBoard;
  //   });
  //   onUserClick();
  // }

  return (
    <ol id="game-board">
      {boards.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
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
