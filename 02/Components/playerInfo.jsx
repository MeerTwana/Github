import { useState } from "react";

export default function PlayerInfo({ initialName, symbol ,isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing(!isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className= {isActive ? 'active': undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
