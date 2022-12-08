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
  //let HOST = "54.158.55.239";
  console.log("Entering Suduko function");
  let docURL = document.URL;
  console.log(`URL=${docURL}`);
  let p1 = /http:\/\/(.*)[:/]/;
  p1 = /http:\/\/(\w+\.*\w*)[:/]+/;
  const m1 = docURL.match(p1);
  let uri;
  if (m1 != null) {
    uri = m1[1];
    console.log(`uri from regex=${uri}`);
  } else {
    console.log(`could not parse URI from $docURL`);
  }
  console.log(`uri=${uri}`);
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
  //let urlPrefix = "http://" + HOST;
  //let urlLoadPuzzle = urlPrefix + "/play";
  //let urlLoadFromDB = urlPrefix + "/loadDB";
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
