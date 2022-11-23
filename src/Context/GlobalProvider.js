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
  const [user, setUser] = useState("");
  const [open, setOpen] = useState(Boolean);
  const [visitorScore, setVisitorScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const value = {
    player,
    setPlayer,
    players,
    setPlayers,
    user,
    setUser,
    open,
    setOpen,
    visitorScore,
    setVisitorScore,
    homeScore,
    setHomeScore,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
