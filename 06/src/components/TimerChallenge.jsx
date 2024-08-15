import { useState, useRef } from "react";
import GameOver from "./GameOver";

export default function TimerChallenge({ title, TargetTime }) {
  const Timer = useRef();
  const [timerStarted, SetTimerStarted] = useState(false);
  const [timerExpired, SetTimerExpired] = useState(false);

  function handleStart() {
    SetTimerStarted(true);
    Timer.current = setTimeout(() => {
      SetTimerExpired(true);
    }, TargetTime * 1000);
  }

  function handleStop() {
    clearTimeout(Timer.current);
  }

  return (
    <>
      {timerExpired && <GameOver TargetTime={TargetTime} result="Lost" />}

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {TargetTime} second{TargetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className="active">
          {timerStarted ? "Time is Running" : "Timer Is Not Active"}
        </p>
      </section>
    </>
  );
}
