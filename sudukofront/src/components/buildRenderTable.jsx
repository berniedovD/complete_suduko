import React from "react";
import { stringToSuduko } from "./sudukoHelperFunctions";

function buildRenderTable(puzzleList, setPuzzleList, setPuzzle) {
  console.log("im buildRenderTable");
  function handleClick(e, puzzle) {
    console.log("in handleClick of LoadPuzzle component");
    let newList = [...puzzleList];
    for (let p of newList) {
      if (p.puzzleID === puzzle.puzzleID) {
        p.selected = true;
        let puzzleString = p.sudukoString;
        let newPuzzle = stringToSuduko(puzzleString);
        setPuzzle(newPuzzle);
      } else {
        p.selected = false;
      }
    }

    setPuzzleList(newList);
  }
  let rList = [];
  let rCount = 1;
  let rClass = "regular";

  for (let puzzle of puzzleList) {
    if (puzzle.selected === true) {
      rClass = "active-row";
    } else {
      rClass = "regular";
    }
    rList.push(
      <tr key={puzzle.puzzleID} className={rClass}>
        <td>{rCount}</td>
        <td
          onClick={(e) => {
            handleClick(e, puzzle);
          }}
        >
          {puzzle.puzzleID}
        </td>
        <td> {puzzle.sudukoString}</td>
      </tr>
    );
    rCount += 1;
  }
  return rList;
}
export default buildRenderTable;
