import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isSaved, setIsSaved] = useState(true);

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
        <button onClick={() => setIsSaved((isSaved) => !isSaved)}>
          {isSaved ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
}
