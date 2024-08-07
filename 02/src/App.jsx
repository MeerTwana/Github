import React, { useState } from 'react';
import PlayerInfo from "../Components/playerInfo"; // Import the PlayerInfo component
import GameBoard from '../Components/GameBoard'; // Import the GameBoard component
import Log from '../Components/Log'; // Import the Log component
import GameOver from '../Components/GameOver';
import { WINNING_COMBINATIONS } from '../Components/Winning-Combo'; // Import winning combinations


// Initialize the game board with null values
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Function to derive the active player based on game turns
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'; // Default player is 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = "O"; // Switch to 'O' if the last player was 'X'
  }
  return currentPlayer;
}

function App() {
  // State to keep track of the game turns
  const [gameTurns, setGameTurns] = useState([]);
  // Determine the active player based on game turns
  const activePlayer = deriveActivePlayer(gameTurns);

  // Create a copy of the initial game board
  let gameBoard = initialGameBoard.map(row => [...row]);

  // Update the game board based on the turns taken
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // Check for a winner
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol; // Declare the winner
      break;
    }
  }
const hasDraw =  gameTurns.length === 9 && !winner ;
  // Function to handle selecting a square on the game board
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns); // Determine the current player
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns; // Update the game turns
    });
  }



  function handleRematch(){
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          {/* Display Player 1 info */}
          <PlayerInfo
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          {/* Display Player 2 info */}
          <PlayerInfo
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        {/* Display the winner */}
        {(winner|| hasDraw) && 
        (<GameOver winner={winner} onRematch={handleRematch}> </GameOver>)}
        {/* Display the game board */}
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          board={gameBoard} 
        />
      </div>
      {/* Display the game log */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
