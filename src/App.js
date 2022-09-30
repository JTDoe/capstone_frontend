import "./App.css";
// import { useState, useEffect } from "react";
import { ActivePlayers } from "./components/ActivePlayers"
import { Bench } from "./components/Bench"
import { AddPlayer } from "./components/AddPlayer"
import { AddPlayerButton } from "./components/AddPlayerButton"



function App() {
  return (
    <>
<AddPlayer /> <AddPlayerButton />
<ActivePlayers />
<Bench />
</>
  )
}

export default App;
