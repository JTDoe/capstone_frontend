import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { GlobalContext } from "../Context/GlobalProvider";



export const ScoreKeeper = () => {
  const { setVisitorScore } = useContext(GlobalContext);
  const { setHomeScore } = useContext(GlobalContext);
  console.log(setVisitorScore);
  
  return (
    <>
      <Stack spacing={6} direction="row">
        <Button variant="contained" onClick={() => setHomeScore + 1}>
          Home Increase Score
        </Button>
        <Button variant="contained" onClick={() => setHomeScore - 1}>
          Home Decrease Score
        </Button>
        <Button variant="contained" onClick={() => setVisitorScore + 1}>
          Away Increase Score
        </Button>
        <Button variant="contained" onClick={() => setVisitorScore - 1}>
          Away Decrease Score
        </Button>
      </Stack>
    </>
  );
};
