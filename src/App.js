import "./App.css";
import { useState, useEffect } from "react";
import { ActivePlayers } from "./components/ActivePlayers"
import { Bench } from "./components/Bench"
import { AddPlayerForm } from "./components/AddPlayer"


function App() {
  
  return (
    <>
   
      <AddPlayerForm />
      <br></br>
      {/* <TableData /> */}
      <ActivePlayers />
      <br></br>
      <Bench />
      
    </>
  );
}

export default App;
