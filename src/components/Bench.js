import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { GlobalContext } from "../Context/GlobalProvider";

export const Bench = () => {
  const { players, setPlayers } = useContext(GlobalContext);
  const rows = players.filter((player) => player.active === false);

  const handleActive = (name) => {
    setPlayers((prevState) => {
      let newState = prevState.map((player) => {
        if (player.lastName === name) {
          return { ...player, active: true };
        }
        return player;
      });
      return newState;
    });
  };
  console.log("players", players);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Times Benched</TableCell>
            <TableCell align="right">Move to Game</TableCell>
            <TableCell align="right">Remove</TableCell>
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
                <ArrowUpwardIcon onClick={() => handleActive(row.lastName)} />
              </TableCell>
              <TableCell align="right">
                <PersonRemoveIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
