import React, { useState } from "react";

import sudukoSolveOneCell from "./sudukoSolveOneCell";
import LoadPuzzle from "./loadPuzzle";
import { selectClickedCell } from "./selectClickedCell";
// eslint-disable-next-line
function handleAutoButton(setAutoMode) {
  setAutoMode(true);
}
// eslint-disable-next-line
function handleStopAuto(setAutoMode) {
  setAutoMode(false);
}
// eslint-disable-next-line
function autoSolve(setPuzzle, setDirection, puzzle, direction, autoMode) {
  if (autoMode) {
    let [newPuzzle, newDirection] = sudukoSolveOneCell(puzzle, direction);
    setPuzzle(newPuzzle);
    setDirection(newDirection);
  }
}
///////////////////////////////////////////////////////////////////////
function Suduko() {
  let HOST = "54.158.55.239";
  console.log("Entering Suduko function");
  // eslint-disable-next-line
  function handleClickCell(row, col) {
    return selectClickedCell(fullState, row, col);
  }
  console.log("top of Suduko function - top");

  /////   set initial states
  const [puzzle, setPuzzle] = useState([]);
  const [lastSelected, setLastSelected] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("Forward");
  const [autoMode, setAutoMode] = useState(false);
  const fullState = {
    puzzle: puzzle,
    setPuzzle: setPuzzle,
    lastSelected: lastSelected,
    setLastSelected: setLastSelected,
    direction: direction,
    setDirection: setDirection,
    autoMode: autoMode,
    setAutoMode: setAutoMode,
  };

  ///////
  console.log(fullState);
  let urlPrefix = "http://" + HOST;
  let urlLoadPuzzle = urlPrefix + "/play";
  let urlLoadFromDB = urlPrefix + "/loadDB";
  /*
  return (
    <React.Fragment>
      <h1>Dov Suduko V2.0</h1>
      <p>Pick a location to load puzzles or just load the default:</p>
      <a href={urlLoadFromDB}>Load Puzzle from Database</a>
      <br></br>
      <a href={urlLoadPuzzle}> Load Default</a>
    </React.Fragment>
  );
  */

  return (
    <React.Fragment>
      <LoadPuzzle setPuzzle={fullState.setPuzzle}></LoadPuzzle>
    </React.Fragment>
  );
}

export default Suduko;
