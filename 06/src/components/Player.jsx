import { useState,useRef } from "react";


export default function Player() {
  const[enteredName,SetEntaredName]=useState(null);
  const PlayerName =useRef();


   function handleClick(){
    SetEntaredName (PlayerName.current.value);
   }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unkown entity'}</h2>
      <p>
        <input ref={PlayerName} type="text" 
  onChange={handleClick}    />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
