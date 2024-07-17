import React from 'react';
import PlayerInfo from "../Components/playerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name="player 1" symbol="X" />
          <PlayerInfo name="player 2" symbol="O" />
        </ol>
        Game Board
      </div>
      LOG
    </main>
  );
}

export default App;
