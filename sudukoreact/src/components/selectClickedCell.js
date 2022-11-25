export function selectClickedCell(fullState, row, col) {
  const { lastSelected, puzzle, setPuzzle, setLastSelected } = fullState;
  const { x, y } = lastSelected;
  let cPuzzle = [...puzzle];
  cPuzzle[x][y].selected = false;
  cPuzzle[row][col].selected = true;
  let copyLastSelected = { x: row, y: col };
  setPuzzle(cPuzzle);
  setLastSelected(copyLastSelected);
}
