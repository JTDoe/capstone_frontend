import "./App.css";
import { useState, useEffect } from "react";
import { ActivePlayers } from "./ActivePlayers";
import { Bench } from './Bench'

function App() {
  return (
<div>
  <ActivePlayers />
  <br></br>
  <br></br>
  <Bench />
  </div>
  )
}

export default App;
