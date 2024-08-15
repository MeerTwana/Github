export default function GameOver({ result, TargetTime }) {
    return (
      <dialog className="result-modal" open>
        <h2>You {result}</h2>
        <p>The target time was {TargetTime} seconds.</p>
        <p>You stopped time with {TargetTime} seconds left.</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
  