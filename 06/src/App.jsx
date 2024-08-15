import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import GameOver from './components/GameOver.jsx';

function App() {
  return (
    <>

      <Player />
      <div id="challenges">
        <TimerChallenge title="Esay" TargetTime={1}/>
        <TimerChallenge title="Not Esay" TargetTime={5}/>
        <TimerChallenge title="Getting tough" TargetTime={10}/>
        <TimerChallenge title="Hard" TargetTime={15}/>
      </div>
      <GameOver> </GameOver>
       
        
    </>
  );
}

export default App;
