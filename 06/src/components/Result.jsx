import { forwardRef, useImperativeHandle, useRef } from "react";

const Result = forwardRef(function Result({ onReset, TargetTime ,RemainingTime }, ref) {
  const dialogRef = useRef(); // Create a ref for the dialog
const userLost = RemainingTime <=0 
const formatedRemainTime =(RemainingTime/1000).toFixed(2);
const Score = (1-RemainingTime/(TargetTime*1000))*100;
  // Use `useImperativeHandle` to expose methods to the parent component
  useImperativeHandle(ref, () => ({
    open() {
      if (dialogRef.current) {
        dialogRef.current.showModal(); // Use showModal() to open the dialog as a modal
      }
    }
  }));

  return (
    <dialog ref={dialogRef} className="result-modal">
     {userLost && <h2>You Lost</h2>}
     {!userLost && <h2>You Won And Your Score {Score}</h2>}
      <p>The target time was {TargetTime} seconds.</p>
      <p>You Stopped the timer  <strong> {formatedRemainTime} secnonds left</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
