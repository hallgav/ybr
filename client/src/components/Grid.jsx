import React from "react";

import "./Grid.css";

const Grid = ({ headings, data, onRowClick, onRowLinkClick }) => {

  const testClick = () => console.log("link clicked")

  const renderCell = (parent, value, position) => {
    return position === 0 ? <td><button onClick={(e) => onRowLinkClick(e, parent)}>{value}</button></td> : <td>{value}</td>
  }

  renderCell.bind(this)
  return (
    <div className="grid-main">
      <table>
        <thead>
          <tr>
            {headings.map(h => (
              <th>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr id={index} onClick={(e) => onRowClick(e, row, index)}>
              {row.map((cell, i) => renderCell(row, cell, i)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
