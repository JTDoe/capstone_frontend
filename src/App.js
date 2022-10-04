import "./App.css";
// import { useState, useEffect } from "react";
import { ActivePlayers } from "./components/ActivePlayers"
import { Bench } from "./components/Bench"
import { StudentForm } from "./components/AddPlayer"


function App() {
  return (
    <>
   
      <StudentForm />
      <br></br>
      {/* <TableData /> */}
      <ActivePlayers />
      <br></br>
      <Bench />
      
    </>
  );
}

export default App;
