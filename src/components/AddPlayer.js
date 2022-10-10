import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../App.css";

export const AddPlayerForm = (props) => {
  const { user, player, setPlayer, players, setPlayers } =
    useContext(GlobalContext);

  const changeFirstName = (event) => {
    setPlayer({ ...player, firstName: event.target.value });
  };

  const changeLastName = (event) => {
    setPlayer({ ...player, lastName: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayers([...players, player]);

    clearState();
  };

  const clearState = () => {
    setPlayer({ firstName: "", lastName: "", active: false, timesBenched: 0 });
  };
  console.log("players", players);
  return (
    <>
      <div id="addplayer">
        {/* <label>First Name</label> */}
        <TextField
          id="outlined-basic1"
          placeholder="First Name"
          value={player.firstName}
          onChange={changeFirstName}
        />
        {/* <label>Last Name</label> */}
        <TextField
          id="outlined-basic2"
          placeholder="Last Name"
          value={player.lastName}
          onChange={changeLastName}
        />
        <Button id="addbutton" variant="outlined" onClick={handleSubmit}>
          {" "}
          Add Player{" "}
        </Button>
      </div>
      <div id="user-title">Hello Coach {user}</div>
    </>
  );
};
