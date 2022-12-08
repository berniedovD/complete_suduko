import { loadDefaultPuzzle } from "./loadDefaultPuzzle";

export function getPuzzleListfromAPI(
  puzzleList,
  setPuzzleList,
  setPuzzle,
  setDefault
) {
  function responseFail(rejectReason) {
    console.log("fetch returned failed response");
    let puzzleList = loadDefaultPuzzle();
    console.log(puzzleList);
    setPuzzleList(puzzleList);
    setDefault(true);
  }

  function fulFillResp(fResp) {
    console.log("in fulFillRespm success ");
    console.log(fResp);
    setPuzzleList(fResp);
    setDefault(false);
  }
  function failResp(rejectReason) {
    console.log(`failed to get json response`);
    let puzzleList = loadDefaultPuzzle();
    console.log(puzzleList);

    setPuzzleList(puzzleList);
    setDefault(true);
  }
  function responseSuccess(fulfillmentValue) {
    console.log("in responseSuccess");
    let p2 = fulfillmentValue.json();
    p2.then(fulFillResp, failResp);
  }
  let URL = "http://127.0.0.1:9000/suduko/puzzles";
  URL = "http://127.0.0.1:9000/suduko/puzzleDB";
  URL = "http://52.87.211.153:8000/suduko/puzzleDB";
  URL = "http://107.23.231.158:8000/suduko/puzzleDB";
  URL = "http://35.153.177.177:8000/suduko/puzzleDB";
  URL = "http://52.90.144.5/suduko/puzzleDB";
  URL = "http://54.158.55.239/suduko/puzzleDB";

  let hostip = "54.224.90.36";
  hostip = "54.158.55.239";
  let docURL = document.URL;
  console.log(`URL=${docURL}`);
  let p1 = /http:\/\/(.*)[:/]/;
  p1 = /http:\/\/(\w+\.*\w*)[:/]+/;
  p1 = /http:\/\/([\w.]+)[/:]*/;
  //docURL = "http://123.44.55.33/";
  const m1 = docURL.match(p1);
  let uri;
  if (m1 != null) {
    uri = m1[1];
    console.log(`uri from regex=${uri}`);
  } else {
    console.log(`could not parse URI from $docURL`);
  }
  console.log(`uri=${uri}`);
  if (uri === "localhost") {
  } else {
    hostip = uri;
  }

  URL = `http://${hostip}/suduko/puzzleDB`;

  console.log("in getPuzzleListfromAPI");
  console.log("running new version 10/30/2022");
  console.log(`before fetch URL=${URL}`);

  fetch(URL).then(responseSuccess, responseFail);
}
