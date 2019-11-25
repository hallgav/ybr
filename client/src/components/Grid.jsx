import React from "react";

import "./Grid.css";

const Grid = ({ headings, data, onRowClick, isLoading }) => {
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
          {isLoading ? (
            <ShowWaiting size={headings.length} />
          ) : (
            <ShowGrid value={data} onClick={onRowClick} />
          )}
        </tbody>
      </table>
    </div>
  );
};

const ShowWaiting = props => {
  return (
    <tr>
      <td colSpan={props.size}>
        <div className="grid-waiting__wrapper">
          <div className="grid-waiting"/>
        </div>
      </td>
    </tr>
  );
};

const ShowGrid = ({ value, onClick }) => {
  const renderCell = (parent, value, position, rowId) => {
    //The first column is a "key" and has a link hook
    return position === 0 ? (
      <td key={rowId + position} id={position}>
        <button onClick={e => onClick(e, parent)}>{value}</button>
      </td>
    ) : (
      <td key={rowId + position}>{value}</td>
    );
  };
  renderCell.bind(this);
  return value.map((row, index) => (
    <tr id={index} key={index} onClick={e => onClick(e, row, index)}>
      {row.map((cell, i) => renderCell(row, cell, i, index))}
    </tr>
  ));
};

export default Grid;
