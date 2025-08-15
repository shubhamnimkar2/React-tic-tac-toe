/**
 * App.jsx
 *
 * Main entry point for the React Tic-Tac-Toe game application.
 * Manages player names, game state, turn logic, board rendering, and game outcome.
 *
 * Components Used:
 * - Player: Displays and manages player names and active status.
 * - GameBoard: Renders the tic-tac-toe board and handles square selection.
 * - Log: Shows the history of moves.
 * - GameOverScreen: Displays the winner or draw and allows restarting the game.
 *
 * Constants:
 * - PLAYERS: Default player names mapped to their symbols.
 * - INITIAL_BOARD: 3x3 matrix representing the empty game board.
 *
 * Functions:
 *
 * @function deriveActivePlayer
 * @description Determines the active player based on the current turn history.
 * @param {Array} turns - Array of turn objects representing the game history.
 * @returns {string} The symbol ("X" or "O") of the active player.
 *
 * @function deriveGameBoard
 * @description Generates the current state of the game board from the turn history.
 * @param {Array} gameTurns - Array of turn objects representing the game history.
 * @returns {Array<Array<string|null>>} 2D array representing the board state.
 *
 * @function deriveWinner
 * @description Checks the current board state for a winner based on winning combinations.
 * @param {Array<Array<string|null>>} gameBoard - The current state of the game board.
 * @returns {string} The symbol ("X" or "O") of the winner, or an empty string if no winner.
 *
 * @function App
 * @description Main React component for the Tic-Tac-Toe game. Handles state management, player input, game logic, and rendering of all child components.
 * @returns {JSX.Element} The rendered game UI.
 *
 */
import React from "react";
import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import GameOverScreen from "./Components/GameOverScreen";
import { WINNING_COMBINATIONS } from "./winningCombinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_BOARD].map((row) => [...row]);

  for (let turn of gameTurns) {
    const { player, square } = turn;
    gameBoard[square.row][square.col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard) {
  let winner = "";

  for (let square of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[square[0].row][square[0].column];
    const secondSquareSymbol = gameBoard[square[1].row][square[1].column];
    const thirdSquareSymbol = gameBoard[square[2].row][square[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  return winner;
}

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);
  const isDraw = gameTurns.length === 9 && !winner;
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelection(rowIndex, colIndex) {
    setGameTurns((prevturns) => {
      const currentPlayer = deriveActivePlayer(prevturns);
      const updatedTurns = [
        { player: currentPlayer, square: { row: rowIndex, col: colIndex } },
        ...prevturns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={playerNames.X}
            symbol="X"
            isActive={activePlayer === "X"}
            getPlayerName={(name) =>
              setPlayerNames((prev) => ({ ...prev, X: name.toUpperCase() }))
            }
          />
          <Player
            name={playerNames.O}
            symbol="O"
            isActive={activePlayer === "O"}
            getPlayerName={(name) =>
              setPlayerNames((prev) => ({ ...prev, O: name.toUpperCase() }))
            }
          />
        </ol>
        <GameBoard
          boards={gameBoard}
          onSelectSquare={(rowIndex, colIndex) =>
            handleSelection(rowIndex, colIndex)
          }
        />
      </div>
      {winner && (
        <div id="winner">
          <h2>Winner: {winner}</h2>
        </div>
      )}
      {((gameTurns.length > 0 && winner) || isDraw) && (
        <GameOverScreen
          winner={playerNames[winner]}
          onRestart={() => setGameTurns([])}
        />
      )}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
