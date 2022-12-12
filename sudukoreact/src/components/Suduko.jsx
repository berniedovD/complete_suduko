import React, { useState } from "react";

import sudukoSolveOneCell from "./sudukoSolveOneCell";
import LoadPuzzle from "./loadPuzzle";
import { selectClickedCell } from "./selectClickedCell";
import { checkFullPuzzle } from "./sudukoHelperFunctions";
import { buildJustPuzzle } from "./buildJustPuzzle";
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
  function handleAuto() {
    console.log("clicked auto");
    let [newPuzzle, newDirection] = sudukoSolveOneCell(puzzle, direction);
    setPuzzle(newPuzzle);
    setDirection(newDirection);
  }
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
        <span className="flex-parent">
          <div className="flex-child">
            <h2>
              To manually solve puzzle: click on cell or navigate to cells with
              left and right buttons. Once cell is highlighted - type a number
              from 1 -9 to fill cell - type 0 to empty cell.
            </h2>
            <div>
              {" "}
              <button className="button-9" onClick={handleAuto}>
                Single Step Auto Solve
              </button>
            </div>
            <div>
              <button
                className="button-9 bt-green"
                onClick={() => {
                  handleAutoButton(setAutoMode);
                }}
              >
                Run Auto Solve
              </button>
            </div>
          </div>
          {htmlToRender}
        </span>
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
