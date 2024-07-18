import { useState } from "react";

const initialGameBoard = [

[null,null,null],
[null,null,null],
[null,null,null]
];

export default function  GameBoard({onSelectSquare,activePlayerSymbol}){
  const[gameboard,SetGameBoard]=  useState(initialGameBoard);



  function handleSelectionSquare(rowIndex,colIndex){
    SetGameBoard( (prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex]=activePlayerSymbol
return updatedBoard;
    });
    onSelectSquare();
  }

    
return(
 <ol id="game-board">
{gameboard.map ((row,rowIndex) => 
    ( <li key={rowIndex}>

<ol>
 {row.map((playerSymbol,colIndex) =>
    ( <li key={colIndex}>
    <button onClick={ () => handleSelectionSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>
    ))}   
</ol>

</li>
))}




</ol>
);
}