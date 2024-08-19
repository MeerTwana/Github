import { useState, useRef } from "react";
import Result from "./Result";

export default function TimerChallenge({ title, TargetTime }) {
  const Timer = useRef();
  const dialog = useRef(); // Ref to control the dialog
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemain, setTimeRemain] = useState(TargetTime * 1000)
  const timerIsActive = timeRemain > 0 &&  
  timeRemain < TargetTime * 1000
if(timeRemain <=0) {
  clearInterval(Timer.current);
  dialog.current.open();
}
function handleReset (){
  setTimeRemain(TargetTime * 1000);

}

  function handleStart() {
    //setTimerStarted(true);
    Timer.current = setInterval(() => {
      setTimeRemain(prevTimeRemain => prevTimeRemain - 10)
      // setTimerExpired(true);
      // if (dialog.current) {
      //   dialog.current.open(); // Call the open method exposed by useImperativeHandle
      // }
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(Timer.current);
  }

  return (
    <>
      {/* Render Result component with ref */}
      <Result ref={dialog}
       TargetTime={TargetTime}
        RemainingTime = {timeRemain}
        onReset={handleReset}/>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {TargetTime} second{TargetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className="active">
          {timerIsActive ? "Time is Running" : "Timer Is Not Active"}
        </p>
      </section>
    </>
  );
}
