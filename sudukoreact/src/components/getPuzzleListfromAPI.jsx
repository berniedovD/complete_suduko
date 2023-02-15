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

  let docURL = document.URL;
  console.log(`URL=${docURL}`);

  const p1 = /https:\/\/([\w.]+)[/:]*/;

  const m1 = docURL.match(p1);
  let uri;
  let hostip = "dovbear.org";
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

  let URLbe = `http://${hostip}/suduko/puzzleDB`;

  console.log("in getPuzzleListfromAPI");
  console.log("running new version 10/30/2022");
  console.log(`before fetch URL=${URL}`);

  fetch(URLbe).then(responseSuccess, responseFail);
}
