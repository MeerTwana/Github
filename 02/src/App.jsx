import React from 'react';
import PlayerInfo from "../Components/playerInfo";
import GameBoard from '../Components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialname="player 1" symbol="X" />
          <PlayerInfo initialname="player 2" symbol="O" />
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  );
}

export default App;
