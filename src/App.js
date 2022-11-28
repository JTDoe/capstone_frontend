import "./App.css";
import { ActivePlayers } from "./components/ActivePlayers";
import { Bench } from "./components/Bench";
import { AddPlayerForm } from "./components/AddPlayer";
import Modal from "./components/UI/Modal";
import { ScoreKeeper } from "./components/ScoreKeeper"
import { ScoreBoard } from './components/ScoreBoard';
function App() { 
  return (
    <>
      <Modal />
      <h1 id="main-title">Player Tracker</h1>
      <AddPlayerForm />

      <br></br>
      <div id="active-player-table">
        <h2>Active Players</h2>
        <ActivePlayers />
      </div>
      <br></br>
      <div id="bench-player-table">
        <h2>Benched Players</h2>
        <Bench />
      </div>
      <div id="scorekeeper">
    <ScoreKeeper></ScoreKeeper>
    </div>
    <div id="scoreboard">
      <ScoreBoard></ScoreBoard>
    </div>

    </>
  );
}

export default App;
