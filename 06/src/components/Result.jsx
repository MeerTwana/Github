import { forwardRef } from "react";

const Result = forwardRef(function Result({ result, TargetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was {TargetTime} seconds.</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
