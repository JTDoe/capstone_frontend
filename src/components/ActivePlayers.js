import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { GlobalContext } from "../Context/GlobalProvider";

export const ActivePlayers = () => {
  const { players, setPlayers } = useContext(GlobalContext);
  const rows = players.filter((player) => player.active === true);

  const handleBench = (name) => {
    setPlayers((prevState) => {
      let newState = prevState.map((player) => {
        if (player.lastName === name) {
          return {
            ...player,
            active: false,
            timesBenched: player.timesBenched + 1,
          };
        }
        return player;
      });
      return newState;
    });
  };

  const removePlayer = (name) => {
    const rows = [...players]
    rows.splice(name, 1)
    setPlayers(rows)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Times Benched</TableCell>
              <TableCell align="right">Move to Bench</TableCell>
              <TableCell align="right">Remove Player from Game</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.lastName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.timesBenched}</TableCell>
                <TableCell align="right">
                  <ArrowDownwardIcon
                    onClick={() => handleBench(row.lastName)}
                  />
                </TableCell>
                <TableCell align="right">
                  <PersonRemoveIcon onClick={() => removePlayer(row.lastName)}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
