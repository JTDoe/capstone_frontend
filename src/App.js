import "./App.css";
import { useState, useEffect } from "react";
import { ActivePlayers } from "./components/ActivePlayers";
import { Bench } from "./components/Bench";
import { AddPlayerForm } from "./components/AddPlayer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
