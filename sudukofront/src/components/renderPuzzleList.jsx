import React from "react";
import buildRenderTable from "./buildRenderTable";
function renderPuzzleList(
  puzzleList,
  setPuzzleList,
  getDataWrap,
  setPuzzle,
  defaultPuzzle
) {
  console.log("in renderPuzzleList");
  console.log(puzzleList);
  let rList = buildRenderTable(puzzleList, setPuzzleList, setPuzzle);
  let tblElement = (
    <table className="puzzle-table">
      <thead>
        <tr>
          <th># </th>
          <th>ID</th>
          <th>Puzzle String</th>
        </tr>
      </thead>
      <tbody>{rList}</tbody>
    </table>
  );
  let hdrElement = (
    <div>
      <h1>List of Puzzles from API </h1>
      <h1>Click on Puzzle ID to load puzzle</h1>
      <button className="button-9" onClick={() => getDataWrap(puzzleList)}>
        Get List of Puzzles from hardcoded backend
      </button>
      <button className="button-9" onClick={() => getDataWrap(puzzleList)}>
        Get list of Puzzles From Database
      </button>
    </div>
  );
  console.log(`DefaultPuzzle=${defaultPuzzle}`);
  if (defaultPuzzle) {
    hdrElement = (
      <div>
        <h1>
          Could not load Puzzle List from API - below is default Internal puzzle
          List{" "}
        </h1>
        <h1>Click on Puzzle ID to load puzzle</h1>
        <button className="button-9" onClick={() => getDataWrap(puzzleList)}>
          Get List of Puzzles from backend
        </button>
      </div>
    );
  }

  let reactReturn = (
    <React.Fragment>
      {hdrElement}
      {tblElement}
      <h1>THIS IS A TEST </h1>
    </React.Fragment>
  );
  return reactReturn;
}

export { renderPuzzleList };
