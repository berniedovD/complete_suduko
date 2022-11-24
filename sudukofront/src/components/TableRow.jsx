import React, { Component } from "react";
class TableRow extends Component {
  state = {};
  getCellStyle(inRow, inCol) {
    const cellStyleMap = [
      "123123123",
      "456456456",
      "789789789",
      "123123123",
      "456456456",
      "789789789",
      "123123123",
      "456456456",
      "789789789",
    ];
    let sa = [];
    for (let row = 0; row < 9; row++) {
      let ra = [];
      for (let col = 0; col < 9; col++) {
        let cell = cellStyleMap[row][col];
        ra.push(cell);
      }
      sa.push(ra);
    }
    return sa[inRow][inCol];
  }
  render() {
    const preSetStyle = { color: "black" };
    const userSetStyle = { color: "blue" };

    const { puzzRow, rowNum, handleClick } = this.props;

    let rowTd = [];
    let puzCopy = [...puzzRow];
    for (let r = 0; r < 9; r++) {
      let cellMap = this.getCellStyle(rowNum, r);
      let cellSel = puzCopy[r].selected;
      let cType = puzCopy[r].cType;
      let tdStyle = preSetStyle;
      if (cType === "E") {
        tdStyle = userSetStyle;
      }
      let tdClassName = "dov-td-" + cellMap;
      if (cellSel) {
        tdClassName = "dov-td-sel";
      }
      rowTd.push(
        <td
          className={tdClassName}
          style={tdStyle}
          key={r}
          onClick={() => handleClick(rowNum, r)}
        >
          {puzCopy[r].cValue}
        </td>
      );
    }
    return <tr>{rowTd}</tr>;
  }
}

export default TableRow;
