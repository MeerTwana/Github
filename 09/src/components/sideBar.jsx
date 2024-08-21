
import { useState } from "react";

function Sidebar() {
  const [showColors, setShowColors] = useState(false);
  const [notes, setNotes] = useState([]);

  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-blue-400", "bg-purple-400"];

  const handleColorClick = (color) => {
    setNotes([...notes, { color }]);
    setShowColors(false);
  };

  return (
    <div className="relative p-4">
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

      <div className="mt-8 space-y-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`w-32 h-32 rounded-lg ${note.color} p-2 text-white`}
          >
            This is a note
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
