import React from "react";

import "./Grid.css";

const Grid = ({ headings, data, onRowClick, onRowLinkClick }) => {

  const renderCell = (parent, value, position, rowId) => {
    //The first column is a "key" and has a link hook
    return position === 0 ? <td key={rowId+position} id={position}><button onClick={(e) => onRowLinkClick(e, parent)}>{value}</button></td> : <td key={rowId+position}>{value}</td>
  }

  renderCell.bind(this)
  return (
    <div className="grid-main">
      <table>
        <thead>
          <tr>
            {headings.map((h, index) => (
              <th key={index}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr id={index} key={index} onClick={(e) => onRowClick(e, row, index)}>
              {row.map((cell, i) => renderCell(row, cell, i, index)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
