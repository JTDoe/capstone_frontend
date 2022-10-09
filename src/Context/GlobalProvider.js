import React, { createContext, useState } from "react";
const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    active: false,
    timesBenched: 0,
  });
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState('')
  


  const value = {
    player,
    setPlayer,
    players,
    setPlayers,
    user,
    setUser,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
