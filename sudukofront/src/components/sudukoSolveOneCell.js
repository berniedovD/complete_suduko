import _ from "lodash";
import {
  checkFullPuzzle,
  // eslint-disable-next-line
  printPuzzle,
  flattenSuduko,
} from "./sudukoHelperFunctions";

function findNextOpenCell(puzzle) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const { cValue } = puzzle[row][col];
      if (cValue === " ") {
        return { row: row, col: col };
      }
    }
  }
  return false;
}

function findPrevCell(puzzle) {
  const flatPuzzle = flattenSuduko(puzzle);
  for (const [index, element] of flatPuzzle.entries()) {
    if (index === flatPuzzle.length - 1) {
      return false;
    }
    const nextVal = flatPuzzle[index + 1].cValue;
    if (nextVal === " " && element.cValue !== " ") {
      return { row: element.row, col: element.col };
    }
  }
  return false;
}

function fillCell(inPuzzle, inRow, inCol) {
  let newPuzzle = _.cloneDeep(inPuzzle);
  //printPuzzle(newPuzzle, "at entry to fill cell");
  const row = inRow;
  const col = inCol;
  if (row > 8 || col > 8 || row < 0 || col < 0) {
    return;
  }
  let currentValue = newPuzzle[row][col].cValue;
  currentValue = Number(currentValue);
  if (currentValue === " ") {
    currentValue = 0;
  }

  for (let tryValue = currentValue + 1; tryValue < 10; tryValue++) {
    let tvStr = tryValue.toString();
    newPuzzle[row][col].cValue = tvStr;
    if (checkFullPuzzle(newPuzzle)) {
      return tvStr;
    } else {
    }
  }
  const tvStr = " ";
  return tvStr;
}

function sudukoSolveOneCell(puzzle, direction) {
  const newPuzzle = _.cloneDeep(puzzle);
  //printPuzzle(newPuzzle, "at start of solveonecell");
  let needToBackTrack = false;
  let nextCell;
  let newVal;
  if (direction === "Forward") {
    let nextCell = findNextOpenCell(newPuzzle);
    //printPuzzle(newPuzzle, "after findnextcell");

    const { row, col } = nextCell;
    //printPuzzle(newPuzzle, "before call to fillCell");
    let newVal = fillCell(newPuzzle, row, col);
    if (newVal !== " ") {
      newPuzzle[row][col].cValue = newVal.toString();
    } else {
      newPuzzle[row][col].cValue = " ";
      needToBackTrack = true;
      direction = "Backward";
    }
  } else {
    needToBackTrack = true;
  }
  while (needToBackTrack) {
    nextCell = findPrevCell(newPuzzle);
    const { row, col } = nextCell;
    //printPuzzle(newPuzzle, 'inside backtrack loop"');
    newVal = fillCell(newPuzzle, row, col);
    if (newVal !== " ") {
      newPuzzle[row][col].cValue = newVal.toString();

      needToBackTrack = false;
      direction = "Forward";
      return [newPuzzle, direction];
    } else {
      newPuzzle[row][col].cValue = " ";
      needToBackTrack = true;
      direction = "Backward";
      return [newPuzzle, direction];
    }
  }
  return [newPuzzle, direction];
}

export default sudukoSolveOneCell;
