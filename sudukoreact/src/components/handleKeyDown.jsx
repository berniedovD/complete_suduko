export function handleKeyDown(fullState, e, handleClickCell) {
  const { lastSelected, setLastSelected, puzzle, setPuzzle } = fullState;
  let { x, y } = lastSelected;
  let x2 = x;
  let y2 = y;

  if (e.key === "ArrowLeft") {
    y2 = y;
    x2 = x;
    y2 = y - 1;
    if (y2 < 0) {
      y2 = 8;
      x2 = x2 - 1;
      if (x2 < 0) {
        x2 = 0;
        y2 = 0;
      }
    }
    let nlastSelected = { x: x2, y: y2 };
    setLastSelected(nlastSelected);
    handleClickCell(x2, y2);
  }
  if (e.key === "ArrowRight") {
    y2 = y;
    x2 = x;
    y2 = y + 1;
    if (y2 > 8) {
      y2 = 0;
      x2 = x2 + 1;
      if (x2 > 8) {
        x2 = 8;
        y2 = 8;
      }
    }
    let nlastSelected = { x: x2, y: y2 };
    setLastSelected(nlastSelected);
    handleClickCell(x2, y2);
  }
  let sRow = x;
  let sCol = y;
  let cPuzzle = [...puzzle];
  if (cPuzzle[sRow][sCol].cType === "P") {
    return;
  }
  let isnum = /^\d+$/.test(e.key);
  if (isnum) {
    if (e.key === "0") {
      cPuzzle[x][y].cValue = " ";
    } else {
      cPuzzle[x][y].cValue = e.key;
    }
    setPuzzle(cPuzzle);
  }
}
