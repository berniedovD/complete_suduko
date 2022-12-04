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

  console.log("No puzzle to render ");
  return (
    <React.Fragment>
      <LoadPuzzle setPuzzle={fullState.setPuzzle}></LoadPuzzle>
    </React.Fragment>
  );
}

export default Suduko;
