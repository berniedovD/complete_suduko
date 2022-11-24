function getInitialState() {
  console.log("in getInitialState");
  const puzarray = [
    "53--7----",
    "6--195---",
    "-98----6-",
    "8---6---3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "----8--79",
  ];

  let puzzStr = arraytoString(puzarray);
  puzzStr =
    "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";

  puzzStr =
    "010020300002003040080000006004700030000600008070098000300004090000800104006000000";

  puzzStr =
    "010020300002003040080000006004700030000600008070098000300004090000800104006000000";

  //let puzz = stringToSuduko(puzzStr);

  return puzzStr;
}

function arraytoString(inArray) {
  let puzarray = inArray;
  let pString = "";
  for (let rowN = 0; rowN < puzarray.length; rowN++) {
    let row = puzarray[rowN];
    for (let col in row) {
      let value = row[col];
      pString = pString + value;
    }
  }
  return pString;
}

function stringToSuduko(pString) {
  let cPtr = 0;
  let totPuzz = [];
  for (let row = 0; row < 9; row++) {
    let rP = [];
    for (let col = 0; col < 9; col++) {
      let stringVal = pString[cPtr];

      if (stringVal === "0") {
        stringVal = "-";
      }

      let isnum = /^\d+$/.test(stringVal);
      if (stringVal !== "-" && isnum) {
        let pCell = {};
        pCell.cValue = stringVal;
        pCell.cType = "P";
        pCell.selected = false;
        rP.push(pCell);
      } else {
        let pCell = {};
        pCell.cValue = " ";
        pCell.cType = "E";
        pCell.selected = false;
        rP.push(pCell);
      }
      cPtr += 1;
    }
    totPuzz.push(rP);
  }
  return totPuzz;
}

function flattenSuduko(puzzle) {
  let outList = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = puzzle[row][col];
      cell.row = row;
      cell.col = col;
      if (cell.cType === "E") {
        outList.push(cell);
      }
    }
  }
  return outList;
}
function printPuzzle(puzzle, message) {
  let x = 0;
  if (x === 1) {
    return;
  }
  if (message === undefined) {
    message = "in printPuzzle";
  } else {
    message = "in printPuzzle " + message;
  }
  console.log(message);
  for (let row = 0; row < 9; row++) {
    let rowString = "";
    for (let col = 0; col < 9; col++) {
      let pval = puzzle[row][col].cValue;
      if (pval === " ") {
        pval = "-";
      }
      rowString = rowString + " " + pval;
    }
    console.log(rowString);
  }
}

function checkSet(testSet) {
  let counts = {};
  for (const x of testSet) {
    if (counts[x]) {
      counts[x] += 1;
      return false;
    } else {
      counts[x] = 1;
    }
  }
  return true;
}
function checkRow(rowNum, puzzle) {
  let row = puzzle[rowNum];
  let cSet = [];
  for (const value of row) {
    if (value.cValue !== " ") {
      cSet.push(value.cValue);
    }
  }
  let isRowGood = checkSet(cSet);
  if (isRowGood) {
    return true;
  } else {
    return false;
  }
}
function checkColumn(colNum, puzzle) {
  let cSet = [];
  for (const row of puzzle) {
    let pVal = row[colNum].cValue;
    if (pVal !== " ") {
      cSet.push(pVal);
    }
  }
  let isColGood = checkSet(cSet);
  if (isColGood) {
    return true;
  } else {
    return false;
  }
}
function checkGrid(row, col, puzzle) {
  let gridParms = getGridNum(row, col);
  const { gridOrigin } = gridParms;
  let [oRow, oCol] = gridOrigin;
  let cSet = [];
  for (let x = oRow; x < oRow + 3; x++) {
    for (let y = oCol; y < oCol + 3; y++) {
      let val = puzzle[x][y].cValue;
      if (val !== " ") {
        cSet.push(val);
      }
    }
  }
  let isGood = checkSet(cSet);
  if (isGood) {
    return true;
  } else {
    return false;
  }
}
function checkAllGrids(puzzle) {
  const mapGridOrigin = {
    1: [0, 0],
    2: [0, 3],
    3: [0, 6],
    4: [3, 0],
    5: [3, 3],
    6: [3, 6],
    7: [6, 0],
    8: [6, 3],
    9: [6, 6],
  };
  let allGrids = true;
  for (let i = 1; i < 10; i++) {
    let [gRow, gCol] = mapGridOrigin[i];
    let ckGrid = checkGrid(gRow, gCol, puzzle);
    if (ckGrid === false) {
      allGrids = false;
      return false;
    }
  }
  return allGrids;
}
function getGridNum(row, col) {
  const gridMap = [
    "111222333",
    "111222333",
    "111222333",
    "444555666",
    "444555666",
    "444555666",
    "777888999",
    "777888999",
    "777888999",
  ];
  const mapGridOrigin = {
    1: [0, 0],
    2: [0, 3],
    3: [0, 6],
    4: [3, 0],
    5: [3, 3],
    6: [3, 6],
    7: [6, 0],
    8: [6, 3],
    9: [6, 6],
  };
  let gridArray = [];
  for (let gmRow of gridMap) {
    let nRow = [];
    for (let gmCol of gmRow) {
      nRow.push(gmCol);
    }
    gridArray.push(nRow);
  }
  const gridNum = gridArray[row][col];
  const gridOrigin = mapGridOrigin[gridNum];

  return { gridNum: gridNum, gridOrigin: gridOrigin };
}

function checkFullPuzzle(puzzle) {
  let isPuzzleGood = true;
  for (let r = 0; r < 9; r++) {
    let isRowGood = checkRow(r, puzzle);
    if (!isRowGood) {
      isPuzzleGood = false;
      return isPuzzleGood;
    }
    let c = r;
    let isColumnGood = checkColumn(c, puzzle);
    if (!isColumnGood) {
      isPuzzleGood = false;
      return false;
    }
  }
  let ckGrids = checkAllGrids(puzzle);
  if (!ckGrids) {
    return false;
  }

  return true;
}

export {
  getInitialState,
  printPuzzle,
  stringToSuduko,
  arraytoString,
  checkSet,
  getGridNum,
  checkRow,
  checkColumn,
  checkGrid,
  checkAllGrids,
  checkFullPuzzle,
  flattenSuduko,
};
