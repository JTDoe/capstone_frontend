import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalProvider";


export const ScoreBoard = () => {

  const { visitorScore } = useContext(GlobalContext);
  const { homeScore } = useContext(GlobalContext);


  return (
    <>
    <h2 className='visitorscore'>{visitorScore}</h2>
  
    <h2 className='homescore'>{homeScore}</h2>
</>
    );
}