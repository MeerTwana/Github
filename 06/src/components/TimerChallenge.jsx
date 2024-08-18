import { useState, useRef } from "react";
import Result from "./Result";

export default function TimerChallenge({ title, TargetTime }) {
  const Timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    Timer.current = setTimeout(() => {
      setTimerExpired(true);
      // Adding a slight delay to ensure the Result component is rendered before showing the modal
      setTimeout(() => {
        if (dialog.current) {
          dialog.current.showModal();
        }
      }, 0); // 0 ms delay ensures the dialog is rendered before this runs
    }, TargetTime * 1000);
  }

  function handleStop() {
    clearTimeout(Timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      {/* Render Result component outside of conditional rendering */}
      <Result ref={dialog} TargetTime={TargetTime} result="Lost" />

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
