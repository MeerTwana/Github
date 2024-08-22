import { useState } from "react";

export default function Sidebar() {
  const [showColors, setShowColors] = useState(false);
  const [notes, setNotes] = useState([]);
  const [notePositions, setNotePositions] = useState([]);
  const [noteMarkers, setNoteMarkers] = useState([]);

  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-blue-400", "bg-purple-400"];
  
  // Positioning increment for new notes
  const positionIncrement = 70; // Adjust this value as needed

  // Handle the selection of a color and create a new note
  const handleColorClick = (color) => {
    // Determine the next position based on the last note's position
    const newPosition = notePositions.length
      ? {
          x: notePositions[notePositions.length - 1].x + positionIncrement,
          y: notePositions[notePositions.length - 1].y
        }
      : { x: 0, y: 0 };

    setNotes([...notes, { color, content: "", id: Date.now() }]);
    setNotePositions([...notePositions, newPosition]);
    setShowColors(false);
  };

  // Update the note content as the user types
  const handleNoteChange = (index, content) => {
    const updatedNotes = [...notes];
    updatedNotes[index].content = content;
    setNotes(updatedNotes);
  };

  // Handle saving of the note
  const handleSaveClick = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].content = updatedNotes[index].content; // Here you can add any save logic needed
    setNotes(updatedNotes);
    console.log("Note saved:", updatedNotes[index]); // Example save process
  };

  // Handle closing of the note
  const handleCloseClick = (index) => {
    const closedNote = notes[index];
    setNoteMarkers([...noteMarkers, { ...closedNote, ...notePositions[index] }]);

    const updatedNotes = notes.filter((_, i) => i !== index);
    const updatedPositions = notePositions.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    setNotePositions(updatedPositions);
  };

  return (
    <div className="relative p-4">
      {/* Button to toggle the color palette */}
      <button
        onClick={() => setShowColors(!showColors)}
        className="p-2 bg-black text-white rounded-full focus:outline-none"
      >
        +
      </button>

      {showColors && (
        <div className="absolute left-0 mt-2 flex space-x-2">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              className={`w-8 h-8 rounded-full cursor-pointer ${color}`}
            ></div>
          ))}
        </div>
      )}

      {/* Display of notes */}
      <div className="mt-8 flex gap-x-2">
        {notes.map((note, index) => (
          <div
            key={note.id}
            className={` w-64 h-48  mt-6 p-4 rounded-lg ${note.color} flex flex-col justify-between`}
            style={{
              left: `${notePositions[index].x}px`,
              top: `${notePositions[index].y}px`,
              transition: "none", // Remove movement effect
            }}
          >
            {/* Input field for the note */}
            <input
              type="text"
              value={note.content}
              onChange={(e) => handleNoteChange(index, e.target.value)}
              className={`w-full h-32 p-2 text-black rounded-md ${note.color}`}
            />

            {/* Buttons inside the note */}
            <div className="flex justify-between mt-5">
              <button
                onClick={() => handleSaveClick(index)}
                className="p-2 bg-white text-black rounded-full"
              >
                Save
              </button>
              <button
                onClick={() => handleCloseClick(index)}
                className="p-2 bg-white text-black rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        ))}

        {/* Display color markers where notes were closed */}
        {noteMarkers.map((marker, index) => (
          <div
            key={index}
            className={`w-64 h-48  mt-6 p-4 rounded-lg  flex flex-col justify-between ${marker.color}`}
            
          ></div>
        ))}
      </div>
    </div>
  );
}
