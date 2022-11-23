import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ScoreKeeper = () => {
  return (
    <Stack spacing={6} direction="row">
 
      <Button variant="contained">Home Increase Score</Button>
      <Button variant="contained">Home Decrease Score</Button>
      <Button variant="contained">Away Increase Score</Button>
      <Button variant="contained">Away Decrease Score</Button>
    </Stack>
    );
}