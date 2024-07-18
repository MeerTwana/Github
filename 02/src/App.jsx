import React from 'react';
import PlayerInfo from "../Components/playerInfo";
import GameBoard from '../Components/GameBoard';
import { useState } from 'react';

function App() {
const [activePlayer,SetActivePlayer]=useState("X");

function handleSelectSquare(){
  SetActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' :'X' );
}


  return (
    <main>
      <div id="game-container">
        <ol id="players"  className='highlight-player'>
          <PlayerInfo
           initialname="player 1"
            symbol="X"
            isActive={activePlayer ==='X'}
            />

          <PlayerInfo
           initialname="player 2" 
           symbol="O" 
           isActive={activePlayer ==='O'} 
          />

        </ol>

        <GameBoard  onSelectSquare={handleSelectSquare}
         activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
