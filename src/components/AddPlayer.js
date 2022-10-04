import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../App.css";

export const StudentForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const changeFirstName = (event) => {
    setFirstName(event.target.value);

  };
  
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      firstName,
      lastName,
    };
    clearState();
  };
  
  const clearState = () => {
    setFirstName('');
    setLastName('');
  };
  
  return (
    
    <div id='addplayer'>
      {/* <label>First Name</label> */}
      <TextField id="outlined-basic1" placeholder='First Name' value={firstName} onChange={changeFirstName} />
      {/* <label>Last Name</label> */}
      <TextField id="outlined-basic2" placeholder='Last Name' value={lastName} onChange={changeLastName} />
      <Button id="addbutton" variant="outlined" onClick={transferValue}> Add Player </Button>
    </div>
    
  );
}

// export default StudentForm;
