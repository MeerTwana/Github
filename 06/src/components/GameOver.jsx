export default function GameOver(result , TargetTime) {
    return (
    <dialog className="result-model">
<h2> You {result }</h2>
<p>The target Time Was <strong> X seconds left</strong></p>
<p> you stoped time with  <strong> X seconds left</strong></p>
<form method="dialog">
    <button>Close</button>
</form>
    </dialog>
    );
  }
  