import { getInitialState } from "./sudukoHelperFunctions.js";
export function loadDefaultPuzzle() {
  let puzString = getInitialState();
  let puzzList = [{ puzzleID: "p1", sudukoString: puzString }];
  return puzzList;
}
