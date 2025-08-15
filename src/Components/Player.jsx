import React from "react";
import { useState } from "react";

export default function Player({ name, symbol, isActive, getPlayerName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isSaved, setIsSaved] = useState(true);

  /**
   * Handles the change of a player's name.
   *
   * Toggles the saved state and passes the new player name to the parent component or handler.
   *
   * @param {string} playerName - The new name entered for the player.
   */
  function handleNameChange(playerName) {
    setIsSaved((isSaved) => !isSaved);
    getPlayerName(playerName);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isSaved ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => handleNameChange(playerName)}>
          {isSaved ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
}
