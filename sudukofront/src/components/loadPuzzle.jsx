import { useState, useEffect } from "react";

import { renderPuzzleList } from "./renderPuzzleList";
import { getPuzzleListfromAPI } from "./getPuzzleListfromAPI";
//import { loadDefaultPuzzle } from "./loadDefaultPuzzle";

function LoadPuzzle(props) {
  let [puzzleList, setPuzzleList] = useState([]);
  let [defaultPuzzle, setDefaultPuzzle] = useState(false);

  const { setPuzzle } = props;
  console.log("in LoadPuzzle ");
  console.log(puzzleList);
  console.log(`defaultPuzzle=${defaultPuzzle}`);
  ///////////////////////////  GetDataWrap Function //////////////////////
  function getDataWrap(puzzleList) {
    console.log("inside getDataWrap");
    getPuzzleListfromAPI(
      puzzleList,
      setPuzzleList,
      setPuzzle,
      setDefaultPuzzle
    );
  }

  // eslint-disable-next-line
  useEffect(getDataWrap, []);

  return renderPuzzleList(
    puzzleList,
    setPuzzleList,
    getDataWrap,
    setPuzzle,
    defaultPuzzle
  );
}
export default LoadPuzzle;
