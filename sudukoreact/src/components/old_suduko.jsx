import React, { useState } from "react";

import { checkFullPuzzle } from "./sudukoHelperFunctions";
import sudukoSolveOneCell from "./sudukoSolveOneCell";
import LoadPuzzle from "./loadPuzzle";

import { buildJustPuzzle } from "./buildJustPuzzle";
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
  // eslint-disable-next-line
  function handleClickCell(row, col) {
    return selectClickedCell(fullState, row, col);
  }
  function handleAuto() {
    console.log("clicked auto");
    let [newPuzzle, newDirection] = sudukoSolveOneCell(puzzle, direction);
    setPuzzle(newPuzzle);
    setDirection(newDirection);
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
  if (puzzle.length !== 0) {
    console.log("Puzzle length NOT 0");
    console.log(`Puzzle length=${puzzle.length}`);
    console.log(`Automode=${autoMode}`);
    if (autoMode) {
      setTimeout(handleAuto, 1);
    }
    let iv = checkFullPuzzle(puzzle);
    fullState.iv = iv;
    console.log(`iv=${iv}`);
    let htmlToRender = buildJustPuzzle(fullState, handleClickCell);
    let fullPage = (
      <React.Fragment>
        <button className="button-9" onClick={handleAuto}>
          Single Step Auto Solve
        </button>
        <button
          className="button-9"
          onClick={() => {
            handleAutoButton(setAutoMode);
          }}
        >
          Run Auto Solve
        </button>
        {htmlToRender}
        <h1>V3</h1>
      </React.Fragment>
    );

    return fullPage;
  } else {
    console.log("No puzzle to render ");
    return (
      <React.Fragment>
        <LoadPuzzle setPuzzle={fullState.setPuzzle}></LoadPuzzle>
      </React.Fragment>
    );
  }
}

export default Suduko;
