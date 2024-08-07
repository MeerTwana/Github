import { useState } from "react";

// PlayerInfo component to display and edit player information
export default function PlayerInfo({ initialName, symbol, isActive }) {
  // State to keep track of the player's name
  const [playerName, setPlayerName] = useState(initialName);
  // State to determine if the name is being edited
  const [isEditing, setEditing] = useState(false);

  // Toggle the editing state when the edit button is clicked
  function handleEditClick() {
    setEditing(!isEditing);
  }

  // Update the playerName state when the input value changes
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // Default display of the player's name
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // If the player name is being edited, display an input field
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
    // Apply the 'active' class if the player is currently active
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {/* Display the player's name and symbol */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      {/* Button to toggle between editing and saving the player name */}
      <button onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
