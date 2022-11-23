import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalProvider";


export const ScoreBoard = () => {

  const { visitorScore, setVisitorScore } = useContext(GlobalContext);
  const { homeScore, setHomeScore } = useContext(GlobalContext);


  return (
  <ScoreBoard>
    <h2>{visitorScore}</h2>
    <h2>{homeScore}</h2>
  </ScoreBoard>
    );
}