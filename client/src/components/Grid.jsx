import React from "react";

import "./Grid.css";

const Grid = ({ headings, data }) => {
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
            <tr id={index}>
              {row.map(cell => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
