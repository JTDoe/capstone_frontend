import "./App.css";
// import { useState, useEffect } from "react";
import { ActivePlayers } from "./ActivePlayers";
import { Bench } from './Bench'
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
<div>
  <h2>Active Players</h2>
  <ActivePlayers />
  <br></br>
  <br></br>
  <h2>Bench</h2>
  <Bench />
  </div>
  </BrowserRouter>
  )
}

export default App;
