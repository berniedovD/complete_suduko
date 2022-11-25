import {
  checkFullPuzzle,
  findNextOpenCell,
  printPuzzle,
} from "./sudukoHelperFunctions";

function fillCell(puzzle, cellID) {
  console.log("in solveCell");
  const { row, col } = cellID;
  const cType = puzzle[row][col].cType;
  if (cType === "P") {
    return;
  }
  let currValue = puzzle[row][col].cValue;
  if (currValue === "X") {
    currValue = "0";
  }
  currValue = Number(currValue);
  for (let tryValue = currValue + 1; tryValue <= 9; tryValue++) {
    puzzle[row][col].cValue = tryValue.toString();
    puzzle[row][col].cType = "E";
    let isValid = checkFullPuzzle(puzzle);
    if (isValid) {
      return tryValue.toString();
    } else {
      printPuzzle(puzzle);
    }
  }
  puzzle[row][col].cValue = "X";
  return false;
}

function solveSuduko(inPuzzle, puzzleState) {
  console.log("inside solveSuduko puzzle");
  puzzleState.pState = "active";
  let openCell = findNextOpenCell(inPuzzle);
  if (openCell) {
    let outPuzzle = [...inPuzzle];

    let cellValue = fillCell(inPuzzle, openCell);
    openCell = findNextOpenCell(inPuzzle);
    if (cellValue) {
      outPuzzle = [...inPuzzle];
      puzzleState.lastcell = openCell;

      return outPuzzle;
    } else {
      outPuzzle = [...inPuzzle];
      const { row, col } = puzzleState.lastcell;
      return outPuzzle;
    }
  } else {
    printPuzzle(inPuzzle);
    let isValid = checkFullPuzzle(inPuzzle);
    if (isValid) {
      return inPuzzle;
    } else {
      return false;
    }
  }
}
export default solveSuduko;
