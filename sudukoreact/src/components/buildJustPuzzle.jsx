import React from "react";
import { handleKeyDown } from "./handleKeyDown";
import TableRow from "./TableRow";

//////////////////////////////////////////////////////////////////
function buildJustPuzzle(fullState, clickCell) {
  function handleKeyDownPre(e) {
    console.log("in handlekeyDown");
    handleKeyDown(fullState, e, clickCell);
  }
  const { puzzle } = fullState;
  let tRows = [];
  for (let r = 0; r < 9; r++) {
    let puzzRow = puzzle[r];
    tRows.push(
      <TableRow
        key={r}
        puzzRow={puzzRow}
        rowNum={r}
        handleClick={clickCell}
      ></TableRow>
    );
  }
  const puzzleTable = (
    <table className="dov-table">
      <tbody>{tRows}</tbody>
    </table>
  );
  let pStateClass = "puz-state-good";
  let pValid = "Good";
  if (fullState.iv === false) {
    pStateClass = "puz-state-bad";
    pValid = "Bad";
  }

  return (
    <span
      className="flex-child"
      tabIndex="0"
      onKeyDown={(e) => handleKeyDownPre(e)}
    >
      <div>
        <h1 className={pStateClass}>PUZZLE is {pValid}</h1>
      </div>
      <div className="dov-div">{puzzleTable}</div>
    </span>
  );
}

export { buildJustPuzzle };
