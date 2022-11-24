import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Suduko from "./Suduko";

import LoadPuzzle from "./loadPuzzle";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Link to="/Suduko">Solve Puzzle</Link>
        <div>
          <Link to="/LoadPuzzle">Load Puzzle</Link>{" "}
        </div>

        <Routes>
          <Route path="/Suduko" element={<Suduko />} />

          <Route path="/LoadPuzzle" element={<LoadPuzzle />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
